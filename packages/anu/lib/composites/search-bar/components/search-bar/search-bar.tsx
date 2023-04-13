/* eslint-disable react/display-name */
import { getCombinedStylesForView } from 'anu/common/utils';
import { useTheme } from 'anu/config';
import { AutoComplete, AutoCompleteReferenceProps, IconButton, Options } from 'anu/lib';
import React, { forwardRef, useCallback, useEffect, useImperativeHandle, useRef, useState } from 'react';
import { NativeSyntheticEvent, TextInputFocusEventData, useWindowDimensions } from 'react-native';

import { SearchBarProps, SearchBarReferenceProps } from '../../types';
import { getSearchBarStyle } from '../../utils';
import { defaultProps } from './default';

/**
 * Search Bar Component
 */
const SearchBar = forwardRef<SearchBarReferenceProps, SearchBarProps>((props, reference) => {
  const finalProps = { ...defaultProps, ...props };
  const [active, setActive] = useState(false);
  const timeOutReference1 = useRef<null | ReturnType<typeof setTimeout>>();
  const timeOutReference2 = useRef<null | ReturnType<typeof setTimeout>>();
  const [results, setResults] = useState<Options[]>([]);
  const autoCompleteReference = useRef<AutoCompleteReferenceProps | null>(null);

  const focus = useCallback(() => {
    autoCompleteReference.current?.focus();
  }, [autoCompleteReference]);

  const blur = useCallback(() => {
    autoCompleteReference.current?.blur();
  }, [autoCompleteReference]);

  useImperativeHandle(reference, () => ({ focus, blur, results }), [focus, blur, results]);

  useEffect(() => {
    return () => {
      if (timeOutReference1.current) clearTimeout(timeOutReference1.current);
      if (timeOutReference2.current) clearTimeout(timeOutReference2.current);
    };
  }, []);

  const { height, width } = useWindowDimensions();

  const theme = useTheme();

  const {
    type,
    data,
    value,
    searchBarStyle,
    containerStyle,
    resultContainerStyle,
    onFocus,
    onBlur,
    filterOnChange,
    clearText,
    leadingComponent,
    trailingComponent,
    ...autoCompleteProps
  } = finalProps;

  /**
   * Component for the leading component of the search bar
   */
  const getLeadingComponent = () => {
    return active && type === 'full-screen' ? (
      <IconButton type='standard' icon={{ name: 'arrow-back' }} onPress={() => setActive(false)} />
    ) : (
      leadingComponent
    );
  };

  /**
   * Component for the leading component of the search bar
   */
  const getTrailingComponent = () => {
    return active && value ? (
      <IconButton
        type='standard'
        icon={{ name: 'clear' }}
        onPress={() => {
          clearText();
          timeOutReference2.current = setTimeout(() => {
            autoCompleteReference.current?.focus();
            setActive(true);
          }, 400);
        }}
      />
    ) : (
      trailingComponent
    );
  };

  const filterOnChangeHandler = (key: string) => {
    const matches = filterOnChange(key);
    setResults(matches);
    if (key === '') {
      setResults([]);
      return [];
    }
    return matches;
  };

  const focusEventHandler = (
    event: NativeSyntheticEvent<TextInputFocusEventData>,
    activeValue: boolean,
    callback?: { (event: NativeSyntheticEvent<TextInputFocusEventData>): void },
  ) => {
    setActive(activeValue);
    if (callback) return callback(event);
  };

  const { defaultSearchBarStyle, activeSearchBarContainerStyle, defaultResultsContainerStyle } = getSearchBarStyle(
    theme,
    height,
    width,
    active,
    type,
  );

  return (
    <AutoComplete
      {...autoCompleteProps}
      ref={autoCompleteReference}
      data={results}
      value={value}
      clearButtonMode='always'
      leadingComponent={getLeadingComponent()}
      trailingComponent={getTrailingComponent()}
      autoCompleteContainerStyle={getCombinedStylesForView(activeSearchBarContainerStyle, containerStyle)}
      autoCompleteStyle={getCombinedStylesForView(defaultSearchBarStyle, searchBarStyle)}
      resultContainerStyle={getCombinedStylesForView(defaultResultsContainerStyle, resultContainerStyle)}
      hideDropDownButton={true}
      onFocus={(event) => {
        focusEventHandler(event, true, onFocus);
      }}
      onBlur={(event) => {
        timeOutReference1.current = setTimeout(() => {
          focusEventHandler(event, false, onBlur);
        }, 500);
      }}
      filterOnChange={filterOnChangeHandler}
    />
  );
});

export default SearchBar;
