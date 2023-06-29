/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/display-name */
import { getCombinedStylesForView } from 'anu/common/utils';
import { useTheme } from 'anu/config';
import { Container } from 'anu/lib/primitives';
import { debounce as lodashDebounce } from 'lodash';
import React, { forwardRef, useCallback, useEffect, useImperativeHandle, useMemo, useState } from 'react';
import { FlatList } from 'react-native-gesture-handler';

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
  const [dimension, setDimensions] = useState({ height: 0, width: 0 });
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
      if (finalProps.debounce) debouncedFilter(finalProps.value);
      else filter(finalProps.value);

      displayResults();
    }
  }, [finalProps.value]);

  const onChangeHandler = (text: string) => {
    if (finalProps.disabled) return;

    finalProps.onChangeText(text);

    if (finalProps.toggleShowResults) finalProps.toggleShowResults(true);

    if (finalProps.debounce) debouncedFilter(text);
    else filter(text);

    displayResults();
  };

  const { defaultTextFieldContainerStyle, defaultFlatListStyle, defaultFlatListContainerStyle, containerStyle } =
    getAutoCompleteStyles(theme, dimension, props.style);

  return (
    <Container disableGutters style={containerStyle}>
      <Container
        disableGutters
        onLayout={(event) => {
          setDimensions({ height: event.nativeEvent.layout.height, width: event.nativeEvent.layout.width });
        }}
        style={getCombinedStylesForView(
          defaultTextFieldContainerStyle,
          //@ts-expect-error
          finalProps.style?.width ? { width: finalProps.style?.width } : {},
        )}
      >
        <TextFieldAutoComplete
          {...finalProps}
          onChangeText={onChangeHandler}
          onFocus={(event) => {
            if (finalProps.disabled) return;
            displayResults();
            if (finalProps.toggleShowResults) finalProps.toggleShowResults(true);
            if (finalProps.onFocus) finalProps.onFocus(event);
          }}
          onBlur={(event) => {
            if (finalProps.disabled) return;
            setTimeout(() => {
              if (finalProps.onBlur) finalProps.onBlur(event);
              if (finalProps.toggleShowResults) finalProps.toggleShowResults(false);
              hideResults();
            }, 800);
          }}
        />
      </Container>
      {!finalProps.disabled && (finalProps.showResults ?? isOpen) ? (
        <Container disableGutters style={defaultFlatListContainerStyle}>
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
