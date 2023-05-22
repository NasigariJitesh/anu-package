import { getColorInRGBA } from 'anu/common/utils';
import { DripsyFinalTheme } from 'dripsy';
import { Platform, StyleProp, TextStyle } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { TextFieldProps } from '../types';

/**
 * To generate theme for the text field component
 *
 * @param theme
 * @param theme.colors
 * @returns theme of the text field
 */
const getTextFieldTheme = ({ colors }: DripsyFinalTheme) => {
  const theme = {
    filled: {
      backgroundColor: colors.$surfaceVariant,
      color: colors.$onSurfaceVariant,
      height: 56,
      width: 250,
      justifyContent: 'center',
      paddingVertical: 0,
      paddingHorizontal: 0,
      borderBottomStyle: 'solid',
      borderTopLeftRadius: 4,
      borderTopRightRadius: 4,
      borderBottomWidth: 2,
      borderBottomColor: colors.$onSurfaceVariant,
      cursor: 'text',

      '@disable': {
        borderBottomColor: getColorInRGBA(colors.$onSurface, 38),
        backgroundColor: getColorInRGBA(colors.$onSurface, 4),
        color: getColorInRGBA(colors.$onSurface, 38),
      },
      '@hover': {
        borderBottomColor: colors.$onSurface,
      },
      '@focus': {
        borderBottomColor: colors.$primary,
        color: colors.$primary,
      },
      '@press': {
        borderBottomColor: colors.$primary,
        color: colors.$primary,
      },
    },
    outlined: {
      justifyContent: 'center',
      backgroundColor: colors.$background,
      color: colors.$onSurfaceVariant,
      height: 56,
      width: 250,
      paddingVertical: 0,
      paddingHorizontal: 0,
      borderWidth: 1,
      borderStyle: 'solid',
      borderRadius: 4,
      borderColor: colors.$outline,
      cursor: 'text',

      '@disable': {
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
 * @param theme
 * @param theme.colors
 * @param props
 * @returns style of the dripsy text field
 */
export const getTextStyles = (theme: DripsyFinalTheme, props?: TextFieldProps) => {
  let common = {
    fontSize: theme.fontSizes[7],
    lineHeight: theme.lineHeights[7],
    fontWeight: '400' as const,
    paddingHorizontal: 18,
    color: theme.colors.$onSurface,
    letterSpacing: 0.5,
    backgroundColor: 'transparent',
    position: 'relative' as const,
    width: '100%' as const,
  };

  if (Platform.OS === 'web') {
    common = {
      ...common,
      // @ts-ignore
      outline: 'none' as never,
      caretColor: getError(props?.error) ? theme.colors.$error : theme.colors.$primary,
    };
  }

  if (props?.disabled)
    common = {
      ...common,
      color: getColorInRGBA(theme.colors.$onSurface, 38),
    } as const;

  return common;
};

/**
 * To generate style for the leading icon component
 *
 * @param props
 * @returns style of the leading icon
 */
export const getLeadingContainerStyle = (props: TextFieldProps) => {
  const style = {
    paddingLeft: 8,
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: props.disabled ? 'inherit' : 'transparent',
  } as const;

  return style;
};

/**
 * To generate style for the trailing icon component
 *
 * @param props
 * @returns style of the trailing icon
 */
export const getTrailingContainerStyle = (props: TextFieldProps) => {
  const style = {
    paddingRight: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    minWidth: 48,
    backgroundColor: props.disabled ? 'inherit' : 'transparent',
  } as const;

  return style;
};

/**
 * To generate style for the container of the text field
 *
 * @param {TextFieldProps} props - The properties of the text field
 * @param dripsyTheme
 * @returns style of the text field container
 */
export const getTextFieldStyle = (props: TextFieldProps, dripsyTheme: DripsyFinalTheme) => {
  const { style: propStyle, variant, error, disabled } = props;

  const theme = getTextFieldTheme(dripsyTheme);

  const style = theme[variant];

  const { colors } = dripsyTheme;

  let finalStyle = {
    ...style,
    ...propStyle,
    '@disable': { ...style?.['@disable'], ...propStyle?.['@disable'] },
    '@hover': { ...style?.['@hover'], ...propStyle?.['@hover'] },
    '@focus': { ...style?.['@focus'], ...propStyle?.['@focus'] },
    '@press': { ...style?.['@press'], ...propStyle?.['@press'] },
  };

  if (getError(error)) {
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

  if (disabled) finalStyle = { ...finalStyle, ...finalStyle['@disable'] };

  return finalStyle;
};

/**
 * to get the error message array
 *
 * @param {string | string[]}message - the error messages sent by the user
 * @returns error message array
 */
export const getErrors = (message?: string | string[]) => {
  return Array.isArray(message) ? message : [message];
};

/**
 * to generate the error message style
 *
 * @param theme
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

/**
 * to generate the supporting text style
 *
 * @param theme
 * @returns style of the supporting text
 */
export const getSupportingTextStyle = (theme: DripsyFinalTheme) => {
  const { colors } = theme;

  const style: StyleProp<TextStyle> = {
    fontSize: 12,
    lineHeight: 16,
    color: colors.$onSurfaceVariant,
    marginVertical: 4,
  };

  return style;
};

export const getUnanimatedLabelStyles = (theme: DripsyFinalTheme) => {
  const labelContainerStyle = {
    left: 0,
    position: 'absolute',
    paddingHorizontal: 16,
  } as const;
  const labelTextStyle = {
    fontSize: theme.fontSizes[7],
    lineHeight: theme.lineHeights[7],
    letterSpacing: 0.5,
    paddingHorizontal: 2,
    color: theme.colors.$onSurfaceVariant,
  } as const;

  return { labelContainerStyle, labelTextStyle };
};

export const getErrorIcon = (theme: DripsyFinalTheme) => {
  return <MaterialCommunityIcons name='alert-circle' color={theme.colors.$error} size={24} />;
};

export const getInnerContainerStyle = () => {
  return { height: '100%', flex: 1 };
};

export const getError = (error?: boolean | { (): boolean }) => {
  if (error) {
    return typeof error == 'function' ? error() : error;
  } else return false;
};
