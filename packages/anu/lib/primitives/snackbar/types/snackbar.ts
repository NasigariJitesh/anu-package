import { StyleProp, TextStyle, ViewStyle } from 'react-native';

import { IconButtonProps, RegularButtonProps } from '../../button';

type ActionProps = Partial<RegularButtonProps> & { title: string; type?: 'text' };

type IconProps = Omit<IconButtonProps, 'toggle' | 'selected'> & { type?: 'standard' };

interface CommonSnackbarProps {
  duration?: number;
  numberOfLines?: 1 | 2;
  action?: ActionProps;
  content: string;
  style?: StyleProp<ViewStyle>;
  contentStyle?: StyleProp<TextStyle>;
  align?: 'left' | 'right' | 'center';
}

interface SingleLineSnackbarProps extends CommonSnackbarProps {
  numberOfLines?: 1;
  icon?: IconProps;
}

interface DoubleLineSnackbarProps extends CommonSnackbarProps {
  numberOfLines: 2;
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
