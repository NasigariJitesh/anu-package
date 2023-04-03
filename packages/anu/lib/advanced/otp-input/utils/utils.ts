import { DripsyFinalTheme } from 'dripsy';
import { StyleProp, TextStyle } from 'react-native';

const getMargin = (index: number, length: number) => {
  if (index === 0) return { marginRight: 12 };
  else if (index === length - 1) return { marginLeft: 12 };
  else return { marginHorizontal: 12 };
};

/**
 * to generate styles for the text field
 *
 * @param numberOfDigits - total number of digits
 * @param index - index of the field in the array
 * @returns style for the textfield
 */
export const getOTPFieldStyle = (numberOfDigits: number, index: number) => {
  const style = { height: 40, width: 40, ...getMargin(index, numberOfDigits) };

  return style;
};

/**
 * to generate styles for text input of the text field
 *
 * @returns style of  text input
 */
export const getOTPTextInputStyle = () => {
  const textInputStyle: TextStyle = {
    height: '100%',
    width: '100%',
    paddingHorizontal: 0,
    paddingTop: 0,
    textAlign: 'center',
  };
  return textInputStyle;
};

/**
 * to generate the error message style
 *
 * @param theme - theme of the app
 * @returns style of the error message
 */
export const getErrorStyle = (theme: DripsyFinalTheme) => {
  const { colors } = theme;

  const style: StyleProp<TextStyle> = {
    fontSize: 12,
    lineHeight: 16,
    color: colors.$error,
    marginVertical: 4,
  };

  return style;
};
