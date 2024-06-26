import { ReactChildren } from 'anu/common/types';
import { StyleProp, ViewStyle } from 'react-native';

import {
  BaseCalendarProps,
  CalendarDate,
  CalendarDates,
  ModeType,
  MultiChange,
  MultiConfirm,
  RangeChange,
  SingleChange,
} from './calendar';

export type LocalState = {
  startDate: CalendarDate;
  endDate: CalendarDate;
  date: CalendarDate;
  dates: CalendarDates;
};

export interface HeaderPickProps {
  moreLabel?: string;
  label?: string;
  emptyLabel?: string;
  saveLabel?: string;
  okLabel?: string;
  headerSeparator?: string;
  startLabel?: string;
  endLabel?: string;
  editIcon?: string;
  calendarIcon?: string;
  cancelLabel?: string;
  closeIcon?: string;
  allowEditing?: boolean;
}

export interface HeaderContentProps extends HeaderPickProps {
  state: LocalState;
  mode: ModeType;
  collapsed?: boolean;
  onToggle?: () => void;
  locale?: string;
}

interface DatePickerModalContentBaseProps {
  inputFormat?: string;
  locale?: string;
  onDismiss: () => void;
  disableSafeTop?: boolean;
  saveLabelDisabled?: boolean;
  okLabelDisabled?: boolean;
  cancelLabelDisabled?: boolean;
  inputEnabled?: boolean;
  collapsed?: boolean;
  onToggle?: () => void;
}

export interface DatePickerModalContentRangeProps
  extends HeaderPickProps,
    BaseCalendarProps,
    DatePickerModalContentBaseProps {
  mode: 'range';
  startDate: CalendarDate;
  endDate: CalendarDate;
  onChange?: RangeChange;
  onConfirm: RangeChange;
}

export interface DatePickerModalContentSingleProps
  extends HeaderPickProps,
    BaseCalendarProps,
    DatePickerModalContentBaseProps {
  mode: 'single';
  date?: CalendarDate;
  onChange?: SingleChange;
  onConfirm: SingleChange;
  dateMode?: 'start' | 'end';
}

export interface DatePickerModalContentMultiProps
  extends HeaderPickProps,
    BaseCalendarProps,
    DatePickerModalContentBaseProps {
  mode: 'multiple';
  dates?: CalendarDates;
  onChange?: MultiChange;
  onConfirm: MultiConfirm;
}

export type DatePickerModalContentProps =
  | DatePickerModalContentRangeProps
  | DatePickerModalContentSingleProps
  | DatePickerModalContentMultiProps;

export interface DatePickerModalButtonProps {
  okLabel?: string;
  okLabelDisabled?: boolean;
  onDismiss: () => void;
  onSave: () => void;
  locale?: string;
  cancelLabel?: string;
  cancelLabelDisabled?: boolean;
}

export interface DatePickerModalHeaderProps {
  disableSafeTop?: boolean;
  saveLabel?: string;
  saveLabelDisabled?: boolean;
  onDismiss: () => void;
  onSave: () => void;
  locale?: string;
  closeIcon?: string;
}

interface CommonDatePickerModalProps {
  visible: boolean;
  animationType?: 'slide' | 'fade' | 'none';
  disableStatusBar?: boolean;
  disableStatusBarPadding?: boolean;
  inputEnabled?: boolean;
  style?: StyleProp<ViewStyle>;
}

export interface DatePickerModalSingleProps extends DatePickerModalContentSingleProps, CommonDatePickerModalProps {}

export interface DatePickerModalMultiProps extends DatePickerModalContentMultiProps, CommonDatePickerModalProps {}

export interface DatePickerModalRangeProps extends DatePickerModalContentRangeProps, CommonDatePickerModalProps {}

export type DatePickerModalProps = DatePickerModalRangeProps | DatePickerModalSingleProps | DatePickerModalMultiProps;

export type SupportedOrientationsType =
  | 'portrait'
  | 'portrait-upside-down'
  | 'landscape'
  | 'landscape-left'
  | 'landscape-right';

export interface AnimatedCrossViewProps {
  calendar: ReactChildren;
  calendarEdit: ReactChildren;
  collapsed: boolean;
}
