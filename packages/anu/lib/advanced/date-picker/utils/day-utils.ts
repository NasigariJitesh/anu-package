import { DripsyFinalTheme } from 'dripsy';

import { daySize } from './date-utils';

export const dayNamesHeight = 44;

export const getDayStyles = () => {
  const button = {
    borderRadius: daySize / 2,
    height: daySize,
    overflow: 'hidden',
    width: daySize,
  } as const;

  const day = {
    alignItems: 'center',
    borderColor: 'transparent',
    borderRadius: daySize / 2,
    borderWidth: 1,
    flexBasis: 0,
    flex: 1,
    height: daySize,
    justifyContent: 'center',
    width: daySize,
  } as const;

  const disabled = {
    opacity: 0.32,
  };

  const empty = {
    flex: 1,
    flexBasis: 0,
  };

  const root = {
    alignItems: 'center',
    flexBasis: 0,
    flex: 1,
    justifyContent: 'center',
    position: 'relative',
  } as const;

  return { button, day, disabled, empty, root };
};

export const getDayRangeStyles = () => {
  const leftRadius = {
    borderBottomLeftRadius: daySize / 2,
    borderTopLeftRadius: daySize / 2,
  };
  const rightRadius = {
    borderBottomRightRadius: daySize / 2,
    borderTopRightRadius: daySize / 2,
  };
  const rangeRootBoth = {
    borderRadius: daySize / 2,
  };
  const flex1 = {
    flex: 1,
    width: '100%',
  };
  const rangeRoot = {
    flexDirection: 'row',
  } as const;
  const rangeItem = {
    minHeight: daySize,
    width: '100%',
  };

  return { leftRadius, rightRadius, rangeRoot, flex1, rangeRootBoth, rangeItem };
};

export const getDayNamesStyles = (theme: DripsyFinalTheme) => {
  const dayNames = {
    alignItems: 'center',
    flexDirection: 'row',
    height: dayNamesHeight,
    width: '100%',
    backgroundColor: theme.colors.$surfaceContainerHigh,
  } as const;

  return { dayNames };
};

export const getDayNameStyles = (theme: DripsyFinalTheme) => {
  const dayName = { alignItems: 'center', flex: 1 } as const;
  const dayNameLabel = {
    fontSize: theme.fontSizes[9],
    lineHeight: theme.lineHeights[9],
    color: theme.colors.$onSurface,
  };

  return { dayName, dayNameLabel };
};
