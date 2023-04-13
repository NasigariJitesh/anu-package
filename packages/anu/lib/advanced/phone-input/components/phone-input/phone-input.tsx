/* eslint-disable unicorn/no-useless-undefined */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/display-name */
import { getCombinedStylesForView } from 'anu/common/utils';
import { AutoComplete, AutoCompleteReferenceProps, convertToOptionsFormat } from 'anu/lib/composites';
import { Container, IconButton, Image, Typography } from 'anu/lib/primitives';
import { AsYouType, ParseError, parsePhoneNumber, parsePhoneNumberWithError, PhoneNumber } from 'libphonenumber-js';
import { debounce as loadashDebounce } from 'lodash';
import React, { forwardRef, useCallback, useEffect, useImperativeHandle, useMemo, useRef, useState } from 'react';
import { Platform } from 'react-native';

import { CountryCodeObject, PhoneInputProps, PhoneInputReferenceProps } from '../../types';
import { countryCodes, getDefaultStyles } from '../../utils';
import CountryItem from './country-item';
import { defaultProps } from './default';

const keyExtractor = (item: CountryCodeObject) => {
  return item.name + item.countryCode;
};

const PhoneInput = forwardRef<PhoneInputReferenceProps, PhoneInputProps>((props, reference) => {
  const finalProps = { ...defaultProps, ...props };

  const [currentCountry, setCurrentCountry] = useState<CountryCodeObject>();
  const [selectedCountry, setSelectedCountry] = useState<CountryCodeObject>();
  const [showCountries, toggleShowCountries] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string[]>([]);
  const asYouType = new AsYouType();

  const { defaultResultsContainerStyle, defaultSelectedEmojiStyle, defaultSelectedFlagStyle, defaultTextFieldStyles } =
    getDefaultStyles();

  const countryCodesData = useMemo(() => convertToOptionsFormat(countryCodes, keyExtractor), []);

  const autoCompleteReference = useRef<AutoCompleteReferenceProps | null>(null);

  const parseForErrors = (text: string) => {
    try {
      const phoneNumber = parsePhoneNumberWithError(text);
      if (phoneNumber.isValid()) setError(false);
      else {
        setError(true);
        setErrorMessage(['Invalid Phone Number']);
      }
    } catch (error_) {
      setError(true);

      switch ((error_ as ParseError).message) {
        case 'TOO_LONG': {
          {
            setErrorMessage([
              'Invalid Phone Number',
              'The phone number is too large, Please enter exact number of digits',
            ]);
            return;
          }
        }
        case 'TOO_SHORT': {
          {
            setErrorMessage([
              'Invalid Phone Number',
              'The phone number is too short, Please enter exact number of digits',
            ]);
            return;
          }
        }
      }
    }
  };

  const debouncedParseForErrors = useMemo(() => {
    return loadashDebounce((text: string) => parseForErrors(text), finalProps.debounceDuration ?? 2000);
  }, [parseForErrors]);

  useEffect(() => {
    return () => {
      debouncedParseForErrors.cancel();
    };
  }, []);

  const focus = useCallback(() => {
    autoCompleteReference.current?.focus();
  }, [autoCompleteReference]);

  const blur = useCallback(() => {
    autoCompleteReference.current?.blur();
  }, [autoCompleteReference]);

  useImperativeHandle(reference, () => ({ focus, blur }), [focus, blur]);

  const { value, onChangeText, leadingIcon, flatListProps, ...otherAutoCompleteProps } = finalProps;

  const onChangeTextHandler = (string: string) => {
    let text = string.trim();

    text = text.replace(/[^\d\s+]/i, '');

    if (text != '') text = text[0] === '+' ? text : '+' + text;

    let phoneNumber: PhoneNumber | undefined;

    asYouType.input(text);

    const matchedCountry = countryCodesData.filter(
      (item) => (item.value as CountryCodeObject).alt === asYouType.country,
    );
    if (matchedCountry.length === 1) {
      setCurrentCountry(matchedCountry[0].value as CountryCodeObject);
    } else if (selectedCountry && text.includes(selectedCountry?.countryCode)) {
      // do nothing
    } else {
      setCurrentCountry(undefined);
    }
    try {
      phoneNumber = parsePhoneNumber(text);
    } catch {
      //DO nothing
    }
    if (phoneNumber) onChangeText(phoneNumber.formatInternational(), phoneNumber);
    else onChangeText(text);

    debouncedParseForErrors(text);
  };

  const filterOptions = (text: string) => {
    const givenCode = text.length > 5 ? text.slice(1, 4) : text.slice(1);

    const matches = countryCodesData.filter((item) =>
      (item.value as CountryCodeObject).countryCode.includes(givenCode),
    );

    return currentCountry ? [] : matches;
  };

  const updateStates = (country?: CountryCodeObject) => {
    setCurrentCountry(country);
    setSelectedCountry(country);
  };

  const setCountryCodeObject = (object: CountryCodeObject) => {
    updateStates(object);
    onChangeText(object.countryCode);
    autoCompleteReference.current?.focus();
    toggleShowCountries(false);
  };

  const LeadingIcon = ({ children }: { children: React.ReactNode }) => {
    const [flagLoadingError, setFlagLoadingError] = useState(false);
    return (
      <Container disableGutters flexDirection='row' align='center'>
        {children}
        {currentCountry ? (
          Platform.OS === 'web' || Platform.OS === 'windows' || !flagLoadingError ? (
            <Image
              alt={currentCountry.alt}
              source={{ uri: currentCountry.flag }}
              onError={() => setFlagLoadingError(true)}
              onPartialLoad={() => setFlagLoadingError(true)}
              onLoad={() => setFlagLoadingError(false)}
              style={defaultSelectedFlagStyle}
            />
          ) : (
            <Typography.Body style={defaultSelectedEmojiStyle}>{currentCountry.emoji}</Typography.Body>
          )
        ) : null}
      </Container>
    );
  };

  return (
    <AutoComplete
      {...otherAutoCompleteProps}
      style={{ ...defaultTextFieldStyles, ...otherAutoCompleteProps.style }}
      resultContainerStyle={getCombinedStylesForView(
        defaultResultsContainerStyle,
        otherAutoCompleteProps.resultContainerStyle,
      )}
      ref={autoCompleteReference}
      data={countryCodesData}
      autoComplete='tel'
      keyboardType='phone-pad'
      value={value}
      direction='rtl'
      onChangeText={onChangeTextHandler}
      filterOnChange={filterOptions}
      showResults={showCountries}
      toggleShowResults={toggleShowCountries}
      error={error}
      errorMessage={errorMessage}
      flatListProps={{
        ...flatListProps,
        renderItem: (info) => <CountryItem {...info} setObject={setCountryCodeObject} />,
      }}
      leadingIcon={<LeadingIcon>{leadingIcon}</LeadingIcon>}
      trailingIcon={
        value ? (
          <IconButton
            icon={{ name: 'close' }}
            onPress={() => {
              onChangeText('');
              updateStates(undefined);
            }}
            type={'standard'}
          />
        ) : null
      }
      onFocus={() => {
        if (currentCountry) toggleShowCountries(false);
        else toggleShowCountries(true);
      }}
    />
  );
});

export default PhoneInput;
