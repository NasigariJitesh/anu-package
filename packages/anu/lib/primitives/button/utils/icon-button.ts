import { getColorInRGBA } from 'common/utils';
import { DripsyFinalTheme } from 'dripsy';

import { IconButtonProps } from '../types';
import { GetButtonStylesReturnType } from './button';

/**
 * This is a central store for all the icon button styles
 *
 * @param {DripsyFinalTheme} theme - theme of the library
 * @returns icon button theme
 */
const getIconButtonTheme = (theme: DripsyFinalTheme) => {
  const themeColors = theme.colors;

  const iconButtonTheme = {
    common: {
      height: 40,
      width: 40,
      justifyContent: 'center' as const,
      alignItems: 'center' as const,
      borderRadius: 100,
      transitionProperty: 'all',
      transitionTimingFunction: 'ease',
      transitionDuration: '.2s',
    },
    filled: {
      backgroundColor: themeColors.$primary,

      '@disable': {
        backgroundColor: getColorInRGBA(themeColors.$onSurface, 12),
      },
    },
    filledUnselected: {
      backgroundColor: themeColors.$surfaceVariant,

      '@disable': {
        backgroundColor: getColorInRGBA(themeColors.$onSurface, 12),
      },
    },
    filledSelected: {
      backgroundColor: themeColors.$primary,

      '@disable': {
        backgroundColor: getColorInRGBA(themeColors.$onSurface, 12),
      },
    },

    tonal: {
      backgroundColor: themeColors.$secondaryContainer,

      '@disable': {
        backgroundColor: getColorInRGBA(themeColors.$onSurface, 12),
      },
    },
    tonalUnselected: {
      backgroundColor: themeColors.$surfaceVariant,

      '@disable': {
        backgroundColor: getColorInRGBA(themeColors.$onSurface, 12),
      },
    },
    tonalSelected: {
      backgroundColor: themeColors.$secondaryContainer,

      '@disable': {
        backgroundColor: getColorInRGBA(themeColors.$onSurface, 12),
      },
    },
    outlined: {
      backgroundColor: 'transparent',
      borderWidth: 1,
      borderColor: themeColors.$outline,

      '@disable': {
        backgroundColor: getColorInRGBA(themeColors.$onSurface, 12),
        borderWidth: 0,
      },
    },
    outlinedUnselected: {
      backgroundColor: 'transparent',
      borderWidth: 1,
      borderColor: themeColors.$outline,

      '@disable': {
        backgroundColor: getColorInRGBA(themeColors.$onSurface, 12),
        borderWidth: 0,
      },
    },
    outlinedSelected: {
      backgroundColor: themeColors.$inverseSurface,

      '@disable': {
        backgroundColor: getColorInRGBA(themeColors.$onSurface, 12),
      },
    },

    standard: {
      backgroundColor: 'transparent',

      '@disable': {
        backgroundColor: 'transparent',
      },
    },
    standardUnselected: {
      backgroundColor: 'transparent',

      '@disable': {
        backgroundColor: 'transparent',
      },
    },
    standardSelected: {
      backgroundColor: 'transparent',

      '@disable': {
        backgroundColor: 'transparent',
      },
    },
  };

  const iconButtonPressableLayerTheme = {
    common: {
      height: 40,
      width: 40,
      padding: '8px',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 100,
      transitionProperty: 'all',
      transitionTimingFunction: 'ease',
      transitionDuration: '.2s',
    },
    filled: {
      backgroundColor: 'transparent',

      '@hover': {
        backgroundColor: getColorInRGBA(themeColors.$onPrimary, 8),
      },

      '@focus': {
        backgroundColor: getColorInRGBA(themeColors.$onPrimary, 12),
      },

      '@press': {
        backgroundColor: getColorInRGBA(themeColors.$onPrimary, 12),
      },
    },
    filledUnselected: {
      backgroundColor: 'transparent',

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
    filledSelected: {
      backgroundColor: 'transparent',

      '@hover': {
        backgroundColor: getColorInRGBA(themeColors.$onPrimary, 8),
      },

      '@focus': {
        backgroundColor: getColorInRGBA(themeColors.$onPrimary, 12),
      },

      '@press': {
        backgroundColor: getColorInRGBA(themeColors.$onPrimary, 12),
      },
    },

    tonal: {
      backgroundColor: 'transparent',

      '@hover': {
        backgroundColor: getColorInRGBA(themeColors.$onSecondaryContainer, 8),
      },

      '@focus': {
        backgroundColor: getColorInRGBA(themeColors.$onSecondaryContainer, 12),
      },

      '@press': {
        backgroundColor: getColorInRGBA(themeColors.$onSecondaryContainer, 12),
      },
    },
    tonalUnselected: {
      backgroundColor: 'transparent',

      '@hover': {
        backgroundColor: getColorInRGBA(themeColors.$onSurfaceVariant, 8),
      },

      '@focus': {
        backgroundColor: getColorInRGBA(themeColors.$onSurfaceVariant, 12),
      },

      '@press': {
        backgroundColor: getColorInRGBA(themeColors.$onSurfaceVariant, 12),
      },
    },
    tonalSelected: {
      backgroundColor: 'transparent',
      color: themeColors.$primary,

      '@hover': {
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

      '@hover': {
        backgroundColor: getColorInRGBA(themeColors.$onSurfaceVariant, 8),
      },

      '@focus': {
        backgroundColor: getColorInRGBA(themeColors.$onSurfaceVariant, 12),
      },

      '@press': {
        backgroundColor: getColorInRGBA(themeColors.$onSurface, 12),
      },
    },
    outlinedUnselected: {
      backgroundColor: 'transparent',

      '@hover': {
        backgroundColor: getColorInRGBA(themeColors.$onSurfaceVariant, 8),
      },

      '@focus': {
        backgroundColor: getColorInRGBA(themeColors.$onSurfaceVariant, 12),
      },

      '@press': {
        backgroundColor: getColorInRGBA(themeColors.$onSurface, 12),
      },
    },
    outlinedSelected: {
      backgroundColor: 'transparent',

      '@hover': {
        backgroundColor: getColorInRGBA(themeColors.$inverseOnSurface, 8),
      },

      '@focus': {
        backgroundColor: getColorInRGBA(themeColors.$inverseOnSurface, 12),
      },

      '@press': {
        backgroundColor: getColorInRGBA(themeColors.$inverseOnSurface, 12),
      },
    },

    standard: {
      backgroundColor: 'transparent',

      '@hover': {
        backgroundColor: getColorInRGBA(themeColors.$onSurfaceVariant, 8),
      },

      '@focus': {
        backgroundColor: getColorInRGBA(themeColors.$onSurfaceVariant, 12),
      },

      '@press': {
        backgroundColor: getColorInRGBA(themeColors.$onSurfaceVariant, 12),
      },
    },
    standardUnselected: {
      backgroundColor: 'transparent',

      '@hover': {
        backgroundColor: getColorInRGBA(themeColors.$onSurfaceVariant, 8),
      },

      '@focus': {
        backgroundColor: getColorInRGBA(themeColors.$onSurfaceVariant, 12),
      },

      '@press': {
        backgroundColor: getColorInRGBA(themeColors.$onSurfaceVariant, 12),
      },
    },
    standardSelected: {
      backgroundColor: 'transparent',

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
  };

  const iconTheme = {
    common: {
      size: 24,
    },
    filled: {
      color: themeColors.$onPrimary,

      '@disable': {
        color: getColorInRGBA(themeColors.$onSurface, 38),
      },
    },
    filledUnselected: {
      color: themeColors.$primary,

      '@disable': {
        color: getColorInRGBA(themeColors.$onSurface, 38),
      },
    },
    filledSelected: {
      color: themeColors.$onPrimary,

      '@disable': {
        color: getColorInRGBA(themeColors.$onSurface, 38),
      },
    },

    tonal: {
      color: themeColors.$onSecondaryContainer,

      '@disable': {
        color: getColorInRGBA(themeColors.$onSurface, 38),
      },
    },
    tonalUnselected: {
      color: themeColors.$onSurfaceVariant,

      '@disable': {
        color: getColorInRGBA(themeColors.$onSurface, 38),
      },
    },
    tonalSelected: {
      color: themeColors.$onSecondaryContainer,

      '@disable': {
        color: getColorInRGBA(themeColors.$onSurface, 38),
      },
    },
    outlined: {
      color: themeColors.$onSurfaceVariant,

      '@disable': {
        color: getColorInRGBA(themeColors.$onSurface, 38),
      },
    },
    outlinedUnselected: {
      color: themeColors.$onSurfaceVariant,

      '@disable': {
        color: getColorInRGBA(themeColors.$onSurface, 38),
      },
    },
    outlinedSelected: {
      color: themeColors.$inverseOnSurface,

      '@disable': {
        color: getColorInRGBA(themeColors.$onSurface, 38),
      },
    },

    standard: {
      color: themeColors.$onSurfaceVariant,

      '@disable': {
        color: getColorInRGBA(themeColors.$onSurface, 38),
      },
    },
    standardUnselected: {
      color: themeColors.$onSurfaceVariant,

      '@disable': {
        color: getColorInRGBA(themeColors.$onSurface, 38),
      },
    },
    standardSelected: {
      color: themeColors.$primary,

      '@disable': {
        color: getColorInRGBA(themeColors.$onSurface, 38),
      },
    },
  };

  return { iconButtonTheme, iconButtonPressableLayerTheme, iconTheme };
};

/**
 * Get the styles for the icon button
 *
 * @param props - props of the icon button component
 * @param selected - state of the button
 * @param {DripsyFinalTheme} theme - theme of the library
 * @returns the styles for the  icon
 */
export const getIconButtonStyles = (props: IconButtonProps, selected: boolean, theme: DripsyFinalTheme) => {
  const { iconButtonTheme, iconButtonPressableLayerTheme, iconTheme } = getIconButtonTheme(theme);

  const commonTheme = iconButtonTheme.common;

  const pressableLayerTheme = iconButtonPressableLayerTheme[props.type];
  const commonPressableLayerTheme = iconButtonPressableLayerTheme.common;

  const commonIconTheme = iconTheme.common;

  let styles;
  let pressableLayerStyles: GetButtonStylesReturnType;
  let iconStyles;

  const {
    '@disable': propsDisableStyles,
    '@hover': propsHoverStyles,
    '@focus': propsFocusStyles,
    '@press': propsPressStyles,
    ...propsOtherStyles
  } = props?.containerStyle ?? {};

  styles = {
    ...commonTheme,
  };

  pressableLayerStyles = {
    ...commonPressableLayerTheme,
  };

  iconStyles = {
    ...commonIconTheme,
  };

  // This key will be used to select the relevant styles based on type of component and weather or not it is toggled
  let key: keyof typeof iconButtonTheme;

  switch (props.type) {
    case 'outlined': {
      {
        if (props.toggle) key = selected ? 'outlinedSelected' : 'outlinedUnselected';
        else key = 'outlined';
      }
      break;
    }
    case 'filled': {
      {
        if (props.toggle) key = selected ? 'filledSelected' : 'filledUnselected';
        else key = 'filled';
      }
      break;
    }
    case 'tonal': {
      {
        if (props.toggle) key = selected ? 'tonalSelected' : 'tonalUnselected';
        else key = 'tonal';
      }
      break;
    }
    case 'standard': {
      {
        if (props.toggle) key = selected ? 'standardSelected' : 'standardUnselected';
        else key = 'standard';
      }
      break;
    }
  }

  const { '@disable': disableStyles, ...otherStyles } = iconButtonTheme[key];
  const { '@disable': disableIconStyles, ...otherIconStyles } = iconTheme[key];

  pressableLayerStyles = {
    ...pressableLayerStyles,
    ...iconButtonPressableLayerTheme[key],
    '@hover': { ...pressableLayerTheme['@hover'], ...propsHoverStyles },
    '@focus': { ...pressableLayerTheme['@focus'], ...propsFocusStyles },
    '@press': { ...pressableLayerTheme['@press'], ...propsPressStyles },
  };

  styles = {
    ...styles,
    ...otherStyles,
    ...propsOtherStyles,
  };

  iconStyles = {
    ...iconStyles,
    ...otherIconStyles,
  };

  if (propsOtherStyles.color) iconStyles = { ...iconStyles, color: propsOtherStyles.color };

  const disabledStyles = props.disabled ? { ...disableStyles, ...propsDisableStyles } : {};
  const disabledIconStyles = props.disabled
    ? { ...disableIconStyles, color: propsDisableStyles?.color ?? disableIconStyles.color }
    : {};

  return {
    containerStyles: { ...styles, ...disabledStyles },
    pressableStyles: pressableLayerStyles,
    iconStyles: { ...iconStyles, ...disabledIconStyles },
  };
};
