import { getColorInRGBA } from 'common/utils';
import { getTheme } from 'config/dripsy';

import { ExtendedFABProps } from '../types';

/**
 * To get the colors for the sub components of the Extended FAB based on FABColor prop value
 *
 * @param color - value of the FABColor property
 * @returns colors for the sub components of Extended FAB
 */
const getColors = (color: 'primary' | 'secondary' | 'tertiary' | 'surface') => {
  const themeColors = getTheme().colors;

  switch (color) {
    case 'primary': {
      return {
        containerColor: themeColors.$primaryContainer,
        stateLayerColor: themeColors.$onPrimaryContainer,
        iconColor: themeColors.$onPrimaryContainer,
        labelColor: themeColors.$onPrimaryContainer,
      };
    }
    case 'secondary': {
      return {
        containerColor: themeColors.$secondaryContainer,
        stateLayerColor: themeColors.$onSecondaryContainer,
        iconColor: themeColors.$onSecondaryContainer,
        labelColor: themeColors.$onPrimaryContainer,
      };
    }
    case 'tertiary': {
      return {
        containerColor: themeColors.$tertiaryContainer,
        stateLayerColor: themeColors.$onTertiaryContainer,
        iconColor: themeColors.$onTertiaryContainer,
        labelColor: themeColors.$onPrimaryContainer,
      };
    }
    case 'surface': {
      return {
        containerColor: themeColors.$surface,
        stateLayerColor: themeColors.$primary,
        iconColor: themeColors.$primary,
        labelColor: themeColors.$primary,
      };
    }
  }
};

/**
 * This is a central store for all the extended fab styles
 *
 * @param props - props of the extended extended fab component
 * @returns extended fab theme
 */
const getExtendedFABTheme = (props: ExtendedFABProps) => {
  const themeColors = getTheme().colors;
  const { containerColor, stateLayerColor, iconColor, labelColor } = getColors(props.FABColor);
  const elevation = props.lowered ? 1 : 6;
  const fabTheme = {
    common: {
      justifyContent: 'center' as const,
      alignItems: 'center' as const,
      transitionProperty: 'all',
      transitionDuration: '.2s',
      backgroundColor: containerColor,
      shadowColor: themeColors.$shadow,
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: elevation,
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
      '@hover': {
        backgroundColor: getColorInRGBA(stateLayerColor, 8),
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
      color: labelColor,
    },
  };

  return { fabTheme, fabPressableLayerTheme, fabIconTheme, labelTheme };
};

/**
 * To Get the styles for the Extended FAB
 *
 * @param props - props of the Extended FAB component
 * @returns the styles for the  icon
 */
export const getExtendedFABStyles = (props: ExtendedFABProps) => {
  const { fabTheme, fabPressableLayerTheme, fabIconTheme, labelTheme } = getExtendedFABTheme(props);

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
