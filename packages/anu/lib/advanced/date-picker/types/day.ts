import { DisableWeekDaysType } from './calendar';

export interface DayProps {
  day: number;
  month: number;
  year: number;
  selected: boolean;
  inRange: boolean;
  leftCrop: boolean;
  rightCrop: boolean;
  isToday: boolean;
  disabled: boolean;
  onPressDate: (date: Date) => void;
}

export interface DayRangeProps {
  leftCrop: boolean;
  rightCrop: boolean;
  inRange: boolean;
}

export interface DayNamesProps {
  locale?: string;
  disableWeekDays?: DisableWeekDaysType;
}
