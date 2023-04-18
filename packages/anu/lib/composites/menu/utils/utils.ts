import { DripsyFinalTheme } from 'dripsy';

import { MenuListProps, Position } from './../types/menu';

const getPosition = (position: Position, props: MenuListProps) => {
  const { positionCoordinates, position: positionType } = props;

  if (positionCoordinates) {
    if ('top' in positionCoordinates) {
      if ('left' in positionCoordinates)
        return { top: position.y + positionCoordinates.top, left: position.x + positionCoordinates.left };
      else if ('right' in positionCoordinates)
        return {
          top: position.y + positionCoordinates.top,
          right: position.x + position.width - positionCoordinates.right,
        };
    } else if ('bottom' in positionCoordinates) {
      if ('left' in positionCoordinates)
        return {
          top: position.y + position.height - positionCoordinates.bottom,
          left: position.x + positionCoordinates.left,
        };
      else if ('right' in positionCoordinates)
        return {
          top: position.y + position.height - positionCoordinates.bottom,
          left: position.x + position.width - positionCoordinates.right,
        };
    }
  } else {
    switch (positionType) {
      case 'top-left': {
        return {
          top: position.y,
          left: position.x,
        };
      }
      case 'top-right': {
        return {
          top: position.y,
          right: position.x + position.width,
        };
      }
      case 'bottom-left': {
        return {
          top: position.y + position.height,
          left: position.x,
        };
      }
      case 'bottom-right': {
        return {
          top: position.y + position.height,
          left: position.x + position.width,
        };
      }
      default: {
        return {
          top: position.y + position.height,
          left: position.x + position.width,
        };
      }
    }
  }
};

export const getMenuListStyle = (theme: DripsyFinalTheme, position: Position, props: MenuListProps) => {
  const positionBasedStyle = getPosition(position, props);

  const containerStyle = {
    position: 'absolute',
    ...positionBasedStyle,
  } as const;

  const defaultStyle = {
    paddingVertical: 8,
    backgroundColor: theme.colors.$surface,
    borderRadius: 16,
  };
  return { containerStyle, defaultStyle };
};

export const getMenuItemStyle = (theme: DripsyFinalTheme) => {
  const pressableStyle = {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 12,
  } as const;
  const childContainerStyle = {
    flex: 1,
    paddingLeft: 12,
  };
  const iconStyle = {
    color: theme.colors.$onSurface,
  };
  const textStyle = {
    color: theme.colors.$onSurface,
    fontSize: theme.fontSizes[9],
    lineHeight: theme.lineHeights[9],
  };
  return { pressableStyle, childContainerStyle, iconStyle, textStyle };
};
