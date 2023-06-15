import { DripsyFinalTheme } from 'dripsy';

import { getColorInRGBA } from '../../../../common/utils';
import { StepHeaderItemProps, StepHeaderProps, StepProps } from '../types';

const getStepIconColors = (props: StepProps, theme: DripsyFinalTheme, isCurrent: boolean) => {
  if (props.error)
    return {
      backgroundColor: theme.colors.$error,
      color: theme.colors.$onError,
    };
  else if (props.completed || isCurrent)
    return {
      backgroundColor: theme.colors.$primary,
      color: theme.colors.$onPrimary,
    };
  else
    return {
      backgroundColor: getColorInRGBA(theme.colors.$onSurface, 4),
      color: getColorInRGBA(theme.colors.$onSurface, 38),
    };
};

export const getStepNumberStyles = (props: StepProps, theme: DripsyFinalTheme, isCurrent: boolean) => {
  const { backgroundColor, color } = getStepIconColors(props, theme, isCurrent);

  const text = {
    textAlign: 'center' as const,
    fontSize: theme.fontSizes[9],
    color,
  };

  const container = {
    width: 24,
    height: 24,
    borderRadius: 12,
    alignItems: 'center' as const,
    justifyContent: 'center' as const,
    backgroundColor,
  };

  const icon = {
    color,
  };

  return { text, container, icon };
};

const getStepNameColor = (props: StepProps, theme: DripsyFinalTheme, isCurrent: boolean) => {
  if (props.error) return theme.colors.$error;
  else if (props.completed || isCurrent) return theme.colors.$onSurface;
  else return getColorInRGBA(theme.colors.$onSurfaceVariant, 38);
};

export const getStepIndicatorHeaderStyles = (props: StepHeaderProps) => {
  const container = {
    flexDirection: props.vertical ? 'column' : 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width: '100%',
    ...(props.vertical ? { height: '100%' } : {}),
  } as const;

  return { container };
};

export const getStepIndicatorHeaderItemStyles = (
  theme: DripsyFinalTheme,
  props: StepHeaderItemProps,
  isCurrent: boolean,
) => {
  const container = {
    flexDirection: props.vertical ? 'column' : 'row',
    alignItems: props.vertical || props.labelPlacement === 'below' ? 'flex-start' : 'center',
    justifyContent: 'flex-start',
    flex: props.vertical ? 1 : 2,
  } as const;

  const dividerContainer = {
    flexDirection: props.vertical ? 'column' : 'row',
    alignItems: 'center',
    justifyContent: 'center',
    ...(props.vertical ? { width: 24, alignSelf: 'stretch' as const } : { flex: 1, height: 24 }),
  } as const;

  const stepDetailsContainer = {
    ...(props.labelPlacement === 'below'
      ? ({ width: 40, flexDirection: 'column', justifyContent: 'center' } as const)
      : ({ flexDirection: 'row', alignItems: 'center' } as const)),
    ...(props.vertical ? { paddingVertical: 8 } : { paddingHorizontal: 8 }),
  };

  const stepNameContainer = {
    flexDirection: 'column',
    ...(props.labelPlacement === 'below' ? { marginTop: 16 } : { marginLeft: 8 }),
    alignItems: 'center',
  } as const;

  const stepContainer = {
    flexDirection: 'row',
    alignItems: props.vertical ? 'flex-start' : 'center',
    flex: 1,
  } as const;

  const childrenContainer = {
    width: '100%',
  };

  const stepName = {
    textAlign: 'center' as const,
    fontSize: theme.fontSizes[8],
    lineHeight: theme.lineHeights[8],
    color: getStepNameColor(props.item.props, theme, isCurrent),
    ...(props.labelPlacement === 'below' ? { minWidth: 50, height: 20 } : {}),
  };
  const optional = {
    textAlign: 'center' as const,
    fontSize: theme.fontSizes[9],
    lineHeight: theme.lineHeights[9],
    color: getStepNameColor(props.item.props, theme, isCurrent),
  };
  return {
    container,
    stepDetailsContainer,
    dividerContainer,
    stepContainer,
    childrenContainer,
    stepName,
    optional,
    stepNameContainer,
  };
};
