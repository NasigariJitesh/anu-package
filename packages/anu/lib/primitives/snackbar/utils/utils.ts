import { DripsyFinalTheme } from 'dripsy';

import { SnackbarProps } from '../types';

const getPosition = (align?: 'center' | 'left' | 'right') => {
  switch (align) {
    case 'left': {
      return 'flex-start';
    }
    case 'right': {
      return 'flex-end';
    }
    default: {
      return 'center';
    }
  }
};

export const getSnackbarStyle = (theme: DripsyFinalTheme, props?: SnackbarProps) => {
  const containerStyle = {
    width: '100%',
    position: 'absolute',
    bottom: 10,
    paddingHorizontal: 10,
    alignItems: getPosition(props?.align),
  } as const;

  const snackbarStyle = {
    flexDirection: 'row',
    borderRadius: 4,
    backgroundColor: theme.colors.$inverseSurface,
    alignItems: props?.numberOfLines === 2 && props?.longerAction ? 'flex-start' : 'center',
    paddingHorizontal: 16,
    minWidth: 300,
    minHeight: 48,
    width: '100%',
  } as const;

  const textStyle = {
    flex: 1,
    fontSize: theme.fontSizes[8],
    lineHeight: theme.lineHeights[8],
    color: theme.colors.$inverseOnSurface,
  };

  const actionStyle = {
    alignSelf: props?.numberOfLines === 2 && props?.longerAction ? 'flex-end' : 'center',
  } as const;

  const actionLabelStyle = {
    color: theme.colors.$inverseOnSurface,
  };

  const iconStyle = {
    color: theme.colors.$inverseOnSurface,
  };

  return { containerStyle, snackbarStyle, textStyle, actionStyle, actionLabelStyle, iconStyle };
};
