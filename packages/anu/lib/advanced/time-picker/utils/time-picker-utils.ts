import { DripsyFinalTheme } from 'dripsy';

import { inputTypes, PossibleInputTypes } from '../types';
import { circleSize } from './utils';

/**
 *
 * @param minutes
 */
export const getMinutesNumber = (minutes: number | undefined | null): number => {
  return minutes === undefined || minutes === null ? new Date().getMinutes() : minutes;
};
/**
 *
 * @param hours
 */
export const getHoursNumber = (hours: number | undefined | null): number => {
  return hours === undefined || hours === null ? new Date().getHours() : hours;
};

export const getTimePickerStyles = () => {
  const clockContainer = {
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 36,
  };

  const rootLandscape = {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  } as const;

  const rootPortrait = {
    alignItems: 'center',
    justifyContent: 'center',
  } as const;

  const separator = {
    width: 52,
  };

  return { clockContainer, rootLandscape, rootPortrait, separator };
};

export const getTimePickerModalStyles = (theme: DripsyFinalTheme) => {
  const bottom = {
    alignItems: 'center',
    flexDirection: 'row',
    padding: 8,
  } as const;

  const fill = {
    flex: 1,
  };

  const inputTypeToggle = {
    margin: 4,
  };

  const keyboardView = {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  } as const;

  const label = {
    fontSize: theme.fontSizes[9],
    letterSpacing: 1,
    color: theme.colors.$onSurfaceVariant,
  };

  const labelContainer = {
    justifyContent: 'flex-end',
    paddingLeft: 24,
    paddingRight: 24,
    paddingTop: 16,
  } as const;

  const modalBackground = {
    flex: 1,
  };

  const modalContent = {
    elevation: 3,
    minWidth: 260,
    paddingVertical: 8,
    shadowColor: theme.colors.$shadow,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    backgroundColor: theme.colors.$surfaceContainerHigh,
    borderRadius: 28,
  };

  const modalRoot = {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  } as const;

  const timePickerContainer = {
    paddingBottom: 16,
    paddingLeft: 24,
    paddingRight: 24,
    paddingTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  } as const;

  return {
    bottom,
    fill,
    inputTypeToggle,
    keyboardView,
    label,
    labelContainer,
    modalBackground,
    modalContent,
    modalRoot,
    timePickerContainer,
  };
};

export const getContainerWidth = (inputType: PossibleInputTypes, is24Hour: boolean) => {
  const width = 24 * 3 + 96 * 2 + (inputType === inputTypes.keyboard ? (is24Hour ? 0 : 64) : circleSize + 52);
  return width;
};
