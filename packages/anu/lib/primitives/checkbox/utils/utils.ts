import { Flex } from 'common/types';
import { getColorInRGBA } from 'common/utils';
import { getTheme } from 'config/dripsy';
import { GetButtonStylesReturnType } from 'lib/primitives/button/utils';
import { ContainerAlign, ContainerJustify } from 'lib/primitives/layout/types/container';

import { CheckboxProps } from '../types/checkbox';

/**
 * This is a central store for all the check box style
 *
 * @returns checkbox theme
 */
const getCheckboxTheme = () => {
  const themeColors = getTheme().colors;

  const checkboxTheme = {
    common: {
      justifyContent: 'center',
      alignItems: 'center',
      height: 18,
      width: 18,
      borderRadius: 2,

      transitionProperty: 'all',
      transitionTimingFunction: 'ease',
      transitionDuration: '.2s',
    },
    on: {
      backgroundColor: themeColors.$primary,

      '@disable': {
        backgroundColor: getColorInRGBA(themeColors.$onSurface, 38),
      },
    },
    off: {
      borderWidth: 2,

      borderColor: themeColors.$onSurface,

      '@disable': {
        borderColor: getColorInRGBA(themeColors.$onSurface, 38),
      },
    },
    errorOn: {
      backgroundColor: themeColors.$error,

      '@disable': {
        backgroundColor: getColorInRGBA(themeColors.$onSurface, 38),
      },
    },
    errorOff: {
      borderWidth: 2,
      borderColor: themeColors.$error,

      '@disable': {
        borderColor: getColorInRGBA(themeColors.$onSurface, 38),
      },
    },
  };

  const errorLayertheme = {
    backgroundColor: 'transparent',

    '@hover': {
      backgroundColor: getColorInRGBA(themeColors.$error, 8),
    },

    '@focus': {
      backgroundColor: getColorInRGBA(themeColors.$error, 12),
    },

    '@press': {
      backgroundColor: getColorInRGBA(themeColors.$error, 12),
    },
  };

  const checkboxStateLayerTheme = {
    common: {
      height: 40,
      width: 40,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 100,
      transitionProperty: 'all',
      transitionTimingFunction: 'ease',
      transitionDuration: '.2s',
    },
    on: {
      backgroundColor: 'transparent',

      '@hover': {
        backgroundColor: getColorInRGBA(themeColors.$primary, 8),
      },

      '@focus': {
        backgroundColor: getColorInRGBA(themeColors.$primary, 12),
      },

      '@press': {
        backgroundColor: getColorInRGBA(themeColors.$onSurface, 12),
      },
    },
    off: {
      backgroundColor: 'transparent',

      '@hover': {
        backgroundColor: getColorInRGBA(themeColors.$onSurface, 8),
      },

      '@focus': {
        backgroundColor: getColorInRGBA(themeColors.$onSurface, 12),
      },

      '@press': {
        backgroundColor: getColorInRGBA(themeColors.$primary, 12),
      },
    },

    errorOn: { ...errorLayertheme },
    errorOff: { ...errorLayertheme },
  };

  const selectedIconTheme = {
    common: {
      size: 18,
      color: themeColors.$onPrimary,
    },

    error: {
      color: themeColors.$onError,
    },

    '@disable': {
      color: themeColors.$surface,
    },
  };

  return { checkboxTheme, checkboxStateLayerTheme, selectedIconTheme };
};

/**
 * Get the styles for the check box
 *
 * @param props - props of the button component
 * @param selected - state of the checkbox
 */
export const getCheckboxStyles = (props: CheckboxProps, selected: boolean) => {
  const { checkboxTheme, checkboxStateLayerTheme, selectedIconTheme } = getCheckboxTheme();
  const { indeterminate, error, style, color, disabled } = props;

  let key: keyof typeof checkboxTheme;

  if (selected || indeterminate) key = error ? 'errorOn' : 'on';
  else key = error ? 'errorOff' : 'off';

  const commonTheme = checkboxTheme.common;
  const commonStateLayerTheme = checkboxStateLayerTheme.common;
  const commonSelectedIconTheme = selectedIconTheme.common;

  const stateLayerTheme = checkboxStateLayerTheme[key];
  const { '@disable': disableStyles, ...otherStyles } = checkboxTheme[key];
  const { '@disable': disableIconStyles, ...otherIconStyles } = selectedIconTheme;

  const {
    '@disable': propsDisableStyles,
    '@hover': propsHoverStyles,
    '@focus': propsFocusStyles,
    '@press': propsPressStyles,
    ...propsOtherStyles
  } = style ?? {};

  let styles;
  let selectedIconStyles;

  selectedIconStyles = {
    ...commonSelectedIconTheme,
  };

  if (error)
    selectedIconStyles = {
      ...selectedIconStyles,
      ...otherIconStyles.error,
    };

  const stateLayerStyles: GetButtonStylesReturnType = {
    ...commonStateLayerTheme,
    ...checkboxStateLayerTheme[key],
    '@hover': { ...stateLayerTheme['@hover'], ...propsHoverStyles },
    '@focus': { ...stateLayerTheme['@focus'], ...propsFocusStyles },
    '@press': { ...stateLayerTheme['@press'], ...propsPressStyles },
  };

  styles = {
    ...commonTheme,
    ...otherStyles,
    ...(propsOtherStyles as Record<string, never>),
  };

  if (color && !error && (selected || indeterminate))
    styles = {
      ...styles,
      backgroundColor: color,
    };

  const disabledStyles = disabled ? { ...disableStyles, ...propsDisableStyles } : {};
  const disabledSelectedIconStyles = disabled ? { ...disableIconStyles } : {};

  return {
    checkboxStyles: { ...styles, ...disabledStyles },
    layerStyles: stateLayerStyles,
    selectedIconStyles: { ...selectedIconStyles, ...disabledSelectedIconStyles },
  };
};

/**
 * To get the alignment of the label
 *
 * @param labelPlacement - the placement position of th label
 */
export const getLabelAlignment = (labelPlacement?: 'left' | 'right' | 'top' | 'bottom') => {
  switch (labelPlacement) {
    case 'left': {
      return { flexDirection: 'row-reverse' as Flex, align: 'center' as ContainerAlign };
    }
    case 'right': {
      return { flexDirection: 'row' as Flex, align: 'center' as ContainerAlign };
    }
    case 'top': {
      return {
        flexDirection: 'column-reverse' as Flex,
        justify: 'center' as ContainerJustify,
      };
    }
    case 'bottom': {
      return { flexDirection: 'column' as Flex, justify: 'center' as ContainerJustify };
    }
    default: {
      return { flexDirection: 'row' as Flex, align: 'center' as ContainerAlign };
    }
  }
};