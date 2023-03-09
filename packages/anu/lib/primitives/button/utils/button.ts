import { getColorInRGBA } from 'common/utils';
import { getTheme } from 'config/dripsy/theme';

import { ButtonContainerStyle, ButtonProps, RegularButtonProps } from '../types';

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
      color: 'inherit',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 100,
      transitionProperty: 'all',
      transitionTimingFunction: 'ease',
      transitionDuration: '.2s',
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
        backgroundColor: getColorInRGBA(themeColors.$onPrimary, 12),
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
 * @param {ButtonProps} props - props of the button component
 */
export const getButtonStyles = (props: ButtonProps) => {
  const { styles: regularStyles, stateLayerStyles } = getRegularButtonStyles(props);
  const styles = regularStyles;
  const layerStyles = stateLayerStyles;

  const resetStyles = {
    margin: 0,
    padding: 0,
  };

  const customStyle = props.containerStyle;

  return {
    styles: {
      ...styles,
      ...resetStyles,
      ...customStyle,
    },
    stateLayerStyles: layerStyles,
  };
};

/**
 * Get the styles when button is disabled
 *
 * @param props - props of the button component
 */
export const getDisabledButtonStyles = (props: ButtonProps): GetButtonStylesReturnType => {
  const { buttonTheme } = getButtonTheme();

  const theme = buttonTheme[props.type];

  if (props.disabled) return { ...theme['@disable'], ...props.containerStyle?.['@disable'] };

  return {};
};

/**
 * Get the styles for the regular button
 *
 * @param props - props of the button component
 */
const getRegularButtonStyles = (props: ButtonProps) => {
  const { buttonTheme, stateLayerTheme } = getButtonTheme();
  const { colors } = getTheme();

  const theme = buttonTheme[props.type];
  const commonTheme = buttonTheme.common;

  const layerTheme = stateLayerTheme[props.type];
  const commonLayerTheme = stateLayerTheme.common;

  let styles;

  styles = {
    backgroundColor: theme.backgroundColor,
    color: theme.color,
    ...commonTheme,
  };

  let stateLayerStyles: GetButtonStylesReturnType = {
    ...commonLayerTheme,
    ...layerTheme,
    '@hover': { ...layerTheme['@hover'], ...props.containerStyle?.['@hover'] },
    '@focus': { ...layerTheme['@focus'], ...props.containerStyle?.['@focus'] },
    '@press': { ...layerTheme['@press'], ...props.containerStyle?.['@press'] },
  };

  switch (props.type) {
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

  const disabledStyles = getDisabledButtonStyles(props);

  if (props.disabled && props.type === 'outlined')
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
  labelStyles = { color: 'inherit', paddingHorizontal: 8, cursor: 'pointer' };

  if (props.icon && props.type === 'text') {
    labelStyles = { ...labelStyles, paddingLeft: 8, paddingRight: 4 };
  }

  return labelStyles;
};
