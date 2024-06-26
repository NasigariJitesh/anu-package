import {
  getColorInRGBA,
  getResetBorderWidthStyles,
  getResetMarginStyles,
  getResetPaddingStyles,
} from 'anu/common/utils';
import { DripsyFinalTheme } from 'dripsy';
import { Platform } from 'react-native';

import { ButtonContainerStyle, RegularButtonProps } from '../types';

/**
 * This is a central store for all the default button style
 *
 * @param {DripsyFinalTheme} theme - theme of the library
 * @returns button theme
 */
const getButtonTheme = (theme: DripsyFinalTheme) => {
  const themeColors = theme.colors;

  const buttonTheme = {
    common: {
      minHeight: 40,
      minWidth: 100,

      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 100,
    },
    filled: {
      backgroundColor: themeColors.$primary,
      color: themeColors.$onPrimary,

      '@disable': {
        color: getColorInRGBA(themeColors.$onSurface, 38),
        backgroundColor: getColorInRGBA(themeColors.$onSurface, 12),
      },
    },
    elevated: {
      backgroundColor: themeColors.$surface,
      color: themeColors.$primary,
      shadowColor: themeColors.$shadow,
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 1,

      '@disable': {
        color: getColorInRGBA(themeColors.$onSurface, 38),
        backgroundColor: getColorInRGBA(themeColors.$onSurface, 12),
        shadowOffset: {
          width: 0,
          height: 0,
        },
        elevation: 0,
        shadowRadius: 0,
      },
    },
    tonal: {
      backgroundColor: themeColors.$secondaryContainer,
      color: themeColors.$onSecondaryContainer,

      '@disable': {
        color: getColorInRGBA(themeColors.$onSurface, 38),
        backgroundColor: getColorInRGBA(themeColors.$onSurface, 12),
      },
    },
    outlined: {
      backgroundColor: 'transparent',
      color: themeColors.$primary,

      '@disable': {
        color: getColorInRGBA(themeColors.$onSurface, 38),
      },
    },
    text: {
      backgroundColor: 'transparent',
      color: themeColors.$primary,

      '@disable': {
        color: getColorInRGBA(themeColors.$onSurface, 38),
      },
    },
  } as const;

  const stateLayerTheme = {
    common: {
      minHeight: 40,
      minWidth: 100,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 100,
      paddingHorizontal: 16,
    },
    filled: {
      backgroundColor: 'transparent',

      '@hover': {
        backgroundColor: getColorInRGBA(themeColors.$onPrimary, 8),
        shadowColor: themeColors.$shadow,
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 1,
      },

      '@focus': {
        backgroundColor: getColorInRGBA(themeColors.$onPrimary, 12),
      },

      '@press': {
        backgroundColor: getColorInRGBA(themeColors.$onPrimary, 8),
      },
    },
    elevated: {
      backgroundColor: 'transparent',

      '@hover': {
        shadowColor: themeColors.$shadow,
        shadowOffset: {
          width: 0,
          height: 6,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 2,
        backgroundColor: getColorInRGBA(themeColors.$primary, 8),
      },

      '@focus': {
        backgroundColor: getColorInRGBA(themeColors.$primary, 12),
      },

      '@press': {
        backgroundColor: getColorInRGBA(themeColors.$primary, 12),
      },
    },
    tonal: {
      backgroundColor: 'transparent',

      '@hover': {
        shadowColor: themeColors.$shadow,
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 1,
        backgroundColor: getColorInRGBA(themeColors.$onSecondaryContainer, 8),
      },

      '@focus': {
        backgroundColor: getColorInRGBA(themeColors.$onSecondaryContainer, 12),
      },

      '@press': {
        backgroundColor: getColorInRGBA(themeColors.$onSecondaryContainer, 12),
      },
    },
    outlined: {
      backgroundColor: 'transparent',
      borderWidth: 1,
      borderColor: themeColors.$outline,

      '@hover': {
        backgroundColor: getColorInRGBA(themeColors.$primary, 8),
      },

      '@focus': {
        backgroundColor: getColorInRGBA(themeColors.$primary, 12),
        borderColor: themeColors.$primary,
      },

      '@press': {
        backgroundColor: getColorInRGBA(themeColors.$primary, 12),
      },
    },
    text: {
      backgroundColor: 'transparent',
      paddingHorizontal: 12,

      '@hover': {
        backgroundColor: getColorInRGBA(themeColors.$primary, 8),
      },

      '@focus': {
        backgroundColor: getColorInRGBA(themeColors.$primary, 12),
      },

      '@press': {
        backgroundColor: getColorInRGBA(themeColors.$primary, 12),
      },
    },
  } as const;

  return { buttonTheme, stateLayerTheme };
};

/**
 * The return type of the getButtonStyles function
 */
export type GetButtonStylesReturnType = ButtonContainerStyle;

/**
 * Get the button styles based on the type of the component
 *
 * @param {RegularButtonProps} props - props of the button component
 * @param {DripsyFinalTheme} theme - theme of the library
 */
export const getButtonStyles = (props: RegularButtonProps, theme: DripsyFinalTheme) => {
  const { styles: regularStyles, stateLayerStyles } = getRegularButtonStyles(props, theme);
  const styles = regularStyles;

  return {
    styles,
    stateLayerStyles,
  };
};

/**
 * Get the styles when button is disabled
 *
 * @param props - props of the button component
 * @param {DripsyFinalTheme} defaultTheme - theme of the library
 */
export const getDisabledButtonStyles = (
  props: RegularButtonProps,
  defaultTheme: DripsyFinalTheme,
): GetButtonStylesReturnType => {
  const { buttonTheme } = getButtonTheme(defaultTheme);

  const theme = buttonTheme[props.variant];

  if (props.disabled) return { ...theme['@disable'], ...props.style?.['@disable'] };

  return {};
};

/**
 * Get the styles for the regular button
 *
 * @param props - props of the button component
 * @param {DripsyFinalTheme} defaultTheme - theme of the library
 */
const getRegularButtonStyles = (props: RegularButtonProps, defaultTheme: DripsyFinalTheme) => {
  const { buttonTheme, stateLayerTheme } = getButtonTheme(defaultTheme);
  const { colors } = defaultTheme;

  const theme = buttonTheme[props.variant];
  const commonTheme = buttonTheme.common;

  const layerTheme = stateLayerTheme[props.variant];
  const commonLayerTheme = stateLayerTheme.common;

  const {
    '@disable': propsDisableStyles,
    '@hover': propsHoverStyles,
    '@focus': propsFocusStyles,
    '@press': propsPressStyles,
    ...propsOtherStyles
  } = props?.style ?? {};

  const { backgroundColor, ...propsOtherStylesForStateLayer } = propsOtherStyles;

  let styles;

  styles = {
    backgroundColor: theme.backgroundColor,
    color: theme.color,
    ...commonTheme,
    ...propsOtherStyles,
    ...(props.variant === 'outlined' ? { ...getResetBorderWidthStyles() } : {}),
    ...getResetPaddingStyles(),
  };

  let stateLayerStyles: GetButtonStylesReturnType = {
    ...commonLayerTheme,
    ...layerTheme,

    ...propsOtherStylesForStateLayer,

    ...(props.variant === 'outlined' ? {} : { ...getResetBorderWidthStyles() }),
    ...getResetMarginStyles(),
    '@hover': { ...layerTheme['@hover'], ...propsHoverStyles },
    '@focus': { ...layerTheme['@focus'], ...propsFocusStyles },
    '@press': { ...layerTheme['@press'], ...propsPressStyles },
  };

  switch (props.variant) {
    case 'elevated': {
      {
        const elevatedTheme = buttonTheme.elevated;

        styles = {
          ...styles,
          ...elevatedTheme,
        };
      }
      break;
    }

    case 'outlined': {
      {
        const outlinedTheme = buttonTheme.outlined;

        styles = {
          ...styles,
          ...outlinedTheme,
        };
      }
      break;
    }
  }

  const disabledStyles = getDisabledButtonStyles(props, defaultTheme);

  if (props.disabled && props.variant === 'outlined')
    stateLayerStyles = { ...stateLayerStyles, borderColor: getColorInRGBA(colors.$onSurface, 12) };

  return { styles: { ...styles, ...disabledStyles }, stateLayerStyles };
};

/**
 * Get the styles for the regular button label
 *
 * @param props - props of the button component
 */
export const getLabelStyles = (props: RegularButtonProps) => {
  let labelStyles;
  labelStyles = { paddingHorizontal: 8 };

  if (Platform.OS === 'web') {
    labelStyles = { ...labelStyles, cursor: 'pointer' };
  }

  if (props.icon && props.variant === 'text') {
    labelStyles = { ...labelStyles, paddingLeft: 8, paddingRight: 4 };
  }

  return labelStyles;
};
