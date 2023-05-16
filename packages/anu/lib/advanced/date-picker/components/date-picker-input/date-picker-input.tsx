/* eslint-disable react/display-name */
import { IconButton, TextFieldReferenceProps } from 'anu/lib';
import React, { forwardRef, useCallback, useState } from 'react';

import { useLatest } from '../../hooks';
import { DatePickerInputProps } from '../../types';
import DatePickerModal from '../date-picker-modal';
import DatePickerInputWithoutModal from './date-picker-input-without-modal';
import { defaultDatePickerInputProps } from './default';

/**
 * @param reference
 * @param props
 */
const DatePickerInput = forwardRef<TextFieldReferenceProps, DatePickerInputProps>((props, reference) => {
  const finalProps = { ...defaultDatePickerInputProps, ...props };

  const { withModal, calendarIcon, ...rest } = finalProps;

  const [visible, setVisible] = useState<boolean>(false);

  const onDismiss = useCallback(() => {
    setVisible(false);
  }, [setVisible]);

  const onChangeReference = useLatest(rest.onChange);

  const onInnerConfirm = useCallback(
    ({ date }: { date: Date }) => {
      setVisible(false);
      onChangeReference.current(date);
    },
    [setVisible, onChangeReference],
  );

  return (
    <DatePickerInputWithoutModal
      ref={reference}
      {...rest}
      inputButtons={
        withModal ? (
          <IconButton
            variant='standard'
            icon={{ name: calendarIcon ?? 'calendar-today', props: { size: 24 } }}
            disabled={rest.disabled}
            onPress={() => setVisible(true)}
          />
        ) : null
      }
      modal={({
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
      }) =>
        withModal ? (
          <DatePickerModal
            date={value}
            mode='single'
            visible={visible}
            onDismiss={onDismiss}
            //@ts-expect-error - because of multiple type interfacing
            onConfirm={onInnerConfirm}
            locale={locale}
            dateMode={inputMode}
            validRange={validRange}
            okLabel={okLabel}
            okLabelDisabled={okLabelDisabled ?? false}
            cancelLabel={cancelLabel}
            cancelLabelDisabled={cancelLabelDisabled ?? false}
            startYear={startYear ?? 1900}
            endYear={endYear ?? 2200}
            inputEnabled={inputEnabled}
          />
        ) : null
      }
    />
  );
});

export default DatePickerInput;
