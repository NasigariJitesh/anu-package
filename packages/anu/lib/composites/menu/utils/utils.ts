import { getColorInRGBA } from 'anu/common/utils';
import { DripsyFinalTheme } from 'dripsy';

import { Position, PositionCoordinates } from './../types/menu';

const getMenuItemTheme = (theme: DripsyFinalTheme) => {
  const menuItemTheme = {
    flexDirection: 'row' as const,
    width: '100%',
    alignItems: 'center' as const,
    paddingHorizontal: 12,
    minHeight: 48,

    '@hover': {
      backgroundColor: getColorInRGBA(theme.colors.$onSurface, 8),
    },
    '@focus': {
      backgroundColor: getColorInRGBA(theme.colors.$onSurface, 12),
    },
    '@press': {
      backgroundColor: getColorInRGBA(theme.colors.$onSurface, 12),
    },
  };
  return menuItemTheme;
};

const getPosition = (
  position: Position,
  listDimension: { height: number; width: number },
  screenDimension: { height: number; width: number },
  positionCoordinates?: PositionCoordinates,
  inner?: boolean,
) => {
  if (positionCoordinates !== undefined && positionCoordinates !== 'auto') {
    return positionCoordinates;
  } else {
    let positionObject = {};
    positionObject =
      position.top + listDimension.height <= screenDimension.height
        ? { ...positionObject, top: position.top + position.height }
        : {
            ...positionObject,
            bottom: screenDimension.height - position.top > 0 ? screenDimension.height - position.top : position.height,
          };
    positionObject =
      position.left + listDimension.width <= screenDimension.width
        ? { ...positionObject, left: position.left }
        : { ...positionObject, right: 0 };
    if (inner) {
      positionObject =
        position.top + listDimension.height - position.height <= screenDimension.height
          ? { ...positionObject, top: position.top }
          : {
              ...positionObject,
              bottom:
                screenDimension.height - position.top > 0 ? screenDimension.height - position.top : position.height,
            };

      positionObject =
        position.left + listDimension.width + position.width <= screenDimension.width
          ? { ...positionObject, left: position.left + position.width }
          : { ...positionObject, right: 0 };
    }

    return positionObject;
  }
};

export const getMenuListStyle = (
  theme: DripsyFinalTheme,
  position: Position,
  listDimension: { height: number; width: number },
  screenDimension: { height: number; width: number },
  positionCoordinates?: PositionCoordinates,
  inner?: boolean,
) => {
  const positionBasedStyle = getPosition(position, listDimension, screenDimension, positionCoordinates, inner);
  const containerStyle = {
    position: 'absolute',
    ...positionBasedStyle,
  } as const;

  const defaultStyle = {
    paddingVertical: 8,
    backgroundColor: theme.colors.$surface,
    borderRadius: 16,
    shadowColor: theme.colors?.$shadow as string,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 1,
  };
  return { containerStyle, defaultStyle };
};

export const getMenuItemStyle = (theme: DripsyFinalTheme, disabled?: boolean, inset?: boolean) => {
  const pressableTheme = getMenuItemTheme(theme);

  const pressableStyle = pressableTheme;
  const childColor = disabled ? getColorInRGBA(theme.colors.$onSurface, 38) : theme.colors.$onSurface;
  const childContainerStyle = {
    flex: 1,
    color: childColor,
    paddingLeft: inset ? 36 : 0,
  };
  const iconStyle = {
    color: childColor,
  };
  const textStyle = {
    color: childColor,
    fontSize: theme.fontSizes[9],
    lineHeight: theme.lineHeights[9],
  };

  return { pressableStyle, childContainerStyle, iconStyle, textStyle };
};

export const getContainerStyle = () => {
  const style = { width: '100%' };
  return style;
};
