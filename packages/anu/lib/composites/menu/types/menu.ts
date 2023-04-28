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
  /**
   * Callback to be called when the menu is to toggled between open and close
   *
   * @param value - the value of the state of menu (open or closed)
   */
  onMenuToggle: (value: boolean) => void;
  /**
   * Whether the menu is open
   */
  isOpen: boolean;
  /**
   * The component that controls menu
   */
  component: ReactChildren;
  /**
   * The menu list co
   */
  children: ReactElement<MenuListProps>;
}

export interface MenuListProps extends ContainerProps {
  /**
   *The co-ordinates of the custom position of the menu
   */
  positionCoordinates?: PositionCoordinates;
  /**
   *Whether the menu is nested inside another menu
   */
  inner?: boolean;
}

export interface MenuItemProps extends Omit<PressableProps, 'children'> {
  /**
   * The icon displayed on the left side of the menu item
   */
  leadingIcon?: IconType | ReactElement;
  /**
   * The icon displayed on the right side of the menu item
   */
  trailingIcon?: IconType | ReactElement;
  /**
   * The text displayed on the right side of the menu item
   */
  trailingText?: string;
  /**
   * The content of the menu item
   */
  children: ReactChildren;
  /**
   * If true, additional padding (inset) is added on the left
   */
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
