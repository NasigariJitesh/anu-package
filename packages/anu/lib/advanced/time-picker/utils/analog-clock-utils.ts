import { DripsyFinalTheme } from 'dripsy';

export const getAnalogClockStyles = (theme: DripsyFinalTheme, circleSize: number) => {
  const baseValue = (circleSize / 32) * 3;

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
    borderRadius: baseValue,
    bottom: -baseValue + 1,
    height: baseValue * 2,
    position: 'absolute',
    right: 0,
    width: baseValue * 2,
    backgroundColor: theme.colors.$primary,
  } as const;
  const line = {
    backgroundColor: theme.colors.$primary,
    borderRadius: baseValue / 6,
    height: 2,
    position: 'absolute',
  } as const;
  const middlePoint = {
    borderRadius: baseValue / 6,
    height: baseValue / 3,
    width: baseValue / 3,
    backgroundColor: theme.colors.$primary,
  };

  return { center, clock, endPoint, line, middlePoint };
};

export const getAnalogClockMinuteStyles = (theme: DripsyFinalTheme, circleSize: number) => {
  const baseValue = (circleSize / 32) * 3;

  const minuteInner = { borderRadius: baseValue };
  const minuteRoot = {
    alignItems: 'center',
    borderRadius: baseValue,
    height: baseValue * 2,
    justifyContent: 'center',
    marginLeft: -baseValue,
    marginTop: -baseValue,
    position: 'absolute',
    width: baseValue * 2,
    zIndex: 20,
  } as const;
  const minuteText = {
    color: theme.colors.$onSurface,
    fontSize: (baseValue * 2) / 3,
    lineHeight: baseValue,
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

export const getAnalogClockHourStyles = (theme: DripsyFinalTheme, circleSize: number) => {
  const baseValue = (circleSize / 32) * 3;

  const innerHourInner = { borderRadius: baseValue };
  const innerHourRoot = {
    alignItems: 'center',
    borderRadius: baseValue,
    height: baseValue * 2,
    justifyContent: 'center',
    marginLeft: -baseValue,
    marginTop: -baseValue,
    position: 'absolute',
    width: baseValue * 2,
    zIndex: 20,
  } as const;
  const outerHourInner = { borderRadius: baseValue };
  const outerHourRoot = {
    alignItems: 'center',
    borderRadius: baseValue,
    height: baseValue * 2,
    justifyContent: 'center',
    marginLeft: -baseValue,
    marginTop: -baseValue,
    position: 'absolute',
    width: baseValue * 2,
    zIndex: 20,
  } as const;

  const hourText = {
    color: theme.colors.$onSurface,
    fontSize: (baseValue * 2) / 3,
    lineHeight: baseValue,
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
