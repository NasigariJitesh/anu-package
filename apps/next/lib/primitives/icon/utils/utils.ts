import { getTheme } from 'config/dripsy/theme';

import { IconProps } from '../types';

/**
 * This is a central store for all the default button style
 *
 * @returns icon theme
 */
const getIconTheme = () => {
  const themeColors = getTheme().colors;

  const iconTheme = {
    color: themeColors.$text,
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
 */
export const getIconStyles = (props: IconProps): GetIconStylesReturnType & { margin: number; padding: number } => {
  const theme = getIconTheme();

  const styles: GetIconStylesReturnType = {
    color: theme.color,
  };

  const resetStyles = {
    margin: 0,
    padding: 0,
  };

  const customStyle = props.style as Record<string, never>;

  return { ...styles, ...resetStyles, ...customStyle };
};
