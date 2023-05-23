import { useTheme } from 'anu/config';
import { Container } from 'anu/lib';
import * as React from 'react';
import { memo, useCallback, useEffect, useRef } from 'react';
import { Keyboard, TextInput as TextInputNative } from 'react-native';

import { CalendarEditProps } from '../../types';
import { getCalendarEditStyles } from '../../utils';
import DatePickerInputWithoutModal from '../date-picker-input';
import { defaultCalendarEditProps } from './default';

/**
 * @param props
 */
const CalendarEdit = (props: CalendarEditProps) => {
  const finalProps = { ...defaultCalendarEditProps, ...props };
  const { mode, state, label, startLabel, endLabel, collapsed, onChange, validRange, locale, inputEnabled } =
    finalProps;

  const dateInput = useRef<TextInputNative | null>(null);
  const startInput = useRef<TextInputNative | null>(null);
  const endInput = useRef<TextInputNative | null>(null);

  const theme = useTheme();
  const styles = getCalendarEditStyles();

  // when switching views focus, or un-focus text input
  useEffect(() => {
    // hide open keyboard
    if (collapsed) {
      Keyboard.dismiss();
    }

    const inputsToFocus = [dateInput.current, startInput.current].filter(Boolean) as TextInputNative[];

    const inputsToBlur = [dateInput.current, startInput.current, endInput.current].filter(Boolean) as TextInputNative[];

    if (collapsed) {
      for (const ip of inputsToBlur) ip.blur();
    } else {
      for (const ip of inputsToFocus) ip.focus();
    }
  }, [mode, startInput, endInput, dateInput, collapsed]);

  const onSubmitStartInput = useCallback(() => {
    if (endInput.current) {
      endInput.current.focus();
    }
  }, [endInput]);

  const onSubmitEndInput = useCallback(() => {
    if (endInput.current) {
      endInput.current.blur();
    }
  }, [endInput]);

  const onSubmitInput = useCallback(() => {
    if (endInput.current) {
      endInput.current.blur();
    }
  }, [endInput]);

  return (
    <Container disableGutters style={styles.root}>
      {mode === 'single' ? (
        <DatePickerInputWithoutModal
          inputMode='start'
          ref={dateInput}
          label={label}
          value={state.date}
          onChange={(date) => onChange({ ...state, date })}
          onSubmitEditing={onSubmitInput}
          validRange={validRange}
          locale={locale}
          withModal={false}
          autoComplete={'off'}
          inputEnabled={inputEnabled}
          style={styles.input}
          labelBackgroundColor={theme.colors.$surfaceContainerHigh}
          hideClearButton
        />
      ) : null}

      {mode === 'range' ? (
        <Container disableGutters style={styles.inner}>
          <DatePickerInputWithoutModal
            inputMode='start'
            ref={startInput}
            label={startLabel}
            value={state.startDate}
            onChange={(startDate) => onChange({ ...state, startDate })}
            returnKeyType={'next'}
            onSubmitEditing={onSubmitStartInput}
            validRange={validRange}
            locale={locale}
            withModal={false}
            autoComplete={'off'}
            inputEnabled={inputEnabled}
            style={styles.rangeInput}
            labelBackgroundColor={theme.colors.$surfaceContainerHigh}
            hideClearButton
          />

          <Container disableGutters style={styles.separator} />

          <DatePickerInputWithoutModal
            inputMode='end'
            ref={endInput}
            label={endLabel}
            value={state.endDate}
            onChange={(endDate) => onChange({ ...state, endDate })}
            onSubmitEditing={onSubmitEndInput}
            validRange={validRange}
            locale={locale}
            withModal={false}
            autoComplete='off'
            inputEnabled={inputEnabled}
            style={styles.rangeInput}
            labelBackgroundColor={theme.colors.$surfaceContainerHigh}
            hideClearButton
          />
        </Container>
      ) : null}
    </Container>
  );
};

export default memo(CalendarEdit);
