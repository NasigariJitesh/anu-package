import { ReactChildren } from 'anu/common/types';
import { ContainerProps, IconType } from 'anu/lib/primitives';
import { ReactElement } from 'react';
import { PressableProps } from 'react-native';

export interface Position {
  height: number;
  width: number;
  x?: number;
  y?: number;
  top: number;
  left: number;
}

export type PositionCoordinates =
  | { top: number; left: number }
  | { top: number; right: number }
  | { bottom: number; right: number }
  | { bottom: number; left: number }
  | 'auto';

export interface MenuProps {
  onMenuToggle: (value: boolean) => void;
  isOpen: boolean;
  disabled?: boolean;
  component: ReactChildren;
  children: ReactElement<MenuListProps>;
}

export interface MenuListProps extends ContainerProps {
  positionCoordinates?: PositionCoordinates;
  inner?: boolean;
}

export interface MenuItemProps extends Omit<PressableProps, 'children'> {
  leadingIcon?: IconType | ReactElement;
  trailingIcon?: IconType | ReactElement;
  trailingText?: string;
  children: ReactChildren;
  inset?: boolean;
}

export interface MenuContextData {
  isOpen: boolean;
  displayMenu: () => void;
  hideMenu: () => void;
  position: Position;
  rootPosition: Position;
  listDimension: { height: number; width: number };
  updatePosition: React.Dispatch<
    React.SetStateAction<{
      height: number;
      width: number;
      x: number;
      y: number;
      top: number;
      left: number;
    }>
  >;
  updateRootPosition: React.Dispatch<
    React.SetStateAction<{
      height: number;
      width: number;
      x: number;
      y: number;
      top: number;
      left: number;
    }>
  >;
  updateListDimension: React.Dispatch<
    React.SetStateAction<{
      height: number;
      width: number;
    }>
  >;
}
