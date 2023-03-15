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
      borderWidth: 1,
      zIndex: 0,
      color: {
        off: themeColors.$shadow,
        on: themeColors.$primary,
      },
    },

    thumb: {
      borderRadius: 10_000,
      position: 'absolute',
      zIndex: 4,
      color: {
        off: themeColors.$shadow,
        on: themeColors.$background,
      },
    },
  };

  return switchTheme;
};

/**
 * Get the switch styles
 *
 * @param {SwitchProps} props - props of the switch component
 * @param {DripsyFinalTheme} defaultTheme - theme of the library
 */
export const getSwitchStyles = (props: SwitchProps, defaultTheme: DripsyFinalTheme) => {
  const theme = getSwitchTheme(defaultTheme);

  const thumb: ViewProps['style'] = {
    backgroundColor: getThumbColor(props, defaultTheme),
    ...(theme.thumb as Record<string, unknown>),
    ...(props.thumbStyle as Record<string, never>),
  };

  const track: ViewProps['style'] = {
    backgroundColor: props.value ? theme.track.color.on : theme.track.color.off + 10,
    borderColor: props.trackColor ?? props.value ? 'transparent' : theme.track.color.off,
    ...theme.track,
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

const getThumbColor = (props: SwitchProps, defaultTheme: DripsyFinalTheme) => {
  const theme = getSwitchTheme(defaultTheme);

  if (props.thumbColor) return props.thumbColor;

  return props.value ? theme.thumb.color.on : theme.thumb.color.off;
};
