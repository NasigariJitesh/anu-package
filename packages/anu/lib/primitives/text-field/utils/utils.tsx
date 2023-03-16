import { getColorInRGBA } from 'common/utils';
import { DripsyFinalTheme } from 'dripsy';
import { StyleProp, TextStyle } from 'react-native';
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
      minWidth: '245px',
      width: '100%',
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
      minWidth: '245px',
      width: '100%',
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
export const getTextFieldStyles = ({ colors }: DripsyFinalTheme, props?: TextFieldProps) => {
  let common = {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '400' as const,
    outline: 'none',
    // paddingTop: props?.variant === 'filled' ? 8 : 0,
    paddingHorizontal: 18,
    color: colors.$onSurface,
    letterSpacing: 0.5,
    caretColor: props?.error ? colors.$error : colors.$primary,

    backgroundColor: 'transparent',
  };

  if (props?.disabled)
    common = {
      ...common,
      color: 'inherit' as never,
    };

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
    paddingVertical: 16,
    color: 'inherit',
    backgroundColor: props.disabled ? 'inherit' : 'transparent',
  };

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
    paddingVertical: 16,
    color: 'inherit',
    backgroundColor: props.disabled ? 'inherit' : 'transparent',
  };

  return style;
};

/**
 * To generate style for the container of the text field
 *
 * @param {Partial<TextFieldProps>} props - The properties of the text field
 * @param dripsyTheme
 * @returns style of the text field container
 */
export const getTextFieldContainerStyle = (props: Partial<TextFieldProps>, dripsyTheme: DripsyFinalTheme) => {
  const { style: propStyle, variant, error, disabled } = props;

  const theme = getTextFieldTheme(dripsyTheme);

  const style = theme[variant ?? 'filled'];

  const { colors } = dripsyTheme;

  let finalStyle = {
    ...style,
    ...propStyle,
    '@disable': { ...style['@disable'], ...propStyle?.['@disable'] },
    '@hover': { ...style['@hover'], ...propStyle?.['@hover'] },
    '@focus': { ...style['@focus'], ...propStyle?.['@focus'] },
    '@press': { ...style['@press'], ...propStyle?.['@press'] },
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
  return typeof message === 'string' ? [message] : message ?? [];
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

export const getErrorIcon = () => {
  return <MaterialCommunityIcons name='alert-circle' color='inherit' size={24} />;
};

export const getInnerContainerStyle = () => {
  return { backgroundColor: 'inherit', height: '100%', borderRadius: 4, color: 'inherit', flex: 1 };
};
