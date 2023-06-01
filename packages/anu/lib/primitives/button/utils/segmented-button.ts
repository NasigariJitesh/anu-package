import { getColorInRGBA, getResetMarginStyles, getResetPaddingStyles } from 'anu/common/utils';
import { GetButtonStylesReturnType } from 'anu/lib/primitives/button/utils';
import { DripsyFinalTheme } from 'dripsy';

import { SegmentedButtonProps } from '../types/segmented-button';

/**
 * This is a central store for all the segmented button style
 *
 * @param {DripsyFinalTheme} theme - theme of the library
 * @returns segmented button theme
 */
export const getSegmentedButtonTheme = (theme: DripsyFinalTheme) => {
  const themeColors = theme.colors;

  const segmentedButtonTheme = {
    common: {
      justifyContent: 'center' as const,
      alignItems: 'center' as const,
      flexDirection: 'row' as const,
      height: '100%',
      flex: 1,
      borderLeftWidth: 1,
      borderTopWidth: 1,
      borderBottomWidth: 1,
      borderTopColor: themeColors.$outline,
      borderBottomColor: themeColors.$outline,
      borderLeftColor: themeColors.$outline,
    },
    on: {
      backgroundColor: themeColors.$secondaryContainer,

      '@disable': {
        borderTopColor: getColorInRGBA(themeColors.$onSurface, 12),
        borderBottomColor: getColorInRGBA(themeColors.$onSurface, 12),
      },
    },
    off: {
      '@disable': {
        borderTopColor: getColorInRGBA(themeColors.$onSurface, 12),
        borderBottomColor: getColorInRGBA(themeColors.$onSurface, 12),
      },
    },
  };

  const segmentedButtonStateLayerTheme = {
    common: {
      justifyContent: 'center' as const,
      alignItems: 'center' as const,
      flexDirection: 'row' as const,
      height: '100%',
      flex: 1,
      paddingHorizontal: 12,
    },
    on: {
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
    off: {
      backgroundColor: 'transparent',

      '@hover': {
        backgroundColor: getColorInRGBA(themeColors.$onSurface, 8),
      },

      '@focus': {
        backgroundColor: getColorInRGBA(themeColors.$onSurface, 12),
      },

      '@press': {
        backgroundColor: getColorInRGBA(themeColors.$onSurface, 12),
      },
    },
  };

  const segmentedIconTheme = {
    common: {
      paddingRight: 4,
      fontSize: 18,
    },
    on: {
      color: themeColors.$onSecondaryContainer,

      '@disable': {
        color: getColorInRGBA(themeColors.$onSurface, 38),
      },
    },
    off: {
      color: themeColors.$onSurface,
      '@disable': {
        color: getColorInRGBA(themeColors.$onSurface, 38),
      },
    },
  };

  const segmentedLabelTheme = {
    on: {
      flexShrink: 1,
      textAlign: 'center' as const,
      color: themeColors.$onSecondaryContainer,
      '@disable': {
        color: getColorInRGBA(themeColors.$onSurface, 38),
      },
    },
    off: {
      flexShrink: 1,
      textAlign: 'center' as const,
      color: themeColors.$onSurface,
      '@disable': {
        color: getColorInRGBA(themeColors.$onSurface, 38),
      },
    },
  };

  const segmentedFirstButtonTheme = {
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  };

  const segmentedLastButtonTheme = {
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    borderRightWidth: 1,
    borderRightColor: themeColors.$outline,
  };

  return {
    segmentedButtonTheme,
    segmentedButtonStateLayerTheme,
    segmentedIconTheme,
    segmentedLabelTheme,
    segmentedLastButtonTheme,
    segmentedFirstButtonTheme,
  };
};

/**
 * Get the styles for the segmented button
 *
 * @param props - props of the button component
 * @param selected - state of the segmented button
 * @param {DripsyFinalTheme} theme - theme of the library
 */
export const getSegmentedButtonStyles = (props: SegmentedButtonProps, selected: boolean, theme: DripsyFinalTheme) => {
  const {
    segmentedButtonStateLayerTheme,
    segmentedButtonTheme,
    segmentedIconTheme,
    segmentedLabelTheme,
    segmentedFirstButtonTheme,
    segmentedLastButtonTheme,
  } = getSegmentedButtonTheme(theme);

  const themeColors = theme.colors;

  const key: keyof typeof segmentedButtonTheme = selected ? 'on' : 'off';

  const commonTheme = segmentedButtonTheme.common;
  const commonIconTheme = segmentedIconTheme.common;

  const stateLayerTheme = segmentedButtonStateLayerTheme[key];
  const commonStateLayerTheme = segmentedButtonStateLayerTheme.common;

  const {
    '@disable': propsDisableStyles,
    '@hover': propsHoverStyles,
    '@focus': propsFocusStyles,
    '@press': propsPressStyles,
    ...propsOtherStyles
  } = props?.style ?? {};

  const { '@disable': disableStyles, ...otherStyles } = segmentedButtonTheme[key];
  const { '@disable': disableIconStyles, ...otherIconStyles } = segmentedIconTheme[key];
  const { '@disable': disableLabelStyles, ...otherLabelStyles } = segmentedLabelTheme[key];

  const { backgroundColor, borderColor, ...propsOtherStylesForStateLayer } = propsOtherStyles;

  const stateLayerStyles: GetButtonStylesReturnType = {
    ...commonStateLayerTheme,
    ...segmentedButtonStateLayerTheme[key],
    ...propsOtherStylesForStateLayer,
    ...getResetMarginStyles(),
    '@hover': { ...stateLayerTheme['@hover'], ...propsHoverStyles },
    '@focus': { ...stateLayerTheme['@focus'], ...propsFocusStyles },
    '@press': { ...stateLayerTheme['@press'], ...propsPressStyles },
  };

  const styles = {
    ...commonTheme,
    ...otherStyles,
    ...(propsOtherStyles as Record<string, never>),
    ...getResetPaddingStyles(),
  };

  const iconStyles = {
    ...commonIconTheme,
    ...otherIconStyles,
  };
  const labelStyles = {
    ...otherLabelStyles,
  };

  const innerContainerStyles = {
    flex: 1,
    flexDirection: 'row',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  } as const;

  let disabledStyles = {};
  let disabledIconStyles = {};
  let disabledLabelStyles = {};
  let disabledFirstButtonStyle = {};
  let disabledLastButtonStyle = {};

  if (props.disabled) {
    disabledStyles = { ...disableStyles, ...propsDisableStyles };
    disabledIconStyles = { ...disableIconStyles };
    disabledLabelStyles = { ...disableLabelStyles };
    disabledFirstButtonStyle = { borderLeftColor: getColorInRGBA(themeColors.$onSurface, 12) };
    disabledLastButtonStyle = { borderRightColor: getColorInRGBA(themeColors.$onSurface, 12) };
  }

  return {
    buttonStyles: { ...styles, ...disabledStyles },
    layerStyles: stateLayerStyles,
    iconStyles: { ...iconStyles, ...disabledIconStyles },
    labelStyles: { ...labelStyles, ...disabledLabelStyles, ...(props.labelStyle as Record<string, never>) },
    segmentedFirstButtonTheme: { ...segmentedFirstButtonTheme, ...disabledFirstButtonStyle },
    segmentedLastButtonTheme: { ...segmentedLastButtonTheme, ...disabledLastButtonStyle },
    innerContainerStyles,
  };
};

/**
 * Check if the button is selected
 *
 * @param props - segmented button props
 */
export const isSelected = (props: SegmentedButtonProps) => {
  if (typeof props.selected === 'string') return props.selected === props.id;
  else if (Array.isArray(props.selected)) return props.selected.includes(props.id);
  else return false;
};

export const getSegmentedButtonGroupStyles = () => {
  const style = {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    width: 320,
    borderRadius: 20,
  } as const;
  return style;
};
