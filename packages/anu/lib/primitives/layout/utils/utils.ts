import { getMaxWidthInPixels } from 'common/utils';
import { DripsyFinalTheme, SxProp } from 'dripsy';
import { StyleProp, ViewStyle } from 'react-native';

import { ContainerProps } from '../types/container';

/**
 * To generate the container styling props
 *
 *  @param {Partial<ContainerProps>} props - The properties of the container component
 *  @param theme - Dripsy final theme
 *  @returns style properties for the container component
 */
export const getContainerStyles = (props: Partial<ContainerProps>, theme: DripsyFinalTheme) => {
  const { flexDirection, maxWidth, align, justify, width, fixed, disableGutters, sx } = props;

  let sxStyle: SxProp = { ...sx };
  let containerStyle: StyleProp<ViewStyle> = {
    flexDirection,
    alignItems: align,
    justifyContent: justify,
    backgroundColor: theme.colors?.$background as string,
    width: '100%',
  };

  if (fixed) sxStyle = { ...sxStyle, maxWidth: getMaxWidthInPixels('xs') };
  else if (maxWidth) sxStyle = { ...sxStyle, maxWidth: getMaxWidthInPixels(maxWidth) };

  if (width) containerStyle = { ...containerStyle, width };

  if (!disableGutters) containerStyle = { ...containerStyle, paddingHorizontal: 10 };

  return { style: containerStyle, sx: sxStyle };
};
