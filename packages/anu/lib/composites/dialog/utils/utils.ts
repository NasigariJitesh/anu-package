import { getColorInRGBA } from 'anu/common/utils';
import { DripsyFinalTheme } from 'dripsy';
import { ScaledSize } from 'react-native';

import { DialogProps, DialogTitleProps } from '../types/dialog';

export const getDialogStyles = (theme: DripsyFinalTheme, props: DialogProps, dimensions: ScaledSize) => {
  const dialog = {
    elevation: 3,
    minWidth: 260,
    padding: 24,
    shadowColor: theme.colors.$shadow,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    borderRadius: 28,
    backgroundColor: theme.colors.$surfaceContainerHigh,
    ...(props.type === 'full-screen'
      ? {
          ...(dimensions.width > 768
            ? { maxWidth: 560, margin: 56, height: dimensions.height - 112 }
            : { width: dimensions.width, height: dimensions.height, borderRadius: 0 }),
        }
      : {
          marginHorizontal: 16,

          ...(dimensions.width > 768 ? { maxWidth: dimensions.width / 3 } : {}),
        }),
  };

  const modalBackground = {
    flex: 1,
    backgroundColor: getColorInRGBA(theme.colors.$scrim, 25),
  };

  const modalRoot = {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  } as const;

  return { dialog, modalRoot, modalBackground };
};

export const getDialogTitleStyles = (theme: DripsyFinalTheme, props: DialogTitleProps) => {
  const container = {
    flexDirection: 'column',
    width: '100%',
    marginBottom: 16,
    ...(props.type === 'default' && props.icon ? { alignItems: 'center' as const } : {}),
    ...(props.type === 'full-screen'
      ? ({ marginBottom: 24, height: 56, flexDirection: 'row', alignItems: 'center' } as const)
      : {}),
  } as const;

  const iconPressableStyle = {
    padding: 4,
    borderRadius: 20,
  };

  const iconStyle = {
    color: theme.colors.$onSurface,
  };

  const titleStyle = {
    color: theme.colors.$onSurface,
    fontSize: theme.fontSizes[5],
    lineHeight: theme.lineHeights[5],
    ...(props.type === 'full-screen' ? { flex: 1, marginLeft: 16 } : {}),
  };

  return { container, iconStyle, titleStyle, iconPressableStyle };
};

export const getDialogContentStyle = () => {
  const container = {
    flex: 1,
  };

  return { container };
};

export const getDialogActionsStyle = () => {
  const container = {
    marginTop: 24,
    width: '100%',
  };
  return { container };
};
