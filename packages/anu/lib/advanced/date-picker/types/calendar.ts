import { LocalState } from './date-picker-modal';

export type ModeType = 'single' | 'range' | 'multiple';

export type ScrollModeType = 'horizontal' | 'vertical';

export type DisableWeekDaysType = number[];

export interface ValidRangeType {
  startDate?: Date;
  endDate?: Date;
  disabledDates?: Date[];
}

export interface BaseCalendarProps {
  locale: string;
  disableWeekDays?: DisableWeekDaysType;
  validRange?: ValidRangeType;
  startYear?: number;
  endYear?: number;

  // here they are optional but in final implementation they are required
  date?: CalendarDate;
  dates?: CalendarDates;
  startDate?: CalendarDate;
  endDate?: CalendarDate;
  dateMode?: 'start' | 'end';
}

export type CalendarDate = Date | undefined;
export type CalendarDates = Date[] | undefined | null;

export type RangeChange = (params: { startDate: CalendarDate; endDate: CalendarDate }) => void;

export type SingleChange = (params: { date: CalendarDate }) => void;

export type MultiChange = (params: { dates: CalendarDates; datePressed: Date; change: 'added' | 'removed' }) => void;

export type MultiConfirm = (params: { dates: Date[] }) => void;

interface CalendarSingleProps extends BaseCalendarProps {
  mode: 'single';
  date: CalendarDate;
  onChange: SingleChange;
}

interface CalendarRangeProps extends BaseCalendarProps {
  mode: 'range';
  startDate: CalendarDate;
  endDate: CalendarDate;
  onChange: RangeChange;
}

interface CalendarMultiProps extends BaseCalendarProps {
  mode: 'multiple';
  dates: CalendarDates;
  onChange: MultiChange;
}

export type CalendarProps = CalendarSingleProps | CalendarRangeProps | CalendarMultiProps;

export interface CalendarEditProps {
  mode: ModeType;
  label?: string;
  startLabel?: string;
  endLabel?: string;
  state: LocalState;
  collapsed: boolean;
  onChange: (s: LocalState) => void;
  validRange: ValidRangeType | undefined;
  locale: string;
  inputEnabled?: boolean;
}

export interface CalendarHeaderProps {
  locale: undefined | string;
  scrollMode: 'horizontal' | 'vertical';
  onPrev: () => void;
  onNext: () => void;
  disableWeekDays?: DisableWeekDaysType;
}

export interface YearPickerProps {
  selectedYear: number | undefined;
  selectingYear: boolean;
  onPressYear: (year: number) => void;
  startYear: number;
  endYear: number;
}

export interface YearProps {
  year: number;
  selected: boolean;
  onPressYear: (newYear: number) => void;
}
