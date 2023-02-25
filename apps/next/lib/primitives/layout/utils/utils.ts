import { getMaxWidthInPixels } from 'common/utils';
import { SxProp } from 'dripsy';
import { StyleProp, ViewStyle } from 'react-native';

import { ContainerProps } from '../types/container';

/**
 * To generate the container styling props
 *
 *  @param {Partial<ContainerProps>} props - The properties of the container component
 *  @returns style properties for the container component
 */
export const getContainerStyles = (props: Partial<ContainerProps>) => {
  const { flex, maxWidth, align, justify, width, fixed, disableGutters, sx } = props;

  let sxStyle: SxProp = { ...sx };
  let containerStyle: StyleProp<ViewStyle> = { flexDirection: flex, alignItems: align, justifyContent: justify };

  if (fixed) sxStyle = { ...sxStyle, maxWidth: getMaxWidthInPixels('xs') };
  else if (maxWidth) sxStyle = { ...sxStyle, maxWidth: getMaxWidthInPixels(maxWidth) };

  if (width) containerStyle = { ...containerStyle, width };

  if (!disableGutters) containerStyle = { ...containerStyle, paddingHorizontal: 10 };

  return { style: containerStyle, sx: sxStyle };
};
