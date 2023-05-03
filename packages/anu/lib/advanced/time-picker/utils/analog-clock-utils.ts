import { DripsyFinalTheme } from 'dripsy';

import { circleSize } from './utils';

export const getAnalogClockStyles = (theme: DripsyFinalTheme) => {
  const center = { alignItems: 'center', justifyContent: 'center' } as const;
  const clock = {
    alignItems: 'center',
    backgroundColor: theme.colors.$surfaceVariant,
    borderRadius: circleSize / 2,
    height: circleSize,
    justifyContent: 'center',
    position: 'relative',
    width: circleSize,
  } as const;
  const endPoint = {
    borderRadius: 24,
    bottom: -23,
    height: 48,
    position: 'absolute',
    right: 0,
    width: 48,
    backgroundColor: theme.colors.$primary,
  } as const;
  const line = {
    backgroundColor: theme.colors.$primary,
    borderRadius: 4,
    height: 2,
    position: 'absolute',
  } as const;
  const middlePoint = {
    borderRadius: 4,
    height: 8,
    width: 8,
    backgroundColor: theme.colors.$primary,
  };

  return { center, clock, endPoint, line, middlePoint };
};

export const getAnalogClockMinuteStyles = (theme: DripsyFinalTheme) => {
  const minuteInner = { borderRadius: 24 };
  const minuteRoot = {
    alignItems: 'center',
    borderRadius: 24,
    height: 48,
    justifyContent: 'center',
    marginLeft: -24,
    marginTop: -24,
    position: 'absolute',
    width: 48,
    zIndex: 20,
  } as const;
  const minuteText = {
    color: theme.colors.$onSurface,
    fontSize: theme.fontSizes[7],
    lineHeight: theme.lineHeights[7],
  };

  const currentMinuteText = {
    ...minuteText,
    color: theme.colors.$onPrimary,
  };

  return {
    minuteInner,
    minuteText,
    minuteRoot,
    currentMinuteText,
  };
};

/**
 *
 * @param size
 * @param count
 */
export const getAnalogClockMinuteNumbers = (size: number, count: number) => {
  let angle = 0;
  const step = (2 * Math.PI) / count;
  const radius = size / 2.5;

  angle = angle = (-90 * Math.PI) / 180;

  return Array.from({ length: 12 })
    .fill(true)
    .map(() => {
      const x = Math.round(size / 2 + radius * Math.cos(angle));
      const y = Math.round(size / 2 + radius * Math.sin(angle));
      angle += step;
      return [x, y];
    });
};

export const getAnalogClockHourStyles = (theme: DripsyFinalTheme) => {
  const innerHourInner = { borderRadius: 24 };
  const innerHourRoot = {
    alignItems: 'center',
    borderRadius: 24,
    height: 48,
    justifyContent: 'center',
    marginLeft: -24,
    marginTop: -24,
    position: 'absolute',
    width: 48,
    zIndex: 20,
  } as const;
  const outerHourInner = { borderRadius: 24 };
  const outerHourRoot = {
    alignItems: 'center',
    borderRadius: 24,
    height: 48,
    justifyContent: 'center',
    marginLeft: -24,
    marginTop: -24,
    position: 'absolute',
    width: 48,
    zIndex: 20,
  } as const;

  const hourText = {
    color: theme.colors.$onSurface,
    fontSize: theme.fontSizes[7],
    lineHeight: theme.lineHeights[7],
  };

  const currentHourText = {
    ...hourText,
    color: theme.colors.$onPrimary,
  };

  return { innerHourInner, innerHourRoot, outerHourInner, outerHourRoot, hourText, currentHourText };
};

/**
 *
 * @param is24Hour
 * @param size
 * @param count
 * @param arrayLength
 */
export const getAnalogClockHourNumbers = (is24Hour: boolean, size: number, count: number, arrayLength: number) => {
  let angle = 0;
  const step = (2 * Math.PI) / count;
  const radius = size / (is24Hour ? 4 : 2.5);

  angle = (-90 * Math.PI) / 180 + Math.PI / 6;

  return Array.from({ length: arrayLength })
    .fill(true)
    .map(() => {
      const x = Math.round(size / 2 + radius * Math.cos(angle));
      const y = Math.round(size / 2 + radius * Math.sin(angle));
      angle += step;
      return [x, y];
    });
};

/**
 *
 */
export const returnTrue = () => {
  return true;
};
