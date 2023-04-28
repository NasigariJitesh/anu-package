import { DisableWeekDaysType } from './calendar';

export interface DayProps {
  textColorOnPrimary: string;
  day: number;
  month: number;
  year: number;
  selected: boolean;
  inRange: boolean;
  leftCrop: boolean;
  rightCrop: boolean;
  primaryColor: string;
  selectColor: string;
  isToday: boolean;
  disabled: boolean;
  onPressDate: (date: Date) => void;
}

export interface DayRangeProps {
  leftCrop: boolean;
  rightCrop: boolean;
  inRange: boolean;
  selectColor: string;
}

export interface DayNamesProps {
  locale: undefined | string;
  disableWeekDays?: DisableWeekDaysType;
}
