import { getColorInRGBA } from 'anu/common/utils';
import { DripsyFinalTheme } from 'dripsy';
import { ViewProps } from 'react-native';

import { SwitchProps } from '../types';

/**
 * This is a central store for all the default switch style
 *
 * @param {DripsyFinalTheme} theme - theme of the library
 * @returns switch theme
 */
const getSwitchTheme = (theme: DripsyFinalTheme) => {
  const themeColors = theme.colors;

  const switchTheme = {
    track: {
      borderRadius: 25,
      borderWidth: 2,
      zIndex: 0,
      color: {
        off: themeColors.$surfaceVariant,
        on: themeColors.$primary,
      },
      borderColor: {
        off: themeColors.$outline,
        on: 'transparent',
      },
    },

    trackDisabled: {
      borderRadius: 25,
      borderWidth: 2,
      zIndex: 0,
      color: {
        off: getColorInRGBA(themeColors.$surfaceVariant, 12),
        on: getColorInRGBA(themeColors.$onSurface, 12),
      },
      borderColor: {
        off: getColorInRGBA(themeColors.$onSurface, 12),
        on: 'transparent',
      },
    },

    thumb: {
      transitionTimingFunction: 'ease',
      transitionProperty: 'all',
      transitionDuration: '.2s',
      borderRadius: 10_000,
      position: 'absolute',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 4,
      backgroundColor: {
        off: themeColors.$outline,
        on: themeColors.$onPrimary,
      },
    },

    thumbDisabled: {
      transitionTimingFunction: 'ease',
      transitionProperty: 'all',
      transitionDuration: '.2s',
      borderRadius: 10_000,
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
      zIndex: 4,
      backgroundColor: {
        off: getColorInRGBA(themeColors.$onSurface, 38),
        on: getColorInRGBA(themeColors.$surface, 99),
      },
    },
  };

  return switchTheme;
};

/**
 * Get the switch styles
 *
 * @param {SwitchProps} props - props of the switch component
 * @param state
 * @param {DripsyFinalTheme} defaultTheme - theme of the library
 */
export const getSwitchStyles = (props: SwitchProps, state: boolean, defaultTheme: DripsyFinalTheme) => {
  const theme = getSwitchTheme(defaultTheme);

  const thumb = {
    ...(props.disabled ? theme.thumbDisabled : (theme.thumb as Record<string, unknown>)),
    backgroundColor: getThumbColor(props, state, defaultTheme),
    ...(props.thumbStyle as Record<string, never>),
  } as const;

  const trackTheme = props.disabled ? theme.trackDisabled : theme.track;

  const track: ViewProps['style'] = {
    ...trackTheme,
    backgroundColor: state ? trackTheme.color.on : trackTheme.color.off,
    borderColor: props.trackColor ?? state ? trackTheme.borderColor.on : trackTheme.borderColor.off,
    ...(props.trackStyle as Record<string, never>),
    height: props.size,
    width: props.size * 2,
  };

  return { thumb, track };
};

/**
 * Get thumb color based on the properties of the switch
 *
 * @param {DripsyFinalTheme} defaultTheme - theme of the library
 * @param props - props of the switch component
 */

const getThumbColor = (props: SwitchProps, state: boolean, defaultTheme: DripsyFinalTheme) => {
  const theme = getSwitchTheme(defaultTheme);

  if (props.thumbColor) return props.thumbColor;

  if (props.disabled) return state ? theme.thumbDisabled.backgroundColor.on : theme.thumbDisabled.backgroundColor.off;

  return state ? theme.thumb.backgroundColor.on : theme.thumb.backgroundColor.off;
};
