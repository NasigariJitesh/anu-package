import { ReactChildren } from 'anu/common/types';
import { TextFieldWithMaskProps } from 'anu/lib/composites';

import { ValidRangeType } from './calendar';

export type DatePickerInputProps = {
  inputMode?: 'start' | 'end';
  /**
   * The locale in which the date is to be formatted
   */
  locale?: string;
  /**
   * The call back function to be called in case of date change.
   *
   * @param date
   */
  onChange: (date?: Date) => void;
  /**
   * The value of date
   */
  value?: Date;
  /**
   * The valid date range to be allowed by the date picker
   */
  validRange?: ValidRangeType;
  /**
   * Whether to use date picker modal or not
   */
  withModal?: boolean;
  /**
   * If true, the date format is displayed along with label.
   */
  withDateFormatInLabel?: boolean;
  /**
   * If true, no validation error messages are displayed
   */
  hideValidationErrors?: boolean;
  /**
   * Whether the date input has errors
   */
  hasError?: boolean;
  /**
   * Callback function to be called when there are any error during validation
   *
   * @param error
   * @returns
   */
  onValidationError?: (error: string | null) => void;
  /**
   * Icon name from material icons provided by react native vector icons, for the calendar
   */
  calendarIcon?: string;
  /**
   * Label for the Ok button of the date picker modal
   */
  okLabel?: string;
  /**
   * Whether the ok button is disabled
   */
  okLabelDisabled?: boolean;
  /**
   * Label for the cancel button of the date picker modal
   */
  cancelLabel?: string;
  /**
   * Whether the cancel button is disabled
   */
  cancelLabelDisabled?: boolean;
  /**
   * Start Year for the date picker modal
   */
  startYear?: number;
  /**
   * End Year for the date picker modal
   */
  endYear?: number;
  onChangeText?: (text?: string) => void;
  /**
   * Whether the input field is enabled
   */
  inputEnabled?: boolean;
  /**
   * The input mask for the date picker input
   */
  mask?: string;
} & Omit<TextFieldWithMaskProps, 'value' | 'onChange' | 'onChangeText' | 'inputMode' | 'mask'>;

export interface UseDateInputProps {
  onChange: (date?: Date) => void;
  locale?: string;
  value?: Date;
  validRange?: ValidRangeType;
  inputMode?: 'start' | 'end';
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
    startYear: DatePickerInputProps['startYear'];
    endYear: DatePickerInputProps['endYear'];
    inputEnabled: DatePickerInputProps['inputEnabled'];
  }) => void;
  inputButtons?: ReactChildren;
}
