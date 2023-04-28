import { StyleProp, TextInputProps, TextStyle } from 'react-native';

import { PossibleClockTypes, PossibleInputTypes } from './time-picker';

export interface TimeInputProps extends Omit<Omit<TextInputProps, 'value'>, 'onFocus'> {
  value: number;
  clockType: PossibleClockTypes;
  onPress?: (type: PossibleClockTypes) => void;
  pressed: boolean;
  onChanged: (n: number) => void;
  inputType: PossibleInputTypes;
  inputStyle?: StyleProp<TextStyle>;
  horizontal?: boolean;
}

export interface TimeInputsProps {
  inputType: PossibleInputTypes;
  focused: PossibleClockTypes;
  hours: number;
  minutes: number;
  onFocusInput: (type: PossibleClockTypes) => void;
  onChange: (hoursMinutesAndFocused: {
    hours: number;
    minutes: number;
    focused?: undefined | PossibleClockTypes;
  }) => void;
  is24Hour: boolean;
  inputStyle?: StyleProp<TextStyle>;
  horizontal?: boolean;
}

export interface AmPmSwitcherProps {
  hours: number;
  onChange: (newHours: number) => void;
  inputType: PossibleInputTypes;
  horizontal?: boolean;
}

export interface SwitchButtonProps {
  label: string;
  onPress?: () => void;
  selected: boolean;
  disabled: boolean;
  inputType: PossibleInputTypes;
}
