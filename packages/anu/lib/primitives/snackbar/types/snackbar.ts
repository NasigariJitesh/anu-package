import { StyleProp, TextStyle, ViewStyle } from 'react-native';

import { IconButtonProps, RegularButtonProps } from '../../button';

type ActionProps = Partial<RegularButtonProps> & { title: string; type?: 'text' };

type IconProps = Omit<IconButtonProps, 'toggle' | 'selected' | 'type'> & { type?: 'standard' };

interface CommonSnackbarProps {
  /**
   * The duration for which snackbar is to be displayed
   */
  duration?: number;
  /**
   * Maximum number of lines allowed for the content typography component
   */
  numberOfLines?: 1 | 2;
  /**
   * The action that is to be displayed in snackbar
   */
  action?: ActionProps;
  /**
   * The content to be displayed in snackbar
   */
  content: string;
  /**
   * "Styles for the snackbar
   */
  style?: StyleProp<ViewStyle>;
  /**
   * Styles for the snackbar content
   */
  contentStyle?: StyleProp<TextStyle>;
  /**
   * Horizontal alignment of the snackbar
   */
  align?: 'left' | 'right' | 'center';
  /**
   * Position of the Snackbar
   */
  position?: { top: number } | { bottom: number };
}

interface SingleLineSnackbarProps extends CommonSnackbarProps {
  /**
   * Maximum number of lines allowed for the content typography component
   */
  numberOfLines?: 1;
  /**
   * The icon to be displayed in snackbar
   */
  icon?: IconProps;
}

interface DoubleLineSnackbarProps extends CommonSnackbarProps {
  /**
   * Maximum number of lines allowed for the content typography component
   */
  numberOfLines: 2;
  /**
   * Whether the action is of longerAction variant
   */
  longerAction?: boolean;
}

export type SnackbarProps = SingleLineSnackbarProps | DoubleLineSnackbarProps;

export interface SnackbarContextData {
  add: (snackbar: SnackbarProps) => void;
  close: () => void;
  remove: (snackbar: SnackbarProps) => void;
  currentSnackBar?: SnackbarProps;
  defaultSnackbarConfiguration?: Partial<SnackbarProps>;
}
