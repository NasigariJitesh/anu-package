import { getTheme } from 'config/dripsy';
import { StyleProp, TextStyle } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { TextFieldProps } from '../types';

/**
 * To generate theme for the text field component
 *
 * @returns theme of the text field
 */
const getTextFieldTheme = () => {
  const { colors } = getTheme();

  const theme = {
    filled: {
      backgroundColor: colors.$surfaceVariant,
      color: colors.$onSurfaceVariant,
      height: 56,
      justifyContent: 'center',
      paddingVertical: 2,
      paddingHorizontal: 0,
      borderBottomWidth: 2,
      borderBottomStyle: 'solid',
      borderTopLeftRadius: 2,
      borderTopRightRadius: 2,
      borderBottomColor: colors.$primary + 60,
      '@disabled': {
        borderBottomColor: colors.$primary + 80,
        backgroundColor: colors.$surfaceVariant + 80,
        color: colors.$onSurfaceVariant + 80,
      },
      '@hover': {
        borderBottomColor: colors.$primary + 40,
      },
      '@focus': {
        borderBottomColor: colors.$primary + 40,
      },
      '@press': {
        borderBottomColor: colors.$primary + 40,
      },
    },
    outlined: {
      justifyContent: 'center',
      backgroundColor: colors.$background,
      color: colors.$onSurfaceVariant,
      height: 56,
      paddingVertical: 2,
      paddingHorizontal: 0,
      borderWidth: 2,
      borderStyle: 'solid',
      borderRadius: 2,
      borderColor: colors.$primary + 60,
      '@disabled': {
        borderColor: colors.$primary + 80,
        backgroundColor: colors.$background + 80,
        color: colors.$onSurfaceVariant + 80,
      },
      '@hover': {
        borderColor: colors.$primary + 40,
      },
      '@focus': {
        borderColor: colors.$primary + 40,
      },
      '@press': {
        borderColor: colors.$primary + 40,
      },
    },
  } as const;

  return theme;
};

/**
 * To generate style for the text field component of dripsy
 *
 * @returns style of the dripsy text field
 */
export const getTextFieldStyles = () => {
  const common = {
    fontSize: 16,
    lineHeight: 24,
    outline: 'none',
    paddingHorizontal: 16,
    height: '100%',
    alignText: 'center',
    flex: 1,
  };

  return common;
};

/**
 * To generate style for the leading icon component
 *
 * @returns style of the leading icon
 */
export const getLeadingContainerStyle = () => {
  const style = { paddingLeft: 8 };

  return style;
};

/**
 * To generate style for the trailing icon component
 *
 * @returns style of the trailing icon
 */
export const getTrailingContainerStyle = () => {
  const style = { paddingRight: 8 };

  return style;
};

/**
 * To generate style for the container of the text field
 *
 * @param {Partial<TextFieldProps>} props - The properties of the text field
 * @returns style of the text field container
 */
export const getTextFieldContainerStyle = (props: Partial<TextFieldProps>) => {
  const { containerStyle, variant, error } = props;

  const theme = getTextFieldTheme();

  const style = theme[variant ?? 'filled'];
  const { colors } = getTheme();

  let finalStyle = {
    ...style,
    ...containerStyle,
    '@hover': { ...style['@hover'], ...containerStyle?.['@hover'] },
    '@focus': { ...style['@focus'], ...containerStyle?.['@focus'] },
    '@press': { ...style['@press'], ...containerStyle?.['@press'] },
  };

  if (error) {
    finalStyle =
      variant === 'outlined'
        ? {
            ...finalStyle,
            borderColor: colors.$error,
            '@hover': { ...finalStyle['@hover'], borderColor: colors.$onErrorContainer },
          }
        : {
            ...finalStyle,
            borderBottomColor: colors.$error,
            '@hover': { ...finalStyle['@hover'], borderBottomColor: colors.$onErrorContainer },
          };
  }

  return finalStyle;
};

/**
 * to get the error message array
 *
 * @param {string | string[]}message - the error messages sent by the user
 * @returns error message array
 */
export const getErrors = (message?: string | string[]) => {
  return typeof message === 'string' ? [message] : message ?? [];
};

/**
 * to generate the error message style
 *
 * @returns style of the error message
 */
export const getErrorStyle = () => {
  const { colors } = getTheme();

  const style: StyleProp<TextStyle> = {
    fontSize: 12,
    lineHeight: 16,
    color: colors.$error,
    marginVertical: 4,
  };

  return style;
};

/**
 * to generate the supporting text style
 *
 * @returns style of the supporting text
 */
export const getSupportingTextStyle = () => {
  const { colors } = getTheme();

  const style: StyleProp<TextStyle> = {
    fontSize: 12,
    lineHeight: 16,
    color: colors.$primary,
    marginVertical: 4,
  };

  return style;
};

export const getErrorIcon = () => {
  const { colors } = getTheme();

  return <MaterialCommunityIcons name='alert-circle' color={colors.$error} size={24} />;
};
