import { getColorInRGBA } from 'common/utils';
import { DripsyFinalTheme } from 'dripsy';
import { GetButtonStylesReturnType } from 'lib/primitives/button/utils';

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
      height: 40,
      width: 120,
      marginVertical: 4,
      borderLeftWidth: 1,
      borderTopWidth: 1,
      borderBottomWidth: 1,
      transitionProperty: 'all',
      transitionTimingFunction: 'ease',
      transitionDuration: '.2s',
      borderColor: themeColors.$outline,
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
      justifyContent: 'center',
      alignItems: 'center',
      height: 40,
      width: 120,
      paddingHorizontal: 12,
      transitionProperty: 'all',
      transitionTimingFunction: 'ease',
      transitionDuration: '.2s',
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
      size: 18,
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

  const segmentedFirstButtonTheme = {
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  };

  const segmentedLastButtonTheme = {
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    borderRightWidth: 1,
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

  const stateLayerStyles: GetButtonStylesReturnType = {
    ...commonStateLayerTheme,
    ...segmentedButtonStateLayerTheme[key],
    '@hover': { ...stateLayerTheme['@hover'], ...propsHoverStyles },
    '@focus': { ...stateLayerTheme['@focus'], ...propsFocusStyles },
    '@press': { ...stateLayerTheme['@press'], ...propsPressStyles },
  };

  const styles = {
    ...commonTheme,
    ...otherStyles,
    ...(propsOtherStyles as Record<string, never>),
  };

  const iconStyles = {
    ...commonIconTheme,
    ...otherIconStyles,
  };
  const labelStyles = {
    ...otherLabelStyles,
  };

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
    labelStyles: { ...labelStyles, ...disabledLabelStyles, ...(props.titleStyle as Record<string, never>) },
    segmentedFirstButtonTheme: { ...segmentedFirstButtonTheme, ...disabledFirstButtonStyle },
    segmentedLastButtonTheme: { ...segmentedLastButtonTheme, ...disabledLastButtonStyle },
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
