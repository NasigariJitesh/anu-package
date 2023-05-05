import { ReactChildren } from 'anu/common/types';
import { ContainerAlign, ContainerJustify, ContainerProps, IconType } from 'anu/lib';
import { ReactElement } from 'react';
import { StyleProp, ViewStyle } from 'react-native';

export interface DialogProps extends ContainerProps {
  /**
   * The type of the dialog
   */
  type?: 'basic' | 'full-screen';
  /**
   * Whether the dialog is visible.
   */
  visible: boolean;
  /**
   * Callback function to be called when the dialog is dismissed or closed
   *
   * @returns
   */
  onDismiss: () => void;
}

interface DefaultDialogTitleProps {
  /**
   * The text for title
   */
  title: string;
  /**
   * The hero icon for the dialog title
   */
  icon?: IconType | ReactElement;
  /**
   * The type of dialog title
   */
  type?: 'default';
}

interface CustomDialogTitleProps {
  /**
   * The child elements for the custom title type
   */
  children: ReactChildren;
  /**
   * The type of dialog title
   */
  type: 'custom';
}

interface FullScreenDialogTitleProps {
  /**
   * The text for title.
   */
  title: string;

  /**
   * Callback function to be called when the dialog is dismissed or closed
   *
   * @returns
   */
  onDismiss?: () => void;

  /**
   * The action element for the title of full screen dialog.
   */
  action?: ReactElement;

  /**
   * The type of dialog title
   */
  type: 'full-screen';
}

export type DialogTitleProps = DefaultDialogTitleProps | CustomDialogTitleProps | FullScreenDialogTitleProps;

export interface DialogContentProps {
  /**
   * The child components that is displayed to as content of the dialog
   */
  children: ReactChildren;
  /**
   * The style for content area of the dialog
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
