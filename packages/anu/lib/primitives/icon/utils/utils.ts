import { DripsyFinalTheme } from 'dripsy';

import { IconProps } from '../types';

/**
 * This is a central store for all the default button style
 *
 * @param theme - current theme of the system
 * @returns icon theme
 */
const getIconTheme = (theme: DripsyFinalTheme) => {
  const themeColors = theme.colors;

  const iconTheme = {
    color: themeColors.$onBackground,
  };

  return iconTheme;
};

/**
 * The return type of the getIconStyles function
 */
export type GetIconStylesReturnType = IconProps['style'];

/**
 * Get the icon styles
 *
 * @param {IconProps} props - props of the button component
 * @param defaultTheme - current theme of the system
 */
export const getIconStyles = (
  props: IconProps,
  defaultTheme: DripsyFinalTheme,
): GetIconStylesReturnType & { margin: number; padding: number } => {
  const theme = getIconTheme(defaultTheme);

  const styles: GetIconStylesReturnType = {
    color: theme.color,
  };

  const resetStyles = {
    margin: 0,
    padding: 0,
  };

  return { ...styles, ...resetStyles };
};
