import { DripsyFinalTheme } from 'dripsy';

import { getCalendarHeaderHeight } from './calendar-utils';
import { beginOffset, daySize, estimatedMonthHeight, getGridCount, gridCounts, startAtIndex } from './date-utils';
import { dayNamesHeight } from './day-utils';

export const weekMargin = 6;
export const weekSize = daySize + weekMargin;
export const montHeaderHeight = 56;
export const monthHeaderSingleMarginTop = 4;
export const monthHeaderSingleMarginBottom = 8 + 44 + 12;
export const monthHeaderSingleHeight = monthHeaderSingleMarginTop + monthHeaderSingleMarginBottom;

export const monthGrid = (index: number) => {
  return Array.from({ length: getGridCount(index) })
    .fill(null)
    .map((_, weekGrid) => {
      const days = Array.from({ length: 7 }).fill(null);
      return { weekGrid, days };
    });
};

/**
 *
 * @param index
 */
const getIndexCount = (index: number): number => {
  if (index > startAtIndex) {
    return index - startAtIndex;
  }

  return -(startAtIndex - index);
};

/**
 *
 * @param index
 */
const weeksOffset = (index: number): number => {
  if (index === startAtIndex) {
    return 0;
  }
  let off = 0;
  if (index > startAtIndex) {
    for (let iterator = 0; iterator < index - startAtIndex; iterator++) {
      const cIndex = startAtIndex + iterator;
      off += gridCounts[cIndex] || getGridCount(cIndex);
    }
  } else {
    for (let iterator = 0; iterator < startAtIndex - index; iterator++) {
      const cIndex = startAtIndex - iterator - 1;
      off -= gridCounts[cIndex] || getGridCount(cIndex);
    }
  }
  return off;
};

/**
 *
 * @param offset
 * @param width
 */
export const getIndexFromHorizontalOffset = (offset: number, width: number): number => {
  return startAtIndex + Math.floor(offset / width);
};

/**
 *
 * @param offset
 */
export const getIndexFromVerticalOffset = (offset: number): number => {
  let estimatedIndex = startAtIndex + Math.ceil(offset / estimatedMonthHeight);

  const realOffset = getVerticalMonthsOffset(estimatedIndex);
  const difference = (realOffset - beginOffset - offset) / estimatedMonthHeight;
  if (difference >= 1 || difference <= -1) {
    estimatedIndex -= Math.floor(difference);
  }
  return estimatedIndex;
};

/**
 *
 * @param index
 * @param width
 */
export const getHorizontalMonthOffset = (index: number, width: number) => {
  if (index < 0) {
    return 0;
  }
  return width * index;
};

/**
 *
 * @param index
 */
export const getVerticalMonthsOffset = (index: number) => {
  const count = getIndexCount(index);
  const ob = weeksOffset(index);
  const monthsHeight = weekSize * ob;
  const c = monthsHeight + count * (dayNamesHeight + montHeaderHeight);

  return (c || 0) + beginOffset;
};

/**
 *
 * @param scrollMode
 * @param index
 */
export const getMonthHeight = (scrollMode: 'horizontal' | 'vertical', index: number): number => {
  const calendarHeight = getCalendarHeaderHeight(scrollMode) ?? 0;
  const gc = getGridCount(index);

  const currentMonthHeight = weekSize * gc;
  const extraHeight = scrollMode === 'horizontal' ? monthHeaderSingleHeight : montHeaderHeight;
  const c = calendarHeight + currentMonthHeight + extraHeight;
  return c || 0;
};

export const getMonthStyles = (theme: DripsyFinalTheme) => {
  const month = { width: '100%' };
  const monthHeader = {
    height: montHeaderHeight,
    justifyContent: 'center',
    overflow: 'hidden',
  } as const;
  const monthLabel = {
    opacity: 0.7,
    fontSize: theme.fontSizes[7],
    color: theme.colors.$onSurface,
  } as const;
  const opacity0 = { opacity: 0 } as const;
  const opacity1 = { opacity: 1 } as const;
  const week = {
    flexDirection: 'row',
    height: daySize,
    marginBottom: weekMargin,
    width: '100%',
  } as const;
  const yearButton = { alignSelf: 'flex-start', flex: 1, marginLeft: 6, borderRadius: 16 } as const;
  const yearButtonInner = {
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 16,
    borderRadius: 16,
  } as const;

  return { month, monthHeader, monthLabel, opacity0, opacity1, week, yearButton, yearButtonInner };
};
