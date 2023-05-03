import { getColorInRGBA } from 'anu/common/utils';
import { DripsyFinalTheme } from 'dripsy';

import { ExtendedFABProps } from '../types';

/**
 * To get the colors for the sub components of the Extended FAB based on FABColor prop value
 *
 * @param color - value of the FABColor property
 * @param {DripsyFinalTheme} theme - theme of the library
 * @returns colors for the sub components of Extended FAB
 */
const getColors = (color: 'primary' | 'secondary' | 'tertiary' | 'surface', theme: DripsyFinalTheme) => {
  const themeColors = theme.colors;

  switch (color) {
    case 'primary': {
      return {
        containerColor: themeColors.$primaryContainer,
        stateLayerColor: themeColors.$onPrimaryContainer,
      };
    }
    case 'secondary': {
      return {
        containerColor: themeColors.$secondaryContainer,
        stateLayerColor: themeColors.$onSecondaryContainer,
      };
    }
    case 'tertiary': {
      return {
        containerColor: themeColors.$tertiaryContainer,
        stateLayerColor: themeColors.$onTertiaryContainer,
      };
    }
    case 'surface': {
      return {
        containerColor: themeColors.$surface,
        stateLayerColor: themeColors.$primary,
      };
    }
  }
};

/**
 * This is a central store for all the extended fab styles
 *
 * @param props - props of the extended extended fab component
 * @param {DripsyFinalTheme} theme - theme of the library
 * @returns extended fab theme
 */
const getExtendedFABTheme = (props: ExtendedFABProps, theme: DripsyFinalTheme) => {
  const themeColors = theme.colors;
  const { containerColor, stateLayerColor } = getColors(props.FABColor, theme);
  const fabTheme = {
    common: {
      justifyContent: 'center' as const,
      alignItems: 'center' as const,
      transitionProperty: 'all',
      transitionDuration: '.2s',
      backgroundColor: containerColor,
      color: stateLayerColor,
      shadowColor: themeColors.$shadow,
      shadowOffset: {
        width: 0,
        height: props.lowered ? 3 : 6,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: props.lowered ? 1 : 6,
      height: 56,
      minWidth: 80,
      borderRadius: 16,
    },
  };

  const fabPressableLayerTheme = {
    common: {
      flexDirection: 'row' as const,
      justifyContent: 'center' as const,
      alignItems: 'center' as const,
      transitionProperty: 'all',
      transitionDuration: '.2s',
      backgroundColor: 'transparent',
      height: 56,
      minWidth: 80,
      borderRadius: 16,
      padding: 16,
      color: 'inherit',
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
      color: 'inherit',
      marginRight: 8,
      size: 24,
    },
  };

  const labelTheme = {
    common: {
      fontWeight: '500' as const,
      lineHeight: 20,
      fontSize: 14,
      letterSpacing: 0.1,
      color: 'inherit',
      cursor: 'pointer',
    },
  };

  return { fabTheme, fabPressableLayerTheme, fabIconTheme, labelTheme };
};

/**
 * To Get the styles for the Extended FAB
 *
 * @param props - props of the Extended FAB component
 * @param {DripsyFinalTheme} theme - theme of the library
 * @returns the styles for the  icon
 */
export const getExtendedFABStyles = (props: ExtendedFABProps, theme: DripsyFinalTheme) => {
  const { fabTheme, fabPressableLayerTheme, fabIconTheme, labelTheme } = getExtendedFABTheme(props, theme);

  const { containerStyle } = props;

  const commonTheme = fabTheme.common;

  const commonPressableLayerTheme = fabPressableLayerTheme.common;

  const commonIconTheme = fabIconTheme.common;

  const commonLabelTheme = labelTheme.common;

  const {
    '@disable': propsDisableStyles,
    '@hover': propsHoverStyles,
    '@focus': propsFocusStyles,
    '@press': propsPressStyles,
    ...propsOtherStyles
  } = containerStyle ?? {};

  const styles = {
    ...commonTheme,
    ...propsOtherStyles,
  };

  const pressableLayerStyles = {
    ...commonPressableLayerTheme,
    '@hover': { ...commonPressableLayerTheme['@hover'], ...propsHoverStyles },
    '@focus': { ...commonPressableLayerTheme['@focus'], ...propsFocusStyles },
    '@press': { ...commonPressableLayerTheme['@press'], ...propsPressStyles },
  };

  const iconStyles = {
    ...commonIconTheme,
  };

  const labelStyles = {
    ...commonLabelTheme,
  };

  return {
    containerStyles: styles,
    pressableStyles: pressableLayerStyles,
    iconStyles,
    labelStyles,
  };
};
