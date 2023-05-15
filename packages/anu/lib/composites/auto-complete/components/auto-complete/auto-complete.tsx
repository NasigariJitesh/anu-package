/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/display-name */
import { getCombinedStylesForView } from 'anu/common/utils';
import { useTheme } from 'anu/config';
import { Container, FlatList } from 'anu/lib/primitives';
import { debounce as lodashDebounce } from 'lodash';
import React, { forwardRef, useCallback, useEffect, useImperativeHandle, useMemo, useState } from 'react';
import { NativeSyntheticEvent, TextInputFocusEventData } from 'react-native';

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
  const [height, setHeight] = useState(0);
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
    return lodashDebounce((key: string) => filter(key), finalProps.debounceDuration ?? 2000);
  }, [filter]);

  useEffect(() => {
    return () => {
      debouncedFilter.cancel();
    };
  }, []);

  useEffect(() => {
    if (finalProps.value) {
      filter(finalProps.value);

      displayResults();
    }
  }, [finalProps.value]);

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

  const { defaultAutoCompleteContainerStyle, defaultTextFieldContainerStyle, defaultFlatListStyle } =
    getAutoCompleteStyles(theme);

  return (
    <Container
      disableGutters
      style={getCombinedStylesForView(defaultAutoCompleteContainerStyle, finalProps.autoCompleteContainerStyle)}
    >
      <Container
        disableGutters
        onLayout={(event) => {
          setHeight(event.nativeEvent.layout.height);
        }}
        style={defaultTextFieldContainerStyle}
      >
        <TextFieldAutoComplete
          {...finalProps}
          onChangeText={onChangeHandler}
          onFocus={(event) => {
            if (finalProps.disabled) return;
            focusEventHandler(event, true, finalProps.onFocus);
          }}
        />
      </Container>
      {!finalProps.disabled && (finalProps.showResults ?? isOpen) ? (
        <FlatList
          keyExtractor={(item: Options) => item.id}
          {...finalProps.flatListProps}
          data={results}
          style={getCombinedStylesForView(defaultFlatListStyle, [finalProps.flatListProps.style, { top: height }])}
        />
      ) : null}
    </Container>
  );
});

export default AutoComplete;
