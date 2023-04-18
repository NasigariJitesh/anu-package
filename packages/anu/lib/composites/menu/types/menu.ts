import { ReactChildren } from 'anu/common/types';
import { ContainerProps, IconType } from 'anu/lib/primitives';
import { ReactElement } from 'react';
import { Animated, GestureResponderEvent, PressableProps, ViewProps, ViewStyle } from 'react-native';

export interface Position {
  height: number;
  width: number;
  x: number;
  y: number;
}

export type PositionCoordinates =
  | { top: number; left: number }
  | { top: number; right: number }
  | { bottom: number; right: number }
  | { bottom: number; left: number };

export type PositionType = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';

export interface MenuProps {
  onMenuToggle?: (value: boolean) => void;
  isOpen?: boolean;
  disabled?: boolean;
  children?: ReactChildren;
}

export interface MenuListProps extends Omit<ViewProps, 'style'> {
  position?: PositionType;
  positionCoordinates?: PositionCoordinates;
  style?: Animated.WithAnimatedObject<ViewStyle>;
  height?: number;
}

export type MenuComponentProps = ContainerProps;

export interface MenuItemProps extends Omit<PressableProps, 'children'> {
  leadingIcon?: IconType | ReactElement;
  trailingIcon?: IconType | ReactElement;
  trailingText?: string;
  children: ReactChildren;
}

export interface MenuContextData {
  isOpen: boolean;
  displayMenu: (event?: GestureResponderEvent) => void;
  hideMenu: (event?: GestureResponderEvent) => void;
  isDisabled: boolean;
  position: Position;
  updatePosition: React.Dispatch<
    React.SetStateAction<{
      height: number;
      width: number;
      x: number;
      y: number;
    }>
  >;
}
