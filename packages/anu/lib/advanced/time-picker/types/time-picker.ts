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
  /**
   * Label for the time picker
   */
  label?: string;
  /**
   * Label for the cancel button of the time picker
   */
  cancelLabel?: string;
  /**
   * Label for the confirm button of the time picker.
   */
  confirmLabel?: string;
  /**
   * The value of hours in the selected time.
   */
  hours?: number;
  /**
   * The value of minutes in the selected time.
   */
  minutes?: number;
  /**
   * Whether the time picker modal, is visible or hidden.
   */
  visible: boolean;
  /**
   * The callback function to be called, after dismissal of date selection.
   */
  onDismiss: () => void;
  /**
   * The callback function to be called, after confirmation of date selection.
   *
   * @param hoursAndMinutes
   */
  onConfirm: (hoursAndMinutes: { hours: number; minutes: number }) => void;
  /**
   * The animation for the time picker modal, when it appears or disappears.
   */
  animationType?: 'slide' | 'fade' | 'none';
  /**
   * Icon name from material icons provided by react native vector icons, for the keyboard
   */
  keyboardIcon?: string;
  /**
   * Icon name from material icons provided by react native vector icons, for the clock
   */
  clockIcon?: string;
  /**
   * If true, time picker displays 24 hrs format
   */
  use24HourClock?: boolean;
  /**
   * Style for the input fields of the time picker
   */
  inputStyle?: StyleProp<TextStyle>;
  /**
   * Whether to display the picker in horizontal orientation
   */
  horizontal?: boolean;
  /**
   * Default input option to display
   */
  defaultInputType?: PossibleInputTypes;
}
