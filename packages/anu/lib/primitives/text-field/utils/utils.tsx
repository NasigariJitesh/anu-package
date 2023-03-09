import { getColorInRGBA } from 'common/utils';
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
      paddingVertical: 0,
      paddingHorizontal: 0,
      borderBottomWidth: 1,
      borderBottomStyle: 'solid',
      borderTopLeftRadius: 4,
      borderTopRightRadius: 4,
      borderBottomColor: colors.$onSurfaceVariant,
      '@disabled': {
        borderBottomColor: getColorInRGBA(colors.$onSurface, 38),
        backgroundColor: getColorInRGBA(colors.$onSurface, 12),
        color: getColorInRGBA(colors.$onSurface, 38),
      },
      '@hover': {
        borderBottomColor: colors.$onSurface,
      },
      '@focus': {
        borderBottomWidth: 2,
        borderBottomColor: colors.$primary,
        color: colors.$primary,
      },
      '@press': {
        borderBottomWidth: 2,
        borderBottomColor: colors.$primary,
        color: colors.$primary,
      },
    },
    outlined: {
      justifyContent: 'center',
      backgroundColor: colors.$background,
      color: colors.$onSurfaceVariant,
      height: 56,
      paddingVertical: 0,
      paddingHorizontal: 0,
      borderWidth: 1,
      borderStyle: 'solid',
      borderRadius: 4,
      borderColor: colors.$outline,
      '@disabled': {
        borderColor: getColorInRGBA(colors.$onSurface, 12),
        color: getColorInRGBA(colors.$onSurface, 38),
      },
      '@hover': {
        borderColor: colors.$onSurface,
        color: colors.$onSurface,
      },
      '@focus': {
        borderColor: colors.$primary,
        color: colors.$primary,
      },
      '@press': {
        borderColor: colors.$primary,
        color: colors.$primary,
      },
    },
  } as const;

  return theme;
};

/**
 * To generate style for the text field component of dripsy
 *
 * @param props
 * @returns style of the dripsy text field
 */
export const getTextFieldStyles = (props?: TextFieldProps) => {
  const { colors } = getTheme();

  const common = {
    fontSize: 16,
    lineHeight: 24,
    outline: 'none',
    paddingVertical: 8,
    paddingHorizontal: 16,
    color: colors.$onSurface,
    caretColor: props?.error ? colors.$error : colors.$primary,
    height: '100%',
    alignText: 'center',
    flex: 1,
    position: 'relative' as const,
  };

  return common;
};

/**
 * To generate style for the leading icon component
 *
 * @returns style of the leading icon
 */
export const getLeadingContainerStyle = () => {
  const style = { paddingLeft: 8, paddingVertical: 16, color: 'inherit' };

  return style;
};

/**
 * To generate style for the trailing icon component
 *
 * @returns style of the trailing icon
 */
export const getTrailingContainerStyle = () => {
  const style = { paddingRight: 8, paddingVertical: 16, color: 'inherit' };

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
            color: colors.$error,
            '@hover': {
              ...finalStyle['@hover'],
              borderColor: colors.$onErrorContainer,
              color: colors.$onErrorContainer,
            },
            '@focus': { ...finalStyle['@focus'], borderColor: colors.$error, color: colors.$error },
            '@press': { ...finalStyle['@press'], borderColor: colors.$error, color: colors.$error },
          }
        : {
            ...finalStyle,
            borderBottomColor: colors.$error,
            color: colors.$error,
            '@hover': {
              ...finalStyle['@hover'],
              borderBottomColor: colors.$onErrorContainer,
              color: colors.$onErrorContainer,
            },
            '@focus': { ...finalStyle['@focus'], borderBottomColor: colors.$error, color: colors.$error },
            '@press': { ...finalStyle['@press'], borderBottomColor: colors.$error, color: colors.$error },
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
    color: colors.$onSurfaceVariant,
    marginVertical: 4,
  };

  return style;
};

export const getErrorIcon = () => {
  return <MaterialCommunityIcons name='alert-circle' color='inherit' size={24} />;
};

export const getInnerContainerStyle = () => {
  return { backgroundColor: 'inherit', height: '100%', borderRadius: 4, color: 'inherit' };
};
