import { getTheme } from 'config/dripsy/theme';

import { ButtonContainerStyle, ButtonProps } from '../types';

/**
 * This is a central store for all the default button style
 *
 * @returns button theme
 */
const getButtonTheme = () => {
  const themeColors = getTheme().colors;

  const buttonTheme = {
    common: {
      minHeight: 40,
      minWidth: 100,

      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 100,
      transitionProperty: 'all',
      transitionTimingFunction: 'ease',
      transitionDuration: '.2s',
    },
    filled: {
      backgroundColor: themeColors.$primary,
      color: themeColors.$background,
      paddingHorizontal: 24,

      '@disable': {
        color: themeColors.$shadow,
        backgroundColor: themeColors.$shadow + 50,
      },

      '@hover': {
        backgroundColor: themeColors.$primary + 85,
      },

      '@focus': {
        backgroundColor: themeColors.$primary + 90,
      },

      '@press': {
        backgroundColor: themeColors.$primary + 90,
      },
    },
    elevated: {
      backgroundColor: themeColors.$background,
      color: themeColors.$primary,
      shadowColor: themeColors.$primary + 90,
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 1,
      paddingHorizontal: 24,

      '@hover': {
        shadowOffset: {
          width: 0,
          height: 6,
        },
        backgroundColor: themeColors.$primary + 60,
      },

      '@disable': {
        color: themeColors.$shadow,
        backgroundColor: themeColors.$shadow + 50,
      },

      '@focus': {
        backgroundColor: themeColors.$primary + 70,
      },

      '@press': {
        backgroundColor: themeColors.$primary + 70,
      },
    },
    tonal: {
      backgroundColor: themeColors.$primary + 50,
      color: themeColors.$primary,
      paddingHorizontal: 24,

      '@hover': {
        backgroundColor: themeColors.$primary + 60,
      },

      '@disable': {
        color: themeColors.$shadow,
        backgroundColor: themeColors.$shadow + 50,
      },

      '@focus': {
        backgroundColor: themeColors.$primary + 70,
      },

      '@press': {
        backgroundColor: themeColors.$primary + 70,
      },
    },
    outlined: {
      backgroundColor: 'transparent',
      color: themeColors.$primary,
      borderWidth: 1,
      borderColor: themeColors.$shadow,
      paddingHorizontal: 24,

      '@hover': {
        backgroundColor: themeColors.$primary + 40,
      },

      '@disable': {
        color: themeColors.$shadow,
        backgroundColor: themeColors.$shadow + 10,
        borderColor: themeColors.$shadow + 50,
      },

      '@focus': {
        backgroundColor: themeColors.$primary + 40,
        borderColor: themeColors.$primary,
      },

      '@press': {
        backgroundColor: themeColors.$primary + 40,
      },
    },
    text: {
      backgroundColor: 'transparent',
      color: themeColors.$primary,
      paddingHorizontal: 12,

      '@hover': {
        backgroundColor: themeColors.$primary + 40,
      },

      '@disable': {
        color: themeColors.$shadow,
      },

      '@focus': {
        backgroundColor: themeColors.$primary + 45,
      },

      '@press': {
        backgroundColor: themeColors.$primary + 45,
      },
    },
  } as const;

  return buttonTheme;
};

/**
 * The return type of the getButtonStyles function
 */
export type GetButtonStylesReturnType = ButtonContainerStyle;

/**
 * Get the button styles based on the type of the component
 *
 * @param {ButtonProps} props - props of the button component
 */
export const getButtonStyles = (props: ButtonProps): GetButtonStylesReturnType => {
  let styles: GetButtonStylesReturnType;

  switch (props.category) {
    case 'regular': {
      styles = getRegularButtonStyles(props);
      break;
    }

    default: {
      styles = getRegularButtonStyles(props);
      break;
    }
  }

  const resetStyles = {
    margin: 0,
    padding: 0,
  };

  const customStyle = props.containerStyle;

  return {
    ...styles,
    ...resetStyles,
    ...customStyle,
  };
};

/**
 * Get the styles when button is disabled
 *
 * @param props - props of the button component
 */
export const getDisabledButtonStyles = (props: ButtonProps): GetButtonStylesReturnType => {
  const buttonTheme = getButtonTheme();

  const theme = buttonTheme[props.type];

  if (props.disabled) return { ...theme['@disable'], ...props.containerStyle?.['@disable'] };

  return {};
};

/**
 * Get the styles for the regular button
 *
 * @param props - props of the button component
 */
const getRegularButtonStyles = (props: ButtonProps): GetButtonStylesReturnType => {
  const buttonTheme = getButtonTheme();

  const theme = buttonTheme[props.type];
  const commonTheme = buttonTheme.common;

  let styles: GetButtonStylesReturnType;

  styles = {
    backgroundColor: theme.backgroundColor,
    color: theme.color,
    paddingHorizontal: theme.paddingHorizontal,
    ...commonTheme,
    '@hover': { ...theme['@hover'], ...props.containerStyle?.['@hover'] },
    '@focus': { ...theme['@focus'], ...props.containerStyle?.['@focus'] },
    '@press': { ...theme['@press'], ...props.containerStyle?.['@press'] },
  };

  switch (props.type) {
    case 'elevated': {
      {
        const elevatedTheme = getButtonTheme().elevated;

        styles = {
          ...styles,
          elevation: elevatedTheme.elevation,
          shadowRadius: elevatedTheme.shadowRadius,
          shadowOpacity: elevatedTheme.shadowOpacity,
          shadowColor: elevatedTheme.shadowColor,
          shadowOffset: elevatedTheme.shadowOffset,
        };
      }
      break;
    }

    case 'outlined': {
      {
        const outlinedTheme = getButtonTheme().outlined;

        styles = {
          ...styles,
          borderWidth: outlinedTheme.borderWidth,
          borderColor: outlinedTheme.borderColor,
        };
      }
      break;
    }
  }

  const disabledStyles = getDisabledButtonStyles(props);

  return { ...styles, ...disabledStyles };
};
