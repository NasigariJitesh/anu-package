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
  return { inner, root, separator };
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

export const getYearPickerStyles = () => {
  const list = {
    flex: 1,
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
  };
  const selectedIconContainer = {
    width: 56,
  };
  const year = {
    flex: 1,
    height: YEAR_ITEM_HEIGHT,
    justifyContent: 'center',
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
