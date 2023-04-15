/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/display-name */
import { getCombinedStylesForView } from 'anu/common/utils';
import { useTheme } from 'anu/config';
import { Container } from 'anu/lib/primitives';
import { debounce as loadashDebounce } from 'lodash';
import React, { forwardRef, useCallback, useEffect, useImperativeHandle, useMemo } from 'react';
import { FlatList, NativeSyntheticEvent, TextInputFocusEventData } from 'react-native';

import { AutoCompleteProps, AutoCompleteReferenceProps, Options } from '../../types';
import { getAutoCompleteStyles } from '../../utils';
import { useAutoCompleteContext } from '../context/context';
import { defaultProps } from './default';
import TextFieldAutoComplete from './text-field-auto-complete';

/**
 * component for auto-complete
 */
const AutoComplete = forwardRef<AutoCompleteReferenceProps, AutoCompleteProps>((props, reference) => {
  const finalProps = { ...defaultProps, ...props };
  const { isOpen, displayResults, hideResults, results, setResults, focus, blur } = useAutoCompleteContext();

  const theme = useTheme();

  useImperativeHandle(reference, () => ({ focus, blur, results }), [focus, blur, results]);

  const filter = useCallback((key: string) => {
    const matches = finalProps.filterOnChange
      ? finalProps.filterOnChange(key)
      : finalProps.data.filter((item: Options) =>
          finalProps.caseSensitive ? item.id.includes(key) : item.id.toLowerCase().includes(key.toLowerCase()),
        );

    setResults(matches);
  }, []);

  const debouncedFilter = useMemo(() => {
    return loadashDebounce((key: string) => filter(key), finalProps.debounceDuration ?? 2000);
  }, [filter]);

  useEffect(() => {
    return () => {
      debouncedFilter.cancel();
    };
  }, []);

  const onChangeHandler = (text: string) => {
    if (finalProps.disabled) return;
    finalProps.onChangeText(text);

    if (finalProps.debounce) debouncedFilter(text);
    else filter(text);

    displayResults();
  };

  const focusEventHandler = (
    event: NativeSyntheticEvent<TextInputFocusEventData>,
    openValue: boolean,
    callback?: { (event: NativeSyntheticEvent<TextInputFocusEventData>): void },
  ) => {
    if (openValue) displayResults();
    else hideResults();
    if (callback) return callback(event);
  };

  const { defaultAutoCompleteContainerStyle, defaultResultsContainerStyle, defaultFlatListStyle } =
    getAutoCompleteStyles(theme);

  return (
    <Container
      disableGutters
      style={getCombinedStylesForView(defaultAutoCompleteContainerStyle, finalProps.autoCompleteContainerStyle)}
    >
      <TextFieldAutoComplete
        {...finalProps}
        onChangeText={onChangeHandler}
        onFocus={(event) => {
          focusEventHandler(event, true, finalProps.onFocus);
        }}
      />
      {finalProps.showResults ?? isOpen ? (
        <Container
          disableGutters
          style={getCombinedStylesForView(defaultResultsContainerStyle, finalProps.resultContainerStyle)}
          onStartShouldSetResponderCapture={() => true}
        >
          <FlatList
            keyExtractor={(item: Options) => item.id}
            {...finalProps.flatListProps}
            data={results}
            style={getCombinedStylesForView(defaultFlatListStyle, finalProps.flatListProps.style)}
          />
        </Container>
      ) : null}
    </Container>
  );
});

export default AutoComplete;
