import { DripsyFinalTheme } from 'dripsy';
import { StyleProp, TextStyle } from 'react-native';

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
