/* eslint-disable react/display-name */
import { getCombinedStylesForView } from 'anu/common/utils';
import { useTheme } from 'anu/config';
import { AutoComplete, AutoCompleteReferenceProps, Container, IconButton, Options } from 'anu/lib';
import React, { forwardRef, useCallback, useEffect, useImperativeHandle, useRef, useState } from 'react';
import { Modal, StyleSheet, useWindowDimensions } from 'react-native';

import { SearchBarProps, SearchBarReferenceProps } from '../../types';
import { getSearchBarStyle } from '../../utils';
import { defaultProps } from './default';

/**
 * Search Bar Component
 */
const Search = forwardRef<SearchBarReferenceProps, SearchBarProps>((props, reference) => {
  const finalProps = { ...defaultProps, ...props };
  const [active, setActive] = useState(false);

  const [results, setResults] = useState<Options[]>([]);
  const autoCompleteReference = useRef<AutoCompleteReferenceProps | null>(null);

  useEffect(() => {
    if (props.value.length > 0) setActive(true);
  }, [props]);

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

    style,

    onFocus,
    onBlur,
    filterOnChange,
    leadingIcon,
    showResults,
    ...autoCompleteProps
  } = finalProps;

  /**
   * Component for the leading component of the search bar
   */
  const getLeadingComponent = () => {
    return active && type === 'full-screen' ? (
      <IconButton variant='standard' icon={{ name: 'arrow-back' }} onPress={() => setActive(false)} />
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

  const { defaultSearchBarStyle, defaultFlatListStyle } = getSearchBarStyle(theme, height, width, active, type);

  const getSearchBar = () => {
    return (
      <AutoComplete
        {...autoCompleteProps}
        ref={autoCompleteReference}
        variant='base'
        data={results}
        value={value}
        leadingIcon={getLeadingComponent()}
        style={{ ...defaultSearchBarStyle, ...style, ...(active && type === 'full-screen' ? { width } : {}) }}
        hideDropDownButton={true}
        onFocus={(event) => {
          setActive(true);
          if (onFocus) onFocus(event);
        }}
        onBlur={(event) => {
          setActive(false);
          if (onBlur) onBlur(event);
        }}
        filterOnChange={filterOnChangeHandler}
        disableLabelAnimation={true}
        error={false}
        flatListProps={{
          showsVerticalScrollIndicator: false,
          ...autoCompleteProps.flatListProps,
          style: getCombinedStylesForView(defaultFlatListStyle, autoCompleteProps.flatListProps.style),
        }}
        showResults={type === 'full-screen' ? active : showResults}
      />
    );
  };

  return active && type === 'full-screen' ? (
    <Modal
      presentationStyle='fullScreen'
      onRequestClose={() => {
        setActive(false);
        autoCompleteReference.current?.blur();
      }}
      onDismiss={() => {
        setActive(false);
        autoCompleteReference.current?.blur();
      }}
    >
      <Container disableGutters style={{ ...StyleSheet.absoluteFillObject, height, width }}>
        {getSearchBar()}
      </Container>
    </Modal>
  ) : (
    getSearchBar()
  );
});

export default Search;
