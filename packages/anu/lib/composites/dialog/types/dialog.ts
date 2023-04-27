import { ReactChildren } from 'anu/common/types';
import { ContainerAlign, ContainerJustify, ContainerProps, IconType } from 'anu/lib/primitives';
import { ReactElement } from 'react';
import { StyleProp, ViewStyle } from 'react-native';

export interface DialogProps extends ContainerProps {
  type?: 'basic' | 'full-screen';
  visible?: boolean;
  onDismiss?: () => void;
}

interface DefaultDialogTitleProps {
  /**
   * The text for title
   */
  title: string;
  /**
   * The icon for the title
   */
  icon?: IconType | ReactElement;
  /**
   * Whether to use default title format or custom title components
   */
  type?: 'default';
}

interface CustomDialogTitleProps {
  /**
   * The child elements for the custom title type
   */
  children: ReactChildren;
  /**
   * Whether to use default title format or custom title components
   */
  type: 'custom';
}

interface FullScreenDialogTitleProps {
  /**
   * The child elements for the custom title type
   */
  title: string;

  onDismiss?: () => void;

  action?: ReactElement;

  /**
   * Whether to use default title format or custom title components
   */
  type: 'full-screen';
}

export type DialogTitleProps = DefaultDialogTitleProps | CustomDialogTitleProps | FullScreenDialogTitleProps;

export interface DialogContentProps {
  /**
   * The child components that is displayed to as content of the card
   */
  children: ReactChildren;
  /**
   * The style for content area of the card
   */
  style?: StyleProp<ViewStyle>;
}

export interface DialogActionsProps {
  /**
   * The child components that is displayed to as actions of the card
   */
  children: ReactChildren;
  /**
   * The style for action area of the card
   */
  style?: StyleProp<ViewStyle>;
  /**
   * The alignment of all action items on the cross axis
   */
  align?: ContainerAlign;
  /**
   * The alignment of all action items on the main axis
   */
  justify?: ContainerJustify;
}
