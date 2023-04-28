import { ReactChildren } from 'anu/common/types';

import { PossibleClockTypes } from './time-picker';

export interface AnalogClockProps {
  hours: number;
  minutes: number;
  focused: PossibleClockTypes;
  is24Hour: boolean;
  onChange: (hoursMinutesAndFocused: { hours: number; minutes: number; focused?: PossibleClockTypes }) => void;
}

export interface AnimatedClockSwitcherProps {
  focused: PossibleClockTypes;
  hours: ReactChildren;
  minutes: ReactChildren;
}

export interface AnalogClockMinutesProps {
  minutes: number;
}

export interface AnalogClockHoursProps {
  is24Hour: boolean;
  hours: number;
}
