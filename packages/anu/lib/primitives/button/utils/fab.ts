import {
  getColorInRGBA,
  getResetBorderWidthStyles,
  getResetMarginStyles,
  getResetPaddingStyles,
} from 'anu/common/utils';
import { DripsyFinalTheme } from 'dripsy';

import { FABProps } from '../types';

/**
 * To get the colors for the sub components of the FAB based on FABColor prop value
 *
 * @param color - value of the FABColor property
 * @param {DripsyFinalTheme} theme - theme of the library
 * @returns colors for the sub components of FAB
 */
const getColors = (color: 'primary' | 'secondary' | 'tertiary' | 'surface', theme: DripsyFinalTheme) => {
  const themeColors = theme.colors;

  switch (color) {
    case 'primary': {
      return {
        containerColor: themeColors.$primaryContainer,
        stateLayerColor: themeColors.$onPrimaryContainer,
        iconColor: themeColors.$onPrimaryContainer,
      };
    }
    case 'secondary': {
      return {
        containerColor: themeColors.$secondaryContainer,
        stateLayerColor: themeColors.$onSecondaryContainer,
        iconColor: themeColors.$onSecondaryContainer,
      };
    }
    case 'tertiary': {
      return {
        containerColor: themeColors.$tertiaryContainer,
        stateLayerColor: themeColors.$onTertiaryContainer,
        iconColor: themeColors.$onTertiaryContainer,
      };
    }
    case 'surface': {
      return {
        containerColor: themeColors.$surface,
        stateLayerColor: themeColors.$primary,
        iconColor: themeColors.$primary,
      };
    }
  }
};

/**
 * This is a central store for all the fab styles
 *
 * @param props - props of the fab component
 * @param {DripsyFinalTheme} theme - theme of the library
 * @returns fab theme
 */
const getFABTheme = (props: FABProps, theme: DripsyFinalTheme) => {
  const themeColors = theme.colors;
  const { containerColor, stateLayerColor, iconColor } = getColors(props.FABColor ?? 'primary', theme);

  const fabTheme = {
    common: {
      justifyContent: 'center' as const,
      alignItems: 'center' as const,
      backgroundColor: containerColor,
      shadowColor: themeColors.$shadow,
      shadowOffset: {
        width: 0,
        height: props.lowered ? 3 : 6,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: props.lowered ? 1 : 6,
    },
    small: {
      height: 40,
      width: 40,
      borderRadius: 12,
    },
    medium: {
      height: 56,
      width: 56,
      borderRadius: 16,
    },
    large: {
      height: 96,
      width: 96,
      borderRadius: 28,
    },
  };

  const fabPressableLayerTheme = {
    common: {
      justifyContent: 'center' as const,
      alignItems: 'center' as const,
    },
    small: {
      backgroundColor: 'transparent',
      height: 40,
      width: 40,
      borderRadius: 12,
      padding: 2,
      '@hover': {
        backgroundColor: getColorInRGBA(stateLayerColor, 8),
        shadowColor: themeColors.$shadow,
        shadowOffset: {
          width: 0,
          height: props.lowered ? 6 : 9,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: props.lowered ? 3 : 8,
      },

      '@focus': {
        backgroundColor: getColorInRGBA(stateLayerColor, 12),
      },

      '@press': {
        backgroundColor: getColorInRGBA(stateLayerColor, 12),
      },
    },
    medium: {
      height: 56,
      width: 56,
      borderRadius: 16,
      backgroundColor: 'transparent',

      '@hover': {
        backgroundColor: getColorInRGBA(stateLayerColor, 8),
        shadowColor: themeColors.$shadow,
        shadowOffset: {
          width: 0,
          height: props.lowered ? 6 : 9,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: props.lowered ? 3 : 8,
      },

      '@focus': {
        backgroundColor: getColorInRGBA(stateLayerColor, 12),
      },

      '@press': {
        backgroundColor: getColorInRGBA(stateLayerColor, 12),
      },
    },
    large: {
      backgroundColor: 'transparent',
      height: 96,
      width: 96,
      borderRadius: 28,
      padding: 16,

      '@hover': {
        backgroundColor: getColorInRGBA(stateLayerColor, 8),
        shadowColor: themeColors.$shadow,
        shadowOffset: {
          width: 0,
          height: props.lowered ? 6 : 9,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: props.lowered ? 3 : 8,
      },

      '@focus': {
        backgroundColor: getColorInRGBA(stateLayerColor, 12),
      },

      '@press': {
        backgroundColor: getColorInRGBA(stateLayerColor, 12),
      },
    },
  };

  const fabIconTheme = {
    common: {
      color: iconColor,
    },
    small: {
      size: 24,
    },
    medium: {
      size: 24,
    },
    large: {
      size: 36,
    },
  };

  return { fabTheme, fabPressableLayerTheme, fabIconTheme };
};

/**
 * To Get the styles for the FAB
 *
 * @param props - props of the FAB component
 * @param {DripsyFinalTheme} defaultTheme - theme of the library
 * @returns the styles for the  FAB
 */
export const getFABStyles = (props: FABProps, defaultTheme: DripsyFinalTheme) => {
  const { fabTheme, fabPressableLayerTheme, fabIconTheme } = getFABTheme(props, defaultTheme);

  const { size: propSize, style } = props;
  const size = propSize ?? 'medium';

  const theme = fabTheme[size];
  const commonTheme = fabTheme.common;

  const pressableLayerTheme = fabPressableLayerTheme[size];
  const commonPressableLayerTheme = fabPressableLayerTheme.common;

  const iconTheme = fabIconTheme[size];
  const commonIconTheme = fabIconTheme.common;

  const {
    '@disable': propsDisableStyles,
    '@hover': propsHoverStyles,
    '@focus': propsFocusStyles,
    '@press': propsPressStyles,
    ...propsOtherStyles
  } = style ?? {};
  const { backgroundColor, borderColor, ...propsOtherStylesForStateLayer } = propsOtherStyles;

  const styles = {
    ...commonTheme,
    ...theme,
    ...propsOtherStyles,
    ...getResetPaddingStyles(),
  };

  const pressableLayerStyles = {
    ...commonPressableLayerTheme,
    ...pressableLayerTheme,
    ...propsOtherStylesForStateLayer,
    ...getResetMarginStyles(),
    ...getResetBorderWidthStyles(),
    '@hover': { ...pressableLayerTheme['@hover'], ...propsHoverStyles },
    '@focus': { ...pressableLayerTheme['@focus'], ...propsFocusStyles },
    '@press': { ...pressableLayerTheme['@press'], ...propsPressStyles },
  };

  const iconStyles = {
    ...commonIconTheme,
    ...iconTheme,
  };

  return {
    containerStyles: styles,
    pressableStyles: pressableLayerStyles,
    iconStyles,
  };
};
