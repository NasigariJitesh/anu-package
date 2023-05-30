/* eslint-disable react/display-name */
import { getCombinedStylesForText } from 'anu/common/utils';
import { Container, TextFieldReferenceProps, TextFieldWithMask } from 'anu/lib';
import React from 'react';
import { forwardRef } from 'react';

import { useDateInput } from '../../hooks';
import { DatePickerInputWithoutModalProps } from '../../types';
import { getDatePickerInputWithoutModalStyles, getLabel } from '../../utils';
import { defaultDatePickerInputWithoutModalProps } from './default';

/**
 *
 * @param props
 * @param reference
 */
const DatePickerInputWithoutModal = forwardRef<TextFieldReferenceProps, DatePickerInputWithoutModalProps>(
  (props, reference) => {
    const finalProps = { ...defaultDatePickerInputWithoutModalProps, ...props };

    const {
      label,
      value,
      onChange,
      textStyle,
      locale,
      validRange,
      inputMode,
      withDateFormatInLabel = true,
      hasError,
      hideValidationErrors,
      onValidationError,
      modal,
      inputButtons,
      okLabel,
      okLabelDisabled,
      cancelLabel,
      cancelLabelDisabled,
      startYear,
      endYear,
      onChangeText,
      inputEnabled,
      modalStyle,
      ...rest
    } = finalProps;

    const {
      formattedValue,
      inputFormat,
      onChangeText: onDateInputChangeText,
      error,
    } = useDateInput({
      locale,
      value,
      validRange,
      inputMode,
      onChange,
      onValidationError,
    });

    const styles = getDatePickerInputWithoutModalStyles();

    let disabled;

    if (inputEnabled !== undefined) {
      disabled = !inputEnabled;
    }

    if (rest.disabled) {
      disabled = rest.disabled;
    }

    return (
      <Container disableGutters style={styles.root}>
        <Container disableGutters style={styles.root}>
          <Container disableGutters style={styles.inputContainer}>
            <TextFieldWithMask
              {...rest}
              ref={reference}
              label={getLabel(withDateFormatInLabel, inputFormat, label)}
              value={formattedValue}
              keyboardType={rest.keyboardType ?? 'number-pad'}
              mask={inputFormat}
              disabled={disabled}
              onChangeText={(text) => {
                onDateInputChangeText(text);
                if (onChangeText) onChangeText(text);
              }}
              error={(!!error && !hideValidationErrors) || !!hasError}
              errorMessage={error ?? ''}
              textStyle={getCombinedStylesForText(styles.input, textStyle)}
              trailingIcon={inputButtons}
            />
          </Container>
        </Container>
        {modal?.({
          value,
          locale,
          inputMode,
          validRange,
          okLabel,
          okLabelDisabled,
          cancelLabel,
          cancelLabelDisabled,
          startYear,
          endYear,
          inputEnabled,
          style: modalStyle,
        }) ?? null}
      </Container>
    );
  },
);

export default DatePickerInputWithoutModal;
