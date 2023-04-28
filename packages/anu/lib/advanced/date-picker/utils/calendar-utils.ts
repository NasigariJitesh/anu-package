import { DripsyFinalTheme } from 'dripsy';

import { dayNamesHeight } from './day-utils';

const buttonContainerHeight = 56;
const buttonContainerMarginTop = 4;
const buttonContainerMarginBottom = 8;
export const YEAR_ITEM_HEIGHT = 62;

/**
 *
 * @param scrollMode
 */
export const getCalendarHeaderHeight = (scrollMode: 'horizontal' | 'vertical') => {
  if (scrollMode === 'horizontal') {
    return buttonContainerHeight + buttonContainerMarginTop + buttonContainerMarginBottom + dayNamesHeight;
  }
};

export const getCalendarEditStyles = () => {
  const inner = { flexDirection: 'row' } as const;
  const root = { padding: 12 };
  const separator = { width: 12 };
  const input = { backgroundColor: 'transparent' };
  const rangeInput = { backgroundColor: 'transparent', width: 150 };
  return { inner, root, separator, input, rangeInput };
};

export const getCalendarHeaderStyles = () => {
  const buttonContainer = {
    alignItems: 'center',
    flexDirection: 'row',
    height: buttonContainerHeight,
    marginBottom: buttonContainerMarginBottom,
    marginTop: buttonContainerMarginTop,
    width: '100%',
  } as const;
  const datePickerHeader = {
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
    zIndex: 10,
  } as const;
  const spacer = { flex: 1 };

  return { buttonContainer, datePickerHeader, spacer };
};

export const getYearPickerStyles = (theme: DripsyFinalTheme) => {
  const list = {
    flex: 1,
    width: '100%',
    backgroundColor: theme.colors.$surfaceContainerHigh,
  };

  const opacity0 = {
    opacity: 0,
  };

  const opacity1 = {
    opacity: 1,
  };

  const root = {
    flex: 1,
    top: 56,
    zIndex: 100,
    width: '100%',
    backgroundColor: theme.colors.$surface,
    alignItems: 'center',
  } as const;

  const selectedIconContainer = {
    width: 56,
  };

  const year = {
    flex: 1,
    height: YEAR_ITEM_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 16,
    marginRight: 16,
  } as const;

  const yearButton = {
    borderRadius: 46 / 2,
    overflow: 'hidden',
  } as const;

  const yearInner = {
    alignItems: 'center',
    height: 36,
    width: 72,
    justifyContent: 'center',
  } as const;

  const yearLabel = {
    fontSize: 16,
  };

  return { list, opacity0, opacity1, root, selectedIconContainer, yearInner, yearLabel, yearButton, year };
};

/**
 *
 * @param start
 * @param end
 */
export const range = (start: number, end: number) => {
  return Array.from({ length: end - start + 1 })
    .fill(null)
    .map((_, index) => start + index);
};
