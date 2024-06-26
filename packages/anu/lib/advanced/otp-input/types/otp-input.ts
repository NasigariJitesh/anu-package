import { TextFieldContainerStyle } from 'anu/lib';
import { StyleProp, TextInputProps, TextStyle } from 'react-native';

export interface OTPInputProps {
  /**
   * Number of Digits in the OTP
   */
  numberOfDigits: number;
  /**
   * The OTP Value as a string.
   */
  value: string;
  /**
   *The callback to be called when the OTP is changed.
   */
  onValueChange?: (value: string) => void;
  /**
   *The callback to be called when the OTP is submitted.
   */
  onSubmit?: (value: string) => void;
  /**
   * The type of the OTP.
   */
  type?: 'alphabetic' | 'alphanumeric' | 'numeric';
  hideValue?: boolean;

  size?: number;
  spacing?: number;

  width?: number | string;

  errorMessage?: string[];
  /**
   * The variant of text field for the otp input.
   */
  variant?: 'outlined' | 'filled';
  style?: TextFieldContainerStyle;
  textStyle?: StyleProp<TextStyle>;
  errorMessageStyle?: StyleProp<TextStyle>;
  testID?: string;
  disabled?: boolean;
  error?: boolean;
  keyboardType?: TextInputProps['keyboardType'];
  textContentType?: TextInputProps['textContentType'];
}
