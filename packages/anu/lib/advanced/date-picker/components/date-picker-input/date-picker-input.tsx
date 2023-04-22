/* eslint-disable react/display-name */
import { IconButton, TextFieldReferenceProps } from 'anu/lib';
import { forwardRef, useCallback, useState } from 'react';

import { useLatest } from '../../hooks';
import { DatePickerInputProps } from '../../types';
import DatePickerModal from '../date-picker-modal';
import DatePickerInputWithoutModal from './date-picker-input-without-modal';

/**
 *
 * @param root0
 * @param root0.withModal
 * @param root0.calendarIcon
 * @param reference
 */
const DatePickerInput = forwardRef<TextFieldReferenceProps, DatePickerInputProps>((props, reference) => {
  const { withModal = true, calendarIcon = 'calendar', ...rest } = props;

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
            type='standard'
            icon={{ name: calendarIcon, props: { size: 24 } }}
            disabled={rest.disabled}
            onPress={() => setVisible(true)}
          />
        ) : null
      }
      // eslint-disable-next-line react/no-unstable-nested-components
      modal={({
        value,
        locale,
        inputMode,
        validRange,
        saveLabel,
        saveLabelDisabled,
        uppercase,
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
            //@ts-expect-error
            onConfirm={onInnerConfirm}
            locale={locale}
            dateMode={inputMode}
            validRange={validRange}
            saveLabel={saveLabel}
            saveLabelDisabled={saveLabelDisabled ?? false}
            uppercase={uppercase ?? true}
            startYear={startYear ?? 1800}
            endYear={endYear ?? 2200}
            inputEnabled={inputEnabled}
          />
        ) : null
      }
    />
  );
});

export default DatePickerInput;
