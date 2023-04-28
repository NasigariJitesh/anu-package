import { ReactChildren } from 'anu/common/types';
import { TextFieldWithMaskProps } from 'anu/lib/composites';

import { ValidRangeType } from './calendar';

export type DatePickerInputProps = {
  inputMode: 'start' | 'end';
  locale: string;
  onChange: (date: Date | undefined) => void;
  value: Date | undefined;
  validRange?: ValidRangeType | undefined;
  withModal?: boolean;
  withDateFormatInLabel?: boolean;
  hideValidationErrors?: boolean;
  hasError?: boolean;
  onValidationError?: ((error: string | null) => void) | undefined;
  calendarIcon?: string;
  saveLabel?: string;
  saveLabelDisabled?: boolean;
  uppercase?: boolean;
  startYear?: number;
  endYear?: number;
  onChangeText?: (text: string | undefined) => void;
  inputEnabled?: boolean;
  mask?: string;
} & Omit<TextFieldWithMaskProps, 'value' | 'onChange' | 'onChangeText' | 'inputMode' | 'mask'>;

export interface UseDateInputProps {
  onChange: (date: Date) => void;
  locale: undefined | string;
  value: Date | undefined;
  validRange: ValidRangeType | undefined;
  inputMode: 'start' | 'end';
  onValidationError?: ((error: string | null) => void) | undefined;
}

export interface DatePickerInputWithoutModalProps extends DatePickerInputProps {
  modal?: (params: {
    value: DatePickerInputProps['value'];
    locale: DatePickerInputProps['locale'];
    inputMode: DatePickerInputProps['inputMode'];
    validRange: DatePickerInputProps['validRange'];
    saveLabel: DatePickerInputProps['saveLabel'];
    saveLabelDisabled: DatePickerInputProps['saveLabelDisabled'];
    uppercase: DatePickerInputProps['uppercase'];
    startYear: DatePickerInputProps['startYear'];
    endYear: DatePickerInputProps['endYear'];
    inputEnabled: DatePickerInputProps['inputEnabled'];
  }) => void;
  inputButtons?: ReactChildren;
}
