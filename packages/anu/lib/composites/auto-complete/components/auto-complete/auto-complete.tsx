/* eslint-disable jsdoc/check-param-names */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/display-name */
import { getCombinedStylesForText, getCombinedStylesForView } from 'anu/common/utils';
import { useTheme } from 'anu/config';
import { Container, IconButton, TextField } from 'anu/lib/primitives';
import { debounce as loadashDebounce } from 'lodash';
import React, { forwardRef, useCallback, useEffect, useImperativeHandle, useMemo, useRef, useState } from 'react';
import { FlatList, NativeSyntheticEvent, TextInput as RNTextInput, TextInputFocusEventData } from 'react-native';

import {
  AutoCompleteProps,
  AutoCompleteReferenceProps,
  Options,
  StandardAutoCompleteProps,
  TextFieldAutoCompleteProps,
} from '../../types';
import { getAutoCorrectStyles, getStandardAutoCompleteStyles } from '../../utils';
import { defaultProps } from './default';

/**
 * component for auto-complete
 */
const AutoComplete = forwardRef<AutoCompleteReferenceProps, AutoCompleteProps>((props, reference) => {
  const finalProps = { ...defaultProps, ...props };

  const [results, setResults] = useState<Options[]>(finalProps.data);
  const [open, setOpen] = useState(false);
  const textInputReference = useRef<RNTextInput | null>(null);

  const theme = useTheme();

  const focus = useCallback(() => {
    textInputReference.current?.focus();
  }, [textInputReference]);

  const blur = useCallback(() => {
    textInputReference.current?.blur();
  }, [textInputReference]);

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

    setOpen(true);
  };

  const focusEventHandler = (
    event: NativeSyntheticEvent<TextInputFocusEventData>,
    openValue: boolean,
    callback?: { (event: NativeSyntheticEvent<TextInputFocusEventData>): void },
  ) => {
    setOpen(openValue);
    if (callback) return callback(event);
  };

  const { defaultAutoCorrectContainerStyle, defaultResultsContainerStyle } = getAutoCorrectStyles(theme);

  /**
   * component for the dropdown button of the auto-complete field
   *
   * @param showButton.showButton
   * @param showButton - if true, displays the button
   */
  const DropDownButton = ({ showButton }: { showButton: boolean }) => {
    return showButton ? (
      <IconButton
        icon={{
          name: open ? 'arrow-drop-up' : 'arrow-drop-down',
          props: { style: { color: theme.colors.$onSurfaceVariant } },
        }}
        type='standard'
        onPress={() => setOpen((previous) => !previous)}
      />
    ) : null;
  };

  /**
   *
   * @returns Auto COmplete Field Component
   */
  const renderField = () => {
    // standard variant is a base component with minimal styling
    if (finalProps.variant === 'standard' || finalProps.variant === undefined) {
      const {
        variant,
        onChangeText,
        trailingComponent,
        leadingComponent,
        resultContainerStyle,
        autoCompleteContainerStyle,
        autoCompleteStyle,
        data,
        caseSensitive,
        filterOnChange,
        debounce,
        debounceDuration,
        disabled,
        inputAreaStyle,
        direction,
        hideDropDownButton,
        placeholderTextColor,
        onFocus,
        onBlur,
        ...textInputProps
      } = finalProps as StandardAutoCompleteProps;

      const {
        defaultAutoCompleteStyle,
        defaultInputAreaStyle,
        leadingComponentContainerStyle,
        trailingComponentContainerStyle,
      } = getStandardAutoCompleteStyles(theme, disabled);
      return (
        <Container disableGutters style={getCombinedStylesForView(defaultAutoCompleteStyle, autoCompleteStyle)}>
          <Container disableGutters style={leadingComponentContainerStyle}>
            {leadingComponent}
            <DropDownButton showButton={direction === 'rtl' && hideDropDownButton !== true} />
          </Container>

          <RNTextInput
            {...textInputProps}
            ref={textInputReference}
            onChangeText={onChangeHandler}
            style={getCombinedStylesForText(defaultInputAreaStyle, inputAreaStyle)}
            onFocus={(event) => {
              focusEventHandler(event, true, onFocus);
            }}
            onBlur={(event) => {
              focusEventHandler(event, false, onBlur);
            }}
            placeholderTextColor={placeholderTextColor ?? theme.colors.$onSurfaceVariant}
          />

          <Container disableGutters style={trailingComponentContainerStyle}>
            <DropDownButton showButton={direction !== 'rtl' && hideDropDownButton !== true} />
            {trailingComponent}
          </Container>
        </Container>
      );
    } else {
      const {
        onChangeText,
        resultContainerStyle,
        autoCompleteContainerStyle,
        data,
        caseSensitive,
        filterOnChange,
        debounce,
        debounceDuration,
        disabled,
        direction,
        hideDropDownButton,
        placeholderTextColor,
        trailingIcon,
        leadingIcon,
        onFocus,
        onBlur,
        ...textFieldProps
      } = finalProps as TextFieldAutoCompleteProps;

      return (
        <TextField
          {...textFieldProps}
          ref={textInputReference}
          onChangeText={onChangeHandler}
          placeholderTextColor={placeholderTextColor ?? theme.colors.$onSurfaceVariant}
          leadingIcon={
            <Container disableGutters flexDirection='row' align='center' justify='center'>
              <DropDownButton showButton={direction === 'rtl' && hideDropDownButton !== true} />
              {leadingIcon}
            </Container>
          }
          trailingIcon={
            <Container disableGutters flexDirection='row' align='center' justify='center'>
              <DropDownButton showButton={direction !== 'rtl' && hideDropDownButton !== true} />
              {trailingIcon}
            </Container>
          }
          onFocus={(event) => {
            focusEventHandler(event, true, onFocus);
          }}
          onBlur={(event) => {
            focusEventHandler(event, false, onBlur);
          }}
        />
      );
    }
  };

  return (
    <Container
      disableGutters
      style={getCombinedStylesForView(defaultAutoCorrectContainerStyle, finalProps.autoCompleteContainerStyle)}
    >
      {renderField()}
      {open ? (
        <Container
          disableGutters
          style={getCombinedStylesForView(defaultResultsContainerStyle, finalProps.resultContainerStyle)}
        >
          <FlatList {...finalProps.flatListProps} data={results} keyExtractor={(item: Options) => item.id} />
        </Container>
      ) : null}
    </Container>
  );
});

export default AutoComplete;
