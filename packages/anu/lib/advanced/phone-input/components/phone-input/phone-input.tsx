/* eslint-disable no-secrets/no-secrets */
/* eslint-disable unicorn/no-useless-undefined */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/display-name */
import { getCombinedStylesForText } from 'anu/common/utils';
import { AutoComplete, AutoCompleteReferenceProps, Container, convertToOptionsFormat, Options } from 'anu/lib';
import { AsYouType, ParseError, parsePhoneNumber, parsePhoneNumberWithError, PhoneNumber } from 'libphonenumber-js';
import { debounce as lodashDebounce, DebouncedFunc } from 'lodash';
import React, { forwardRef, useCallback, useEffect, useImperativeHandle, useMemo, useRef, useState } from 'react';

import { CountryCodeObject, PhoneInputProps, PhoneInputReferenceProps } from '../../types';
import { countryCodes, getDefaultStyles } from '../../utils';
import CountryFlag from './country-flag';
import CountryItem from './country-item';
import { defaultProps } from './default';

/**
 * To generate key-labels for the autocomplete format
 *
 * @param item - Object containing country's code, name, flag, emoji
 * @returns {string} - unique key for each country code
 */
const keyExtractor = (item: CountryCodeObject) => {
  return item.name + item.countryCode;
};

/**
 * To check the matching countries for given country code
 *
 * @param countryCodesData - Array of country code objects
 * @param countryAlphabeticalCode - 2 letter country code to match with country
 * @returns {Option[]} - array of countries matched
 */
const checkForMatch = (countryCodesData: Options[], countryAlphabeticalCode?: string) => {
  return countryCodesData.filter((item) => (item.value as CountryCodeObject).alt === countryAlphabeticalCode);
};

/**
 *
 * @param countryCode - The country telephoneCode
 * @param asYouType - AsYouType class object of the libphonenumber-js library
 * @param countryCodesData - Array of country code objects
 */
const getDefaultCountry = (countryCode: string, asYouType: AsYouType, countryCodesData: Options[]) => {
  asYouType.input(countryCode);
  const match = checkForMatch(countryCodesData, asYouType.country);
  if (match.length === 1) return match[0]!.value as CountryCodeObject;
  else if (match.length > 1) {
    const exactMatch = match.filter((country) => (country.value as CountryCodeObject).countryCode === countryCode);

    if (exactMatch.length === 1) return exactMatch[0]!.value as CountryCodeObject;
  }
};

/**
 * Phone Input Component
 */
const PhoneInput = forwardRef<PhoneInputReferenceProps, PhoneInputProps>((props, reference) => {
  const finalProps = { ...defaultProps, ...props };
  const asYouType = new AsYouType();

  const countryCodesData = useMemo(() => convertToOptionsFormat(countryCodes, keyExtractor), []);

  const [showCountries, toggleShowCountries] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<CountryCodeObject>();
  const [currentCountry, setCurrentCountry] = useState<CountryCodeObject | undefined>(
    getDefaultCountry(props.value, asYouType, countryCodesData),
  );

  const autoCompleteReference = useRef<AutoCompleteReferenceProps | null>(null);

  const { value, onChangeText, leadingIcon, flatListProps, ...otherAutoCompleteProps } = finalProps;

  const { defaultTextFieldStyles, defaultTextInputStyle } = getDefaultStyles();

  const focus = useCallback(() => {
    autoCompleteReference.current?.focus();
  }, [autoCompleteReference]);

  const blur = useCallback(() => {
    autoCompleteReference.current?.blur();
  }, [autoCompleteReference]);

  useImperativeHandle(reference, () => ({ focus, blur }), [focus, blur]);

  useEffect(() => {
    return () => {
      debouncedParseForErrors.cancel();
    };
  }, []);

  useEffect(() => {
    if (props.defaultCountryCode) {
      onChangeTextHandler(props.defaultCountryCode);
    }
  }, [props.defaultCountryCode]);

  const parseForErrors = (text: string) => {
    try {
      const phoneNumber = parsePhoneNumberWithError(text);
      if (phoneNumber.isValid()) {
        updateCurrentCountry(phoneNumber.number, phoneNumber.country);
        setError(false);
      } else {
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

  const debouncedParseForErrors: DebouncedFunc<(text: string) => void> = useMemo(() => {
    return lodashDebounce((text: string) => parseForErrors(text), finalProps.debounceDuration ?? 2000);
  }, [parseForErrors]);

  const updateCurrentCountry = (text: string, parsedCountry?: string) => {
    const matchedCountry = checkForMatch(countryCodesData, parsedCountry);

    //Check for the exact match of the country code
    if (matchedCountry.length === 1) {
      setCurrentCountry(matchedCountry[0]!.value as CountryCodeObject);
    } else if (matchedCountry.length > 1) {
      const exactMatch = matchedCountry.filter((country) => {
        return text
          .split(' ')
          .join('')
          .includes((country.value as CountryCodeObject).countryCode);
      });

      if (exactMatch.length === 1) setCurrentCountry(exactMatch[0]!.value as CountryCodeObject);
    } else if (selectedCountry && text.split(' ').join('').includes(selectedCountry?.countryCode)) {
      // do nothing
    } else {
      setCurrentCountry(undefined);
    }
  };

  const onChangeTextHandler = (string: string) => {
    let text = string.trim();

    text = text.replace(/[^\d\s+]/i, '');

    if (text === '') {
      setError(false);
    } else {
      text = text[0] === '+' ? text : '+' + text;
    }

    let phoneNumber: PhoneNumber | undefined;

    asYouType.input(text);

    updateCurrentCountry(text, asYouType.country);

    //parse the phoneNumber to get other data related to phoneNumber
    try {
      phoneNumber = parsePhoneNumber(text);
    } catch {
      //DO nothing
    }

    if (phoneNumber) onChangeText(phoneNumber.formatInternational(), phoneNumber);
    else onChangeText(text);

    if (text.length > 5) debouncedParseForErrors(text);
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

  const getCustomErrorMessages = () => {
    if (otherAutoCompleteProps.errorMessage)
      return Array.isArray(otherAutoCompleteProps.errorMessage)
        ? otherAutoCompleteProps.errorMessage
        : [otherAutoCompleteProps.errorMessage];
    else return [];
  };

  const LeadingIcon = ({ children }: { children: React.ReactNode }) => {
    return (
      <Container disableGutters flexDirection='row' align='center'>
        {children}
        <CountryFlag value={value} currentCountry={currentCountry} disabled={finalProps.disabled} />
      </Container>
    );
  };

  return (
    <AutoComplete
      {...otherAutoCompleteProps}
      style={{ ...defaultTextFieldStyles, ...otherAutoCompleteProps.style }}
      textStyle={getCombinedStylesForText(defaultTextInputStyle, otherAutoCompleteProps.textStyle)}
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
      error={error || otherAutoCompleteProps.error}
      errorMessage={[...errorMessage, ...getCustomErrorMessages()]}
      flatListProps={{
        ...flatListProps,
        renderItem: (info) => <CountryItem {...info} setObject={setCountryCodeObject} />,
      }}
      leadingIcon={<LeadingIcon>{leadingIcon}</LeadingIcon>}
      onFocus={(event) => {
        if (currentCountry) toggleShowCountries(false);
        else toggleShowCountries(true);
        if (otherAutoCompleteProps.onFocus) otherAutoCompleteProps.onFocus(event);
      }}
    />
  );
});

export default PhoneInput;
