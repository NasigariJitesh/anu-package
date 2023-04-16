/* eslint-disable react/display-name */
import { getCombinedStylesForView } from 'anu/common/utils';
import { useTheme } from 'anu/config';
import { AutoComplete, AutoCompleteReferenceProps, IconButton, Options } from 'anu/lib';
import React, { forwardRef, useCallback, useImperativeHandle, useRef, useState } from 'react';
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

  const [results, setResults] = useState<Options[]>([]);
  const autoCompleteReference = useRef<AutoCompleteReferenceProps | null>(null);

  const focus = useCallback(() => {
    autoCompleteReference.current?.focus();
  }, [autoCompleteReference]);

  const blur = useCallback(() => {
    autoCompleteReference.current?.blur();
  }, [autoCompleteReference]);

  useImperativeHandle(reference, () => ({ focus, blur, results }), [focus, blur, results]);

  const { height, width } = useWindowDimensions();

  const theme = useTheme();

  const {
    type,
    data,
    value,
    searchBarContainerStyle,
    searchBarStyle,
    containerStyle,
    resultContainerStyle,
    onFocus,
    onBlur,
    filterOnChange,
    leadingIcon,

    ...autoCompleteProps
  } = finalProps;

  /**
   * Component for the leading component of the search bar
   */
  const getLeadingComponent = () => {
    return active && type === 'full-screen' ? (
      <IconButton type='standard' icon={{ name: 'arrow-back' }} onPress={() => setActive(false)} />
    ) : (
      leadingIcon
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

  const { defaultSearchBarStyle, activeSearchBarContainerStyle, defaultResultsContainerStyle, defaultContainerStyle } =
    getSearchBarStyle(theme, height, width, active, type);

  return (
    <AutoComplete
      {...autoCompleteProps}
      ref={autoCompleteReference}
      variant='base'
      data={results}
      value={value}
      leadingIcon={getLeadingComponent()}
      autoCompleteContainerStyle={getCombinedStylesForView(activeSearchBarContainerStyle, searchBarContainerStyle)}
      containerStyle={getCombinedStylesForView(defaultContainerStyle, containerStyle)}
      style={{ ...defaultSearchBarStyle, ...searchBarStyle }}
      resultContainerStyle={getCombinedStylesForView(defaultResultsContainerStyle, resultContainerStyle)}
      hideDropDownButton={true}
      onFocus={(event) => {
        focusEventHandler(event, true, onFocus);
      }}
      filterOnChange={filterOnChangeHandler}
      disableLabelAnimation={true}
      error={false}
    />
  );
});

export default SearchBar;
