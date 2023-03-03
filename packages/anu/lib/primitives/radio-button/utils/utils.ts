import { getColorInRGBA } from 'common/utils';
import { getTheme } from 'config/dripsy';
import { GetButtonStylesReturnType } from 'lib/primitives/button/utils';

import { RadioButtonProps } from './../types/radio-button';

/**
 * This is a central store for all the radio button style
 *
 * @returns radio button theme
 */
const getRadioButtonTheme = () => {
  const themeColors = getTheme().colors;

  const radioButtonTheme = {
    common: {
      justifyContent: 'center',
      alignItems: 'center',
      height: 20,
      width: 20,
      borderRadius: 100,
      borderWidth: 2,
      transitionProperty: 'all',
      transitionTimingFunction: 'ease',
      transitionDuration: '.2s',
    },
    on: {
      borderColor: themeColors.$primary,

      '@disable': {
        borderColor: getColorInRGBA(themeColors.$onSurface, 38),
      },
    },
    off: {
      borderColor: themeColors.$onSurfaceVariant,

      '@disable': {
        borderColor: getColorInRGBA(themeColors.$onSurface, 38),
      },
    },
  };

  const radioButtonPressableLayerTheme = {
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
  };

  const selectedIconTheme = {
    common: {
      height: 12,
      width: 12,
      borderRadius: 100,
    },
  };

  return { radioButtonTheme, radioButtonPressableLayerTheme, selectedIconTheme };
};

/**
 * Get the styles for the radio button
 *
 * @param props - props of the button component
 * @param selected - state of the radio button
 */
export const getRadioButtonStyles = (props: RadioButtonProps, selected: boolean) => {
  const { radioButtonTheme, radioButtonPressableLayerTheme, selectedIconTheme } = getRadioButtonTheme();

  const key: keyof typeof radioButtonTheme = selected ? 'on' : 'off';

  const commonTheme = radioButtonTheme.common;

  const pressableLayerTheme = radioButtonPressableLayerTheme[key];
  const commonPressableLayerTheme = radioButtonPressableLayerTheme.common;

  const {
    '@disable': propsDisableStyles,
    '@hover': propsHoverStyles,
    '@focus': propsFocusStyles,
    '@press': propsPressStyles,
    ...propsOtherStyles
  } = props?.style ?? {};

  const { '@disable': disableStyles, ...otherStyles } = radioButtonTheme[key];

  let styles;
  let selectedIconStyles;

  selectedIconStyles = {
    ...selectedIconTheme.common,
    backgroundColor: propsOtherStyles.backgroundColor ?? propsOtherStyles.color ?? otherStyles.borderColor,
  };

  const pressableLayerStyles: GetButtonStylesReturnType = {
    ...commonPressableLayerTheme,
    ...radioButtonPressableLayerTheme[key],
    '@hover': { ...pressableLayerTheme['@hover'], ...propsHoverStyles },
    '@focus': { ...pressableLayerTheme['@focus'], ...propsFocusStyles },
    '@press': { ...pressableLayerTheme['@press'], ...propsPressStyles },
  };

  styles = {
    ...commonTheme,
    ...otherStyles,
    ...(propsOtherStyles as Record<string, never>),
  };

  if (props.color && selected) {
    styles = {
      ...styles,
      borderColor: props.color,
    };

    selectedIconStyles = {
      ...selectedIconStyles,
      backgroundColor: props.color,
    };
  }

  const disabledStyles = props.disabled ? { ...disableStyles, ...propsDisableStyles } : {};
  const disabledSelectedIconStyles = props.disabled
    ? {
        backgroundColor: propsDisableStyles?.backgroundColor ?? propsDisableStyles?.color ?? disableStyles.borderColor,
      }
    : {};

  return {
    radioStyles: { ...styles, ...disabledStyles },
    pressableStyles: pressableLayerStyles,
    selectedIconStyles: { ...selectedIconStyles, ...disabledSelectedIconStyles },
  };
};

export const isSelected = (arguments_: RadioButtonProps) => {
  // check whether radio belongs to group, if not initialize with false
  return arguments_.selected
    ? arguments_.selected === arguments_.id || arguments_.selected === arguments_.label
    : false;
};

/**
 * To get the alignment of the label
 *
 * @param labelPlacement - the placement position of the label
 */
export const getLabelAlignment = (labelPlacement?: 'left' | 'right' | 'top' | 'bottom') => {
  switch (labelPlacement) {
    case 'left': {
      return { flexDirection: 'row-reverse', justify: 'center', align: 'center' } as const;
    }
    case 'right': {
      return { flexDirection: 'row', justify: 'center', align: 'center' } as const;
    }
    case 'top': {
      return {
        flexDirection: 'column-reverse',
        justify: 'center',
        align: 'center',
      } as const;
    }
    case 'bottom': {
      return { flexDirection: 'column', justify: 'center', align: 'center' } as const;
    }
    default: {
      return { flexDirection: 'row', justify: 'center', align: 'center' } as const;
    }
  }
};
