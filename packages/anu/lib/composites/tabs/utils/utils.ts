import { getColorInRGBA } from 'anu/common/utils';
import { DripsyFinalTheme } from 'dripsy';
import { StyleProp, ViewStyle } from 'react-native';

import { HeaderItemProps } from '../types';

export const getHeaderItemStyles = (theme: DripsyFinalTheme, props: HeaderItemProps) => {
  const RippleStyle = {
    minWidth: 150,
    flex: 1,
    '@hover': {
      backgroundColor: getColorInRGBA(props.isActive ? theme.colors.$primary : theme.colors.$onSurface, 8),
    },
    '@press': {
      backgroundColor: getColorInRGBA(props.isActive ? theme.colors.$primary : theme.colors.$onSurface, 12),
    },
    '@focus': {
      backgroundColor: getColorInRGBA(props.isActive ? theme.colors.$primary : theme.colors.$onSurface, 12),
    },
  };

  const containerStyle = {
    minHeight: props.type !== 'secondary' && props.icon && props.name ? 64 : 48,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    flex: 1,
  } as const;

  const innerContainerStyle = {
    flexDirection: props.type === 'secondary' ? 'row' : 'column',
    alignItems: 'center',
    justifyContent: 'center',
  } as const;

  const primaryIndicatorStyle = {
    width: '40%',
    height: 3,
    borderTopRightRadius: 3,
    borderTopLeftRadius: 3,
    backgroundColor: theme.colors.$primary,
  } as const;
  const primaryIndicatorContainerStyle = {
    width: '100%',
    height: 3,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
  } as const;
  const secondaryIndicatorStyle = {
    width: '100%',
    height: 2,
    backgroundColor: theme.colors.$primary,
    bottom: 0,
    position: 'absolute',
  } as const;

  const activeStyle = {
    color: theme.colors.$primary,
  };

  const iconStyle = {
    color: theme.colors.$onSurfaceVariant,
    ...(props.type === 'secondary' ? { marginRight: 16 } : { marginBottom: 5 }),
  };

  const labelStyle = {
    fontSize: theme.fontSizes[8],
    lineHeight: theme.lineHeights[8],
    color: theme.colors.$onSurfaceVariant,
  };

  return {
    RippleStyle,
    activeStyle,
    labelStyle,
    iconStyle,
    primaryIndicatorContainerStyle,
    primaryIndicatorStyle,
    secondaryIndicatorStyle,
    containerStyle,
    innerContainerStyle,
  };
};

export const getTabHeaderStyles = () => {
  const container = {
    flexDirection: 'row',
    width: '100%',
    minHeight: 48,
  } as const;
  const contentContainer = {
    flex: 1,
  };
  return { container, contentContainer };
};

export const getTabsStyles = () => {
  const container = { width: '100%' };
  const divider = { marginVertical: 0 };

  return { divider, container };
};

export const getCustomStyles = (props: HeaderItemProps) => {
  let styles: StyleProp<ViewStyle> = [];

  if (props.tabHeaderStyle && Array.isArray(props.tabHeaderStyle)) {
    styles = [...styles, ...props.tabHeaderStyle];
  } else if (props.tabHeaderStyle) styles = [...styles, props.tabHeaderStyle];

  if (props.isActive) {
    if (props.activeTabHeaderStyle && Array.isArray(props.activeTabHeaderStyle)) {
      styles = [...styles, ...props.activeTabHeaderStyle];
    } else if (props.activeTabHeaderStyle) styles = [...styles, props.activeTabHeaderStyle];
  }

  return styles;
};
