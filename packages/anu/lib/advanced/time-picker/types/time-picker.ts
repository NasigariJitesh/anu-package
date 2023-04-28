import { StyleProp, TextStyle } from 'react-native';

export interface DisplayModeContextData {
  mode: 'AM' | 'PM' | undefined;
  setMode: React.Dispatch<React.SetStateAction<'AM' | 'PM' | undefined>>;
}

export type PossibleHourTypes = 'am' | 'pm';

export type HourTypeMap = {
  [hourType in PossibleHourTypes]: PossibleHourTypes;
};

export type PossibleInputTypes = 'keyboard' | 'picker';

export type InputTypeMap = {
  [inputType in PossibleInputTypes]: PossibleInputTypes;
};

export type InputIconMap = {
  [inputType in PossibleInputTypes]: string;
};

export type PossibleClockTypes = 'hours' | 'minutes';

export type ClockTypeMap = {
  [clockType in PossibleClockTypes]: PossibleClockTypes;
};

export const hourTypes: HourTypeMap = {
  am: 'am',
  pm: 'pm',
};

export const inputTypes: InputTypeMap = {
  keyboard: 'keyboard',
  picker: 'picker',
};

export const reverseInputTypes: InputTypeMap = {
  keyboard: 'picker',
  picker: 'keyboard',
};

export const inputTypeIcons: InputIconMap = {
  keyboard: 'keyboard-outline',
  picker: 'clock-outline',
};

export const clockTypes: ClockTypeMap = {
  minutes: 'minutes',
  hours: 'hours',
};

export type OnChangeFunction = ({
  hours,
  minutes,
  focused,
}: {
  hours: number;
  minutes: number;
  focused?: PossibleClockTypes;
}) => void;

export interface TimePickerProps {
  locale?: undefined | string;
  inputType: PossibleInputTypes;
  focused: PossibleClockTypes;
  hours: number;
  minutes: number;
  onFocusInput: (type: PossibleClockTypes) => void;
  onChange: OnChangeFunction;
  use24HourClock?: boolean;
  inputStyle?: StyleProp<TextStyle>;
  horizontal?: boolean;
}

export interface TimePickerModalProps {
  locale?: undefined | string;
  label?: string;
  cancelLabel?: string;
  confirmLabel?: string;
  hours?: number | undefined;
  minutes?: number | undefined;
  visible: boolean | undefined;
  onDismiss: () => void;
  onConfirm: (hoursAndMinutes: { hours: number; minutes: number }) => void;
  animationType?: 'slide' | 'fade' | 'none';
  keyboardIcon?: string;
  clockIcon?: string;
  use24HourClock?: boolean;
  inputStyle?: StyleProp<TextStyle>;
  horizontal?: boolean;
}
