import { getTheme } from 'config/dripsy/theme';

import { ChipContainerStyle, ChipProps } from '../types';

/**
 * This is a central store for all the default chip styles
 *
 * @returns chip theme
 */
const getChipTheme = () => {
  const themeColors = getTheme().colors;

  const chipTheme = {
    common: {
      minHeight: 32,
      borderRadius: 8,
      transitionTimingFunction: 'ease',
      transitionProperty: 'all',
      transitionDuration: '.2s',
      backgroundColor: 'transparent',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 1,
      borderColor: themeColors.$shadow,
      color: themeColors.$text,
      paddingHorizontal: 16,

      '@disable': {
        color: themeColors.$shadow + 90,
        borderColor: themeColors.$shadow + 90,
      },

      '@elevated': {
        borderWidth: 0,
        shadowColor: themeColors.$primary + 90,
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 1,
      },

      '@hover': {
        backgroundColor: themeColors.$shadow + 30,
      },

      '@focus': {
        backgroundColor: themeColors.$shadow + 40,
      },

      '@press': {
        backgroundColor: themeColors.$shadow + 40,
      },
    },

    assist: {},
    filter: {
      backgroundColor: themeColors.$primary + 50,
      borderWidth: 0,
      color: themeColors.$text,

      '@disable': {
        color: themeColors.$shadow,
        borderColor: themeColors.$shadow + 90,
        backgroundColor: themeColors.$shadow + 50,
        borderWidth: 0,
      },

      '@hover': {
        backgroundColor: themeColors.$primary + 70,
      },

      '@focus': {
        backgroundColor: themeColors.$primary + 80,
      },

      '@press': {
        backgroundColor: themeColors.$primary + 90,
      },
    },
    input: {},
    suggestion: {},
  } as const;

  return chipTheme;
};

/**
 * The return type of the getChipStyles function
 */
export type GetChipStylesReturnType = ChipContainerStyle;

/**
 * Get the chip styles
 *
 * @param {ChipProps} props - props of the chip component
 */
export const getChipStyles = (props: ChipProps): GetChipStylesReturnType => {
  const styles = getStyles(props);

  const resetStyles = {
    margin: 0,
    padding: 0,
  };

  const customStyle = props.style;

  return {
    ...styles,
    ...resetStyles,
    ...customStyle,
  };
};

/**
 * Get the styles when chip is disabled
 *
 * @param props - props of the chip component
 */
export const getDisabledChipStyles = (props: ChipProps): GetChipStylesReturnType => {
  const chipTheme = getChipTheme();

  const commonTheme = chipTheme.common;

  if (props.disabled) {
    if ((props.type === 'suggestion' || props.type === 'filter') && (props.active || props.elevated))
      return {
        ...chipTheme.filter['@disable'],
        ...props.style?.['@disable'],
      };
    // According to the material design v3, the styles for filter, input and assist are the same
    else if (props.type === 'input' && props.active)
      return {
        ...chipTheme.filter['@disable'],
        ...props.style?.['@disable'],
      };
    else if (props.type === 'assist' && props.elevated)
      return {
        ...chipTheme.filter['@disable'],
        ...props.style?.['@disable'],
      };
    else
      return {
        ...commonTheme['@disable'],
        ...props.style?.['@disable'],
      };
  }

  return {};
};

/**
 * Get the styles when chip is elevated
 *
 * @param props - props of the chip component
 */
export const getElevatedChipStyles = (props: ChipProps): GetChipStylesReturnType => {
  const chipTheme = getChipTheme();

  const theme = chipTheme.common;

  let styles: GetChipStylesReturnType = {};

  if (props.type !== 'input' && props.elevated && !props.disabled) {
    styles = {
      ...theme['@elevated'],
      ...props.style?.['@elevated'],
    };
  }

  return styles;
};

/**
 * Get the styles when chip is active
 *
 * @param props - props of the chip component
 */
export const getActiveChipStyles = (props: ChipProps): GetChipStylesReturnType => {
  const chipTheme = getChipTheme();

  const theme = chipTheme.filter;

  // Active is only used for the types other than assist, hence the check.
  if (props.type !== 'assist' && props.active) return theme;

  return {};
};

/**
 * Get the icon styles inside the chip component
 *
 * @param props - chip component props
 */
export const getIconStyles = (props: ChipProps) => {
  const chipTheme = getChipTheme();

  const commonTheme = chipTheme.common;

  if (props.disabled)
    return {
      color: commonTheme['@disable'].color + 50,
      paddingHorizontal: 8,
    };

  return {
    color: commonTheme.color,
    paddingHorizontal: 8,
  };
};

/**
 * Get the styles when there is an icon in the chip (either leading or trailing)
 *
 * The padding on the components change when the icons are used. Hence, this modify's the styling for the container
 *
 * @param props - props of the chip component
 */
export const getIconSpecificChipStyles = (props: ChipProps) => {
  if (props.type === 'suggestion') return {};

  if (props.type === 'input' && props.trailingIcon && props.leadingIcon)
    return {
      paddingHorizontal: 0,
    };

  if (props.leadingIcon) return { paddingHorizontal: 0, paddingRight: 16 };

  if (props.type === 'input' && props.trailingIcon) return { paddingHorizontal: 0, paddingLeft: 16 };

  return {};
};

/**
 * Get the styles for the chip
 *
 * @param props - props of the chip component
 */
const getStyles = (props: ChipProps): GetChipStylesReturnType => {
  const chipTheme = getChipTheme();

  const theme = chipTheme[props.type];
  const commonTheme = chipTheme.common;

  let styles: GetChipStylesReturnType;

  // Add all the styles including hover, focus and other states
  styles = {
    ...commonTheme,
    '@hover': { ...commonTheme['@hover'], ...props.style?.['@hover'] },
    '@focus': { ...commonTheme['@focus'], ...props.style?.['@focus'] },
    '@press': { ...commonTheme['@press'], ...props.style?.['@press'] },
  };

  switch (props.type) {
    case 'filter': {
      {
        const filterTheme = chipTheme.filter;

        if (props.active)
          styles = {
            ...styles,
            ...filterTheme,
          };
      }
      break;
    }

    default: {
      {
        {
          styles = {
            ...styles,
            ...theme,
          };
        }
        break;
      }
    }
  }

  const disabledStyles = getDisabledChipStyles(props);
  const elevatedStyles = getElevatedChipStyles(props);
  const activeStyles = getActiveChipStyles(props);
  const iconStyles = getIconSpecificChipStyles(props);

  return { ...styles, ...activeStyles, ...elevatedStyles, ...disabledStyles, ...iconStyles };
};
