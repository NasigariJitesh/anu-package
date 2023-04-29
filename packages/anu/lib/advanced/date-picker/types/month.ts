import { CalendarDate, CalendarDates, DisableWeekDaysType, ModeType, ValidRangeType } from './calendar';

interface BaseMonthProps {
  locale?: string;
  scrollMode: 'horizontal' | 'vertical';
  disableWeekDays?: DisableWeekDaysType;
  mode: ModeType;
  index: number;
  onPressYear: (year: number) => void;
  selectingYear: boolean;
  onPressDate: (date: Date) => void;
  validRange?: ValidRangeType;

  // some of these should be required in final implementation
  startDate?: CalendarDate;
  endDate?: CalendarDate;
  date?: CalendarDate;
  dates?: CalendarDates;
}

interface MonthRangeProps extends BaseMonthProps {
  mode: 'range';
  startDate: CalendarDate;
  endDate: CalendarDate;
}

interface MonthSingleProps extends BaseMonthProps {
  mode: 'single';
  date: CalendarDate;
}

interface MonthMultiProps extends BaseMonthProps {
  mode: 'multiple';
  dates: CalendarDates;
}

export type MonthProps = MonthSingleProps | MonthRangeProps | MonthMultiProps;
