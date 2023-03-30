import { TextFieldContainerStyle } from 'lib';
import { StyleProp, TextStyle, ViewStyle } from 'react-native';

export interface OTPInputProps {
  numberOfDigits: number;
  value: string;
  onValueChange?: (value: string) => void;
  type?: 'alphabetic' | 'alphanumeric' | 'numeric';
  showValue?: boolean;
  error?: boolean;
  errorMessage?: string;
  variant?: 'outlined' | 'filled';
  containerStyle?: StyleProp<ViewStyle>;
  style?: TextFieldContainerStyle;
  textInputStyle?: StyleProp<TextStyle>;
}
