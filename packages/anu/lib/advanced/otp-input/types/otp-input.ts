import { TextFieldContainerStyle } from 'lib';
import { StyleProp, TextStyle, ViewStyle } from 'react-native';

export interface OTPInputProps {
  numberOfDigits: number;
  value: string;
  onValueChange?: (value: string) => void;
  onSubmit?: (value: string) => void;

  type?: 'alphabetic' | 'alphanumeric' | 'numeric';
  hideValue?: boolean;
  error?: boolean;
  errorMessage?: string[];
  variant?: 'outlined' | 'filled';
  containerStyle?: StyleProp<ViewStyle>;
  style?: TextFieldContainerStyle;
  textInputStyle?: StyleProp<TextStyle>;
  errorMessageStyle?: StyleProp<TextStyle>;
  testID?: string;
}
