import { ReactChildren } from 'anu/common/types';
import { TextFieldWithMaskProps } from 'anu/lib/composites';

import { ValidRangeType } from './calendar';

export type DatePickerInputProps = {
  inputMode?: 'start' | 'end';
  locale?: string;
  onChange: (date?: Date) => void;
  value?: Date;
  validRange?: ValidRangeType;
  withModal?: boolean;
  withDateFormatInLabel?: boolean;
  hideValidationErrors?: boolean;
  hasError?: boolean;
  onValidationError?: (error: string | null) => void;
  calendarIcon?: string;
  okLabel?: string;
  okLabelDisabled?: boolean;
  cancelLabel?: string;
  cancelLabelDisabled?: boolean;
  uppercase?: boolean;
  startYear?: number;
  endYear?: number;
  onChangeText?: (text?: string) => void;
  inputEnabled?: boolean;
  mask?: string;
} & Omit<TextFieldWithMaskProps, 'value' | 'onChange' | 'onChangeText' | 'inputMode' | 'mask'>;

export interface UseDateInputProps {
  onChange: (date?: Date) => void;
  locale?: string;
  value?: Date;
  validRange?: ValidRangeType;
  inputMode: 'start' | 'end';
  onValidationError?: (error: string | null) => void;
}

export interface DatePickerInputWithoutModalProps extends DatePickerInputProps {
  modal?: (params: {
    value: DatePickerInputProps['value'];
    locale: DatePickerInputProps['locale'];
    inputMode: DatePickerInputProps['inputMode'];
    validRange: DatePickerInputProps['validRange'];
    okLabel: DatePickerInputProps['okLabel'];
    okLabelDisabled: DatePickerInputProps['okLabelDisabled'];
    cancelLabel: DatePickerInputProps['cancelLabel'];
    cancelLabelDisabled: DatePickerInputProps['cancelLabelDisabled'];
    uppercase: DatePickerInputProps['uppercase'];
    startYear: DatePickerInputProps['startYear'];
    endYear: DatePickerInputProps['endYear'];
    inputEnabled: DatePickerInputProps['inputEnabled'];
  }) => void;
  inputButtons?: ReactChildren;
}
