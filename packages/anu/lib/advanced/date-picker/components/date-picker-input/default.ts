import { DatePickerInputProps, DatePickerInputWithoutModalProps } from '../../types';

export const defaultDatePickerInputWithoutModalProps: Omit<DatePickerInputWithoutModalProps, 'onChange'> = {
  locale: 'en',
  inputMode: 'start',
};

export const defaultDatePickerInputProps: Omit<DatePickerInputProps, 'onChange'> = {
  withModal: true,
  calendarIcon: 'calendar-today',
};
