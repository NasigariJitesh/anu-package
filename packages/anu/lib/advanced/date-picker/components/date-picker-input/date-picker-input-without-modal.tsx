/* eslint-disable react/display-name */
import { getCombinedStylesForText } from 'anu/common/utils';
import { Container, TextFieldReferenceProps, TextFieldWithMask } from 'anu/lib';
import React from 'react';
import { forwardRef } from 'react';

import { useDateInput } from '../../hooks';
import { DatePickerInputWithoutModalProps } from '../../types';
import { getDatePickerInputWithoutModalStyles, getLabel } from '../../utils';

/**
 *
 * @param props
 * @param reference
 */
const DatePickerInputWithoutModal = forwardRef<TextFieldReferenceProps, DatePickerInputWithoutModalProps>(
  (props, reference) => {
    const {
      label,
      value,
      onChange,
      textInputStyle,
      locale = 'en',
      validRange,
      inputMode = 'start',
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
      uppercase,
      startYear,
      endYear,
      onChangeText,
      inputEnabled,
      ...rest
    } = props;

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
      <Container disableGutters>
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
              textInputStyle={getCombinedStylesForText(styles.input, textInputStyle)}
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
          uppercase,
          startYear,
          endYear,
          inputEnabled,
        }) ?? null}
      </Container>
    );
  },
);

export default DatePickerInputWithoutModal;
