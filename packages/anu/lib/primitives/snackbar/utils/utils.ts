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

    paddingHorizontal: 10,
    alignItems: getPosition(props?.align),

    ...(props?.position ?? { bottom: 10 }),
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
  const textContainerStyle = { flex: 1 };
  const textStyle = {
    fontSize: theme.fontSizes[8],
    lineHeight: theme.lineHeights[8],
    color: theme.colors.$inverseOnSurface,
    marginVertical: 16,
    ...(props?.numberOfLines === 2 ? { maxWidth: '60%' } : {}),
  };

  const actionStyle = {
    alignSelf: props?.numberOfLines === 2 && props?.longerAction ? 'flex-end' : 'center',
  } as const;

  const actionLabelStyle = {
    color: theme.colors.$inversePrimary,
  };

  const iconStyle = {
    color: theme.colors.$inverseOnSurface,
  };

  return { containerStyle, snackbarStyle, textStyle, actionStyle, actionLabelStyle, iconStyle, textContainerStyle };
};
