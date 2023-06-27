/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-native/no-color-literals */
import { getColorInRGBA } from 'anu/common/utils';
import { DripsyFinalTheme } from 'dripsy';
import { ViewStyle } from 'react-native';

import { SliderProps } from '../types';

/**
 * The Store for the theme of the slider component
 *
 * @param theme - the current theme of the app
 * @returns theme for the slider component
 */
const getSliderTheme = (theme: DripsyFinalTheme) => {
  const { colors } = theme;

  const activeTrackTheme = {
    common: {
      height: 4,
      backgroundColor: colors.$primary,
      borderRadius: 2,
      marginLeft: 8,
      borderRightWidth: 4,
      borderColor: colors.$surfaceVariant,
    },
    '@disable': {
      backgroundColor: getColorInRGBA(colors.$onSurface, 38),
    },
  };
  const inactiveTrackTheme = {
    common: {
      height: 4,
      backgroundColor: colors.$surfaceVariant,
      borderRadius: 2,
      marginLeft: 8,
    },
    '@disable': {
      backgroundColor: getColorInRGBA(colors.$onSurface, 12),
    },
  };
  const thumbTheme = {
    common: {
      position: 'relative' as const,
      height: 20,
      width: 20,
      backgroundColor: colors.$primary,
      borderRadius: 10,
      shadowColor: colors.$shadow,
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 1,
    },
    '@disable': {
      shadowOffset: {
        width: 0,
        height: 0,
      },
      shadowOpacity: 0,
      shadowRadius: 0,
      elevation: 0,
      backgroundColor: '#979499',
    },
  };
  const stateLayerTheme = {
    common: {
      height: 40,
      width: 40,
      backgroundColor: 'transparent',
      borderRadius: 20,

      alignItems: 'center' as const,
      justifyContent: 'center' as const,
    },
    '@hover': {
      backgroundColor: getColorInRGBA(colors.$primary, 8),
    },
    '@focus': {
      backgroundColor: getColorInRGBA(colors.$primary, 12),
    },
    '@press': {
      backgroundColor: getColorInRGBA(colors.$primary, 12),
    },
  };
  const inactiveTrackMarksTheme = {
    common: {
      size: 4,
      color: getColorInRGBA(colors.$onSurfaceVariant, 38),
    },
    '@disable': {
      color: getColorInRGBA(colors.$onSurface, 38),
    },
  };
  const activeTrackMarksTheme = {
    common: {
      size: 4,
      color: getColorInRGBA(colors.$onPrimary, 38),
    },
    '@disable': {
      color: getColorInRGBA(colors.$onSurface, 38),
    },
  };
  const labelContainerTheme = {
    common: {
      alignItems: 'center' as const,
      justifyContent: 'center' as const,
      width: 34,
      height: 34,
      position: 'absolute' as const,
      bottom: 0,
      left: -16,
      borderTopLeftRadius: 21,
      borderTopRightRadius: 21,
      borderBottomLeftRadius: 21,
      backgroundColor: colors.$primary,
      transform: [{ rotateZ: '45deg' }],
    },
  };
  const labelTheme = {
    common: {
      color: colors.$onPrimary,
      transform: [{ rotateZ: '-45deg' }],
      fontSize: 12,
      height: 16,
    },
  };

  const containerTheme = {
    common: {
      width: '100%',
    },
  };
  return {
    activeTrackTheme,
    inactiveTrackTheme,
    thumbTheme,
    stateLayerTheme,
    inactiveTrackMarksTheme,
    activeTrackMarksTheme,
    labelContainerTheme,
    labelTheme,
    containerTheme,
  };
};

/**
 * To get the styles for the Slider componet
 *
 * @param {SliderProps}props - the properties of the slider component
 * @param {DripsyFinalTheme}theme -  the current theme of the app
 * @param isMaximumSelected
 * @returns styles for the slider component
 */
export const getSliderStyle = (props: SliderProps, theme: DripsyFinalTheme, isMaximumSelected: boolean) => {
  const {
    activeTrackTheme,
    inactiveTrackTheme,
    thumbTheme,
    stateLayerTheme,
    inactiveTrackMarksTheme,
    activeTrackMarksTheme,
    labelContainerTheme,
    labelTheme,
    containerTheme,
  } = getSliderTheme(theme);

  const {
    thumbTintColor,
    thumbSize,
    thumbTouchSize,
    activeTrackMarksColor,
    inactiveTrackMarksColor,
    activeTrackTintColor,
    inactiveTrackTintColor,
    disabled,
  } = props;

  let activeTrackStyle;
  let inactiveTrackStyle;
  let thumbStyle;
  let inactiveTrackMarksStyle;
  let activeTrackMarksStyle;

  activeTrackStyle = {
    ...activeTrackTheme.common,
    ...(activeTrackTintColor ? { backgroundColor: activeTrackTintColor } : {}),
    ...(isMaximumSelected ? { borderRightWidth: 0 } : {}),
  };

  inactiveTrackStyle = {
    ...inactiveTrackTheme.common,
    ...(inactiveTrackTintColor ? { backgroundColor: inactiveTrackTintColor } : {}),
  };

  thumbStyle = {
    ...thumbTheme.common,
    ...(thumbSize ? { height: thumbSize, width: thumbSize, borderRadius: thumbSize / 2 } : {}),
    ...(thumbTintColor ? { backgroundColor: thumbTintColor } : {}),
  };

  inactiveTrackMarksStyle = {
    ...inactiveTrackMarksTheme.common,
    ...(inactiveTrackMarksColor ? { color: inactiveTrackMarksColor } : {}),
  };

  activeTrackMarksStyle = {
    ...activeTrackMarksTheme.common,
    ...(activeTrackMarksColor ? { color: activeTrackMarksColor } : {}),
  };

  const labelContainerStyle = {
    ...labelContainerTheme.common,
    ...(thumbTintColor ? { backgroundColor: thumbTintColor } : {}),
  };

  const labelStyle = {
    ...labelTheme.common,
  };
  const sliderContainerStyle = {
    ...containerTheme.common,
  };

  const stateLayerStyle = {
    ...stateLayerTheme.common,
    ...(thumbTouchSize
      ? {
          height: thumbTouchSize.height,
          width: thumbTouchSize.width,
          borderRadius: thumbTouchSize.height / 2,
        }
      : {}),

    '@hover': {
      ...stateLayerTheme['@hover'],
      ...(thumbTintColor ? { backgroundColor: getColorInRGBA(thumbTintColor, 8) } : {}),
    },

    '@focus': {
      ...stateLayerTheme['@hover'],
      ...(thumbTintColor ? { backgroundColor: getColorInRGBA(thumbTintColor, 12) } : {}),
    },
    '@press': {
      ...stateLayerTheme['@press'],
      ...(thumbTintColor ? { backgroundColor: getColorInRGBA(thumbTintColor, 12) } : {}),
    },
  };

  if (disabled) {
    activeTrackStyle = {
      ...activeTrackStyle,
      ...activeTrackTheme['@disable'],
    };

    inactiveTrackStyle = {
      ...inactiveTrackStyle,
      ...inactiveTrackTheme['@disable'],
    };

    thumbStyle = {
      ...thumbStyle,
      ...thumbTheme['@disable'],
    };
    inactiveTrackMarksStyle = {
      ...inactiveTrackMarksStyle,
      ...inactiveTrackMarksTheme['@disable'],
    };

    activeTrackMarksStyle = {
      ...activeTrackMarksStyle,
      ...activeTrackMarksTheme['@disable'],
    };
  }

  const containerStyle = {
    width: '100%',
  } as const;

  return {
    activeTrackStyle,
    inactiveTrackStyle,
    thumbStyle,
    stateLayerStyle,
    inactiveTrackMarksStyle,
    activeTrackMarksStyle,
    labelContainerStyle,
    labelStyle,
    sliderContainerStyle,
    containerStyle,
  };
};

export const getTrackMarks = (props: SliderProps) => {
  const { trackMarks, step, maximumValue, minimumValue } = props;

  if (step !== undefined && minimumValue !== undefined && maximumValue !== undefined) {
    let array: number[] = [];

    for (let value = minimumValue; value <= maximumValue; value += step) array.push(value);

    if (trackMarks !== undefined) array = [...array, ...trackMarks];

    array.sort((a, b) => a - b);

    return [...new Set(array)];
  }
  return [...new Set(trackMarks?.sort((a, b) => a - b))];
};

/**
 * To get container styles for the track marks or points
 *
 * @param props - props of the slider component
 * @param active - whether thr track mark is in active region
 */
export const getTrackMarkContainerStyles = (props: SliderProps, active: boolean) => {
  let activeHeight: string | number | undefined = 4;
  let inactiveHeight: string | number | undefined = 4;

  if (props.activeTrackStyle && (props.activeTrackStyle as ViewStyle).height)
    activeHeight = (props.activeTrackStyle as ViewStyle).height;
  if (props.inactiveTrackStyle && (props.inactiveTrackStyle as ViewStyle).height)
    inactiveHeight = (props.inactiveTrackStyle as ViewStyle).height;

  const height = active ? activeHeight : inactiveHeight;
  const width = props.thumbSize ?? 20;

  return { height, width };
};
