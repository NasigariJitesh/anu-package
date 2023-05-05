import { DisableWeekDaysType } from '../types';

/**
 * Function to check whether the day should be displayed
 *
 * @param dayIndex
 * @param disableWeekDays
 */
export const showWeekDay = (dayIndex: number, disableWeekDays?: DisableWeekDaysType): boolean => {
  return !(disableWeekDays && disableWeekDays.includes(dayIndex));
};

/**
 * function to convert Date to Unix date format
 *
 * @param d - date to convert
 * @returns the stored date value in seconds since midnight, January 1, 1970 UTC.
 */
export const dateToUnix = (d: Date): number => {
  return Math.round(d.getTime() / 1000);
};

/**
 *
 * @param date
 * @param count
 */
export const addMonths = (date: Date, count: number) => {
  const n = date.getDate();
  const n2 = new Date(date.getTime());
  n2.setDate(1);
  n2.setMonth(n2.getMonth() + count);
  n2.setDate(Math.min(n, getDaysInMonth({ year: n2.getFullYear(), month: n2.getMonth() })));

  return n2;
};

/**
 *
 * @param root0
 * @param root0.year
 * @param root0.month
 */
export const getDaysInMonth = ({ year, month }: { year: number; month: number }): number => {
  return [31, isLeapYear({ year }) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month]!;
};

/**
 *
 * @param root0
 * @param root0.year
 * @param root0.month
 */
export const getFirstDayOfMonth = ({ year, month }: { year: number; month: number }): number => {
  return new Date(year, month, 1).getDay();
};

/**
 *
 * @param a
 * @param b
 */
export const areDatesOnSameDay = (a: Date, b?: Date | null | undefined) => {
  if (!b) {
    return false;
  }

  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
};

/**
 *
 * @param date
 * @param root0
 * @param root0.startDate
 * @param root0.endDate
 */
export const isDateBetween = (
  date: Date,
  {
    startDate,
    endDate,
  }: {
    startDate?: Date | null | undefined;
    endDate?: Date | null | undefined;
  },
): boolean => {
  if (!startDate || !endDate) {
    return false;
  }
  return date <= endDate && date >= startDate;
};

/**
 * Check if a date is within an optional range.
 *
 * If the range doesn't exist, it defaults to `true`.
 *
 * @param date
 * @param root0
 * @param root0.startUnix
 * @param root0.endUnix
 */
export const isDateWithinOptionalRange = (
  date: Date,
  { startUnix, endUnix }: { startUnix: number | undefined; endUnix: number | undefined },
) => {
  const dateUnix = dateToUnix(date);
  // if startUnix is provided and date is before start
  if (startUnix && dateUnix < startUnix) {
    return false;
  }

  // if endUnix is provided and date is after end
  if (endUnix && dateUnix > endUnix) {
    return false;
  }

  return true;
};

/**
 *
 * @param root0
 * @param root0.year
 */
export const isLeapYear = ({ year }: { year: number }) => {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
};

export const daySize = 46;
export const estimatedMonthHeight = 360;
export const startAtIndex = 1200;
export const totalMonths = startAtIndex * 2;
export const beginOffset = estimatedMonthHeight * startAtIndex;

export const gridCounts: number[] = Array.from({ length: totalMonths });

/**
 *
 * @param index
 */
export const getGridCount = (index: number) => {
  const cHeight = gridCounts[index];
  if (cHeight) {
    return cHeight;
  }
  const monthDate = addMonths(new Date(), getRealIndex(index));
  const h = getGridCountForDate(monthDate);
  gridCounts[index] = h;
  return h;
};

/**
 *
 * @param date
 */
export const getGridCountForDate = (date: Date) => {
  const year = date.getFullYear();
  const month = date.getMonth();
  const daysInMonth = getDaysInMonth({ year, month });
  const dayOfWeek = getFirstDayOfMonth({ year, month });
  return Math.ceil((daysInMonth + dayOfWeek) / 7);
};

/**
 *
 * @param index
 */
export const getRealIndex = (index: number) => {
  return index - startAtIndex;
};

/**
 *
 * @param date
 */
export const getInitialIndex = (date: Date | undefined) => {
  if (!date) {
    return startAtIndex;
  }

  const today = new Date();
  const months = differenceInMonths(today, date);

  return startAtIndex + months;
};

/**
 *
 * @param d
 */
export const getStartOfDay = (d: Date): Date => {
  return new Date(d.getFullYear(), d.getMonth(), d.getDate(), 0, 0, 0);
};
/**
 *
 * @param d
 */
export const getEndOfDay = (d: Date): Date => {
  return new Date(d.getFullYear(), d.getMonth(), d.getDate(), 23, 59, 59);
};

/**
 *
 * @param firstDate
 * @param secondDate
 */
export const differenceInMonths = (firstDate: Date, secondDate: Date) => {
  let diffMonths = (secondDate.getFullYear() - firstDate.getFullYear()) * 12;
  diffMonths -= firstDate.getMonth();
  diffMonths += secondDate.getMonth();
  return diffMonths;
};
