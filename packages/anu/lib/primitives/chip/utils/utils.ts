/* eslint-disable unicorn/no-nested-ternary */
import { getColorInRGBA, getResetMarginStyles, getResetPaddingStyles } from 'anu/common/utils';
import { DripsyFinalTheme } from 'dripsy';
import { Platform } from 'react-native';

import { ChipContainerStyle, ChipProps } from '../types';

/**
 * This is a central store for all the default chip styles
 *
 * @param {DripsyFinalTheme} theme - theme of the library
 */
const getChipTheme = (theme: DripsyFinalTheme) => {
  const themeColors = theme.colors;

  const chipTheme = {
    common: {
      minHeight: 32,
      borderRadius: 8,
      backgroundColor: 'transparent',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
    } as const,
    assist: {
      backgroundColor: 'transparent',
      color: themeColors.$onSurface,

      '@disable': {
        color: getColorInRGBA(themeColors.$onSurface, 38),
      },
    } as const,
    assistElevated: {
      backgroundColor: themeColors.$surface,
      shadowColor: themeColors.$shadow,
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 1,
      color: themeColors.$onSurface,
      '@disable': {
        backgroundColor: getColorInRGBA(themeColors.$onSurface, 12),
        color: getColorInRGBA(themeColors.$onSurface, 38),
        shadowOffset: {
          width: 0,
          height: 0,
        },
        shadowOpacity: 0,
        shadowRadius: 0,
        elevation: 0,
      },
    } as const,
    filter: {
      color: themeColors.$onSurfaceVariant,
      '@disable': {
        color: getColorInRGBA(themeColors.$onSurface, 38),
      },
    } as const,
    filterSelected: {
      backgroundColor: themeColors.$secondaryContainer,
      color: themeColors.$onSecondaryContainer,
      '@disable': {
        backgroundColor: getColorInRGBA(themeColors.$onSurface, 12),
        color: getColorInRGBA(themeColors.$onSurface, 38),
      },
    } as const,
    filterElevated: {
      backgroundColor: themeColors.$surface,
      color: themeColors.$onSurfaceVariant,

      shadowColor: themeColors.$shadow,
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 1,
      '@disable': {
        backgroundColor: getColorInRGBA(themeColors.$onSurface, 12),
        color: getColorInRGBA(themeColors.$onSurface, 38),
        shadowOffset: {
          width: 0,
          height: 0,
        },
        shadowOpacity: 0,
        shadowRadius: 0,
        elevation: 0,
      },
    } as const,
    filterElevatedSelected: {
      backgroundColor: themeColors.$secondaryContainer,
      color: themeColors.$onSecondaryContainer,
      shadowColor: themeColors.$shadow,
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 1,
      '@disable': {
        backgroundColor: getColorInRGBA(themeColors.$onSurface, 12),
        color: getColorInRGBA(themeColors.$onSurface, 38),
        shadowOffset: {
          width: 0,
          height: 0,
        },
        shadowOpacity: 0,
        shadowRadius: 0,
        elevation: 0,
      },
    } as const,
    input: {
      backgroundColor: themeColors.$surface,
      color: themeColors.$onSurfaceVariant,
      '@disable': {
        color: getColorInRGBA(themeColors.$onSurface, 38),
      },
    } as const,
    inputSelected: {
      backgroundColor: themeColors.$secondaryContainer,
      color: themeColors.$onSecondaryContainer,
      '@disable': {
        color: getColorInRGBA(themeColors.$onSurface, 38),
        backgroundColor: getColorInRGBA(themeColors.$onSurface, 12),
      },
    } as const,
    suggestion: {
      color: themeColors.$onSurfaceVariant,
      '@disable': {
        color: getColorInRGBA(themeColors.$onSurface, 38),
      },
    } as const,
    suggestionSelected: {
      backgroundColor: themeColors.$secondaryContainer,
      color: themeColors.$onSecondaryContainer,
      '@disable': {
        color: getColorInRGBA(themeColors.$onSurface, 38),
        backgroundColor: getColorInRGBA(themeColors.$onSurface, 12),
      },
    } as const,
    suggestionElevated: {
      backgroundColor: themeColors.$surface,
      shadowColor: themeColors.$shadow,
      color: themeColors.$onSurfaceVariant,
      shadowOffset: {
        width: 0,
        height: 3,
      },

      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 1,
      '@disable': {
        backgroundColor: getColorInRGBA(themeColors.$onSurface, 12),
        color: getColorInRGBA(themeColors.$onSurface, 38),
        shadowOffset: {
          width: 0,
          height: 0,
        },
        shadowOpacity: 0,
        shadowRadius: 0,
        elevation: 0,
      },
    } as const,
    suggestionElevatedSelected: {
      backgroundColor: themeColors.$secondaryContainer,
      shadowColor: themeColors.$shadow,
      color: themeColors.$onSecondaryContainer,
      shadowOffset: {
        width: 0,
        height: 3,
      },

      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 1,
      '@disable': {
        backgroundColor: getColorInRGBA(themeColors.$onSurface, 12),
        color: getColorInRGBA(themeColors.$onSurface, 38),
        shadowOffset: {
          width: 0,
          height: 0,
        },
        shadowOpacity: 0,
        shadowRadius: 0,
        elevation: 0,
      },
    } as const,
  };

  const stateLayerTheme = {
    common: {
      minHeight: 32,
      borderRadius: 8,
      flex: 1,
      backgroundColor: 'transparent',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    } as const,
    assistElevated: {
      color: themeColors.$onSurface,
      '@hover': {
        backgroundColor: getColorInRGBA(themeColors.$onSurface, 8),
        shadowColor: themeColors.$shadow,
        shadowOffset: {
          width: 0,
          height: 6,
        },

        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 2,
      },
      '@focus': {
        backgroundColor: getColorInRGBA(themeColors.$onSurface, 12),
      },
      '@press': {
        backgroundColor: getColorInRGBA(themeColors.$onSurface, 12),
      },
    } as const,
    assist: {
      borderWidth: 1,
      borderColor: themeColors.$outline,
      color: themeColors.$onSurface,
      '@disable': {
        borderColor: getColorInRGBA(themeColors.$onSurface, 12),
      },
      '@hover': {
        backgroundColor: getColorInRGBA(themeColors.$onSurface, 8),
      },
      '@focus': {
        borderColor: themeColors.$onSurface,
        backgroundColor: getColorInRGBA(themeColors.$onSurface, 12),
      },
      '@press': {
        backgroundColor: getColorInRGBA(themeColors.$onSurface, 12),
      },
    } as const,
    filter: {
      borderWidth: 1,
      borderColor: themeColors.$outline,
      color: themeColors.$onSurfaceVariant,
      '@disable': {
        borderColor: getColorInRGBA(themeColors.$onSurface, 12),
      },
      '@hover': {
        backgroundColor: getColorInRGBA(themeColors.$onSurfaceVariant, 8),
      },
      '@focus': {
        borderColor: themeColors.$onSurfaceVariant,
        backgroundColor: getColorInRGBA(themeColors.$onSurfaceVariant, 12),
      },
      '@press': {
        backgroundColor: getColorInRGBA(themeColors.$onSurfaceVariant, 12),
      },
    } as const,
    filterSelected: {
      color: themeColors.$onSecondaryContainer,
      '@hover': {
        backgroundColor: getColorInRGBA(themeColors.$onSecondaryContainer, 8),
        shadowColor: themeColors.$shadow,
        shadowOffset: {
          width: 0,
          height: 3,
        },

        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 2,
      },
      '@focus': {
        backgroundColor: getColorInRGBA(themeColors.$onSecondaryContainer, 12),
      },
      '@press': {
        backgroundColor: getColorInRGBA(themeColors.$onSecondaryContainer, 12),
      },
    } as const,
    filterElevated: {
      color: themeColors.$onSurfaceVariant,
      '@hover': {
        backgroundColor: getColorInRGBA(themeColors.$onSurfaceVariant, 8),
        shadowColor: themeColors.$shadow,
        shadowOffset: {
          width: 0,
          height: 6,
        },

        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 2,
      },
      '@focus': {
        backgroundColor: getColorInRGBA(themeColors.$onSurfaceVariant, 12),
      },
      '@press': {
        backgroundColor: getColorInRGBA(themeColors.$onSurfaceVariant, 12),
      },
    } as const,
    filterElevatedSelected: {
      color: themeColors.$onSecondaryContainer,
      '@hover': {
        backgroundColor: getColorInRGBA(themeColors.$onSecondaryContainer, 8),
        shadowColor: themeColors.$shadow,
        shadowOffset: {
          width: 0,
          height: 6,
        },

        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 2,
      },
      '@focus': {
        backgroundColor: getColorInRGBA(themeColors.$onSecondaryContainer, 12),
      },
      '@press': {
        backgroundColor: getColorInRGBA(themeColors.$onSecondaryContainer, 12),
      },
    } as const,
    input: {
      borderWidth: 1,
      borderColor: themeColors.$outline,
      color: themeColors.$onSurfaceVariant,
      '@disable': {
        borderColor: getColorInRGBA(themeColors.$onSurface, 12),
      },
      '@hover': {
        backgroundColor: getColorInRGBA(themeColors.$onSurfaceVariant, 8),
      },
      '@focus': {
        borderColor: themeColors.$onSurfaceVariant,
        backgroundColor: getColorInRGBA(themeColors.$onSurfaceVariant, 12),
      },
      '@press': {
        backgroundColor: getColorInRGBA(themeColors.$onSurfaceVariant, 12),
      },
    } as const,
    inputSelected: {
      color: themeColors.$onSecondaryContainer,
      '@hover': {
        backgroundColor: getColorInRGBA(themeColors.$onSecondaryContainer, 8),
        shadowColor: themeColors.$shadow,
        shadowOffset: {
          width: 0,
          height: 3,
        },

        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 2,
      },
      '@focus': {
        backgroundColor: getColorInRGBA(themeColors.$onSecondaryContainer, 12),
      },
      '@press': {
        backgroundColor: getColorInRGBA(themeColors.$onSecondaryContainer, 12),
      },
    } as const,
    suggestion: {
      borderWidth: 1,
      borderColor: themeColors.$outline,
      color: themeColors.$onSurfaceVariant,
      '@disable': {
        borderColor: getColorInRGBA(themeColors.$onSurface, 12),
      },
      '@hover': {
        backgroundColor: getColorInRGBA(themeColors.$onSurfaceVariant, 8),
      },
      '@focus': {
        backgroundColor: getColorInRGBA(themeColors.$onSurfaceVariant, 12),
        borderColor: themeColors.$onSurfaceVariant,
      },
      '@press': {
        backgroundColor: getColorInRGBA(themeColors.$onSurfaceVariant, 12),
      },
    } as const,
    suggestionSelected: {
      color: themeColors.$onSecondaryContainer,
      '@hover': {
        backgroundColor: getColorInRGBA(themeColors.$onSecondaryContainer, 8),
        shadowColor: themeColors.$shadow,
        shadowOffset: {
          width: 0,
          height: 3,
        },

        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 2,
      },
      '@focus': {
        backgroundColor: getColorInRGBA(themeColors.$onSecondaryContainer, 12),
      },
      '@press': {
        backgroundColor: getColorInRGBA(themeColors.$onSecondaryContainer, 12),
      },
    } as const,
    suggestionElevated: {
      color: themeColors.$onSurfaceVariant,
      '@hover': {
        backgroundColor: getColorInRGBA(themeColors.$onSurfaceVariant, 8),
        shadowColor: themeColors.$shadow,
        shadowOffset: {
          width: 0,
          height: 6,
        },

        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 2,
      },
      '@focus': {
        backgroundColor: getColorInRGBA(themeColors.$onSurfaceVariant, 12),
      },
      '@press': {
        backgroundColor: getColorInRGBA(themeColors.$onSurfaceVariant, 12),
      },
    } as const,
    suggestionElevatedSelected: {
      color: themeColors.$onSecondaryContainer,
      '@hover': {
        backgroundColor: getColorInRGBA(themeColors.$onSecondaryContainer, 8),
        shadowColor: themeColors.$shadow,
        shadowOffset: {
          width: 0,
          height: 6,
        },

        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 2,
      },
      '@focus': {
        backgroundColor: getColorInRGBA(themeColors.$onSecondaryContainer, 12),
      },
      '@press': {
        backgroundColor: getColorInRGBA(themeColors.$onSecondaryContainer, 12),
      },
    } as const,
  };

  const iconStyleTheme = {
    common: {
      size: 18,
    } as const,
    assist: {
      color: themeColors.$primary,
      '@disable': {
        color: getColorInRGBA(themeColors.$onSurface, 38),
      },
    } as const,
    assistElevated: {
      color: themeColors.$primary,
      '@disable': {
        color: getColorInRGBA(themeColors.$onSurface, 38),
      },
    } as const,
    filter: {
      color: themeColors.$onSurfaceVariant,
      '@disable': {
        color: getColorInRGBA(themeColors.$onSurface, 38),
      },
    } as const,
    filterSelected: {
      color: themeColors.$onSecondaryContainer,

      '@disable': {
        color: getColorInRGBA(themeColors.$onSurface, 38),
      },
    } as const,
    filterElevated: {
      color: themeColors.$onSurfaceVariant,

      '@disable': {
        color: getColorInRGBA(themeColors.$onSurface, 38),
      },
    } as const,
    filterElevatedSelected: {
      color: themeColors.$onSecondaryContainer,

      '@disable': {
        color: getColorInRGBA(themeColors.$onSurface, 38),
      },
    } as const,
    input: {
      color: themeColors.$onSurfaceVariant,
      '@disable': {
        color: getColorInRGBA(themeColors.$onSurface, 38),
      },
    } as const,
    inputSelected: {
      color: themeColors.$onSecondaryContainer,
      '@disable': {
        color: getColorInRGBA(themeColors.$onSurface, 38),
      },
    } as const,
    suggestion: {
      '@disable': {},
    },
    suggestionSelected: {
      '@disable': {},
    },
    suggestionElevated: {
      '@disable': {},
    },
    suggestionElevatedSelected: {
      '@disable': {},
    },
  };

  return { chipTheme, stateLayerTheme, iconStyleTheme };
};

/**
 * The return type of the getChipStyles function
 */
export type GetChipStylesReturnType = ChipContainerStyle;

/**
 * Get the styles for the chip
 *
 * @param props - props of the chip component
 * @param {DripsyFinalTheme} theme - theme of the library
 */
export const getStyles = (props: ChipProps, theme: DripsyFinalTheme) => {
  //@ts-expect-error REASON not available for few types of chips
  const { type, elevated, selected, style, disabled } = props;
  const { chipTheme, stateLayerTheme, iconStyleTheme } = getChipTheme(theme);

  let key: keyof typeof chipTheme;

  switch (type) {
    case 'assist': {
      key = elevated ? 'assistElevated' : 'assist';
      break;
    }
    case 'filter': {
      if (elevated) key = selected ? 'filterElevatedSelected' : 'filterElevated';
      else key = selected ? 'filterSelected' : 'filter';

      break;
    }
    case 'input': {
      key = selected ? 'inputSelected' : 'input';
      break;
    }
    case 'suggestion': {
      if (elevated) key = selected ? 'suggestionElevatedSelected' : 'suggestionElevated';
      else key = selected ? 'suggestionSelected' : 'suggestion';
      break;
    }
    default: {
      key = 'assist';
    }
  }

  const commonTheme = chipTheme.common;
  const commonIconTheme = iconStyleTheme.common;

  const commonLayerTheme = stateLayerTheme.common;

  const {
    '@disable': propsDisableStyles,
    '@hover': propsHoverStyles,
    '@focus': propsFocusStyles,
    '@press': propsPressStyles,
    ...propsOtherStyles
  } = style ?? {};

  const { '@disable': disableStyles, ...otherStyles } = chipTheme[key];
  const { '@disable': iconDisableStyles, ...otherIconStyles } = iconStyleTheme[key];

  const { backgroundColor, borderColor, ...propsOtherStylesForStateLayer } = propsOtherStyles;

  let styles;
  let iconStyle;
  let layerStyles;
  // Add all the styles including hover, focus and other states
  styles = {
    ...commonTheme,
    ...otherStyles,
    ...propsOtherStyles,
    ...getResetPaddingStyles(),
    ...(borderColor && (key === 'input' || key === 'filter' || key === 'suggestion' || key === 'assist')
      ? { borderColor: 'transparent', borderWidth: 0 }
      : {}),
  };

  iconStyle = {
    ...commonIconTheme,
    ...otherIconStyles,
  };

  //@ts-expect-error REASON not available for few types of chips
  const { '@disable': layerDisableStyles, ...otherLayerStyles } = stateLayerTheme[key];

  layerStyles = {
    ...commonLayerTheme,
    ...otherLayerStyles,
    ...propsOtherStylesForStateLayer,
    ...getResetMarginStyles(),
    ...getResetPaddingStyles(),
    ...(borderColor && (key === 'input' || key === 'filter' || key === 'suggestion' || key === 'assist')
      ? { borderColor }
      : {}),
    '@hover': { ...otherLayerStyles['@hover'], ...style?.['@hover'] },
    '@focus': { ...otherLayerStyles['@focus'], ...style?.['@focus'] },
    '@press': { ...otherLayerStyles['@press'], ...style?.['@press'] },
  };

  // const disabledStyles = getDisabledChipStyles(props);
  // const elevatedStyles = getElevatedChipStyles(props);
  // const activeStyles = getActiveChipStyles(props);
  // const iconStyles = getIconSpecificChipStyles(props);

  if (disabled) {
    styles = { ...styles, ...disableStyles };
    iconStyle = { ...iconStyle, ...iconDisableStyles };
    layerStyles = { ...layerStyles, ...layerDisableStyles, color: styles.color };
  }

  const {
    padding,
    paddingVertical,
    paddingHorizontal,
    paddingTop,
    paddingBottom,
    paddingLeft,
    paddingRight,
    paddingStart,
    paddingEnd,
  } = propsOtherStyles;
  const innerContainerStyle = {
    padding,
    paddingVertical,
    paddingHorizontal: paddingHorizontal ?? 8,
    paddingTop,
    paddingBottom,
    paddingLeft,
    paddingRight,
    paddingStart,
    paddingEnd,
  };

  const textStyle = {
    color: layerStyles.color,
    fontWeight: '400' as const,
    paddingHorizontal: 8,
    ...(Platform.OS === 'web' ? { cursor: 'pointer' } : {}),
  };

  return {
    styles,
    layerStyles,
    iconStyle,
    textStyle,
    innerContainerStyle,
  };
};
