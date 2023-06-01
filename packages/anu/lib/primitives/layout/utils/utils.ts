import { getMaxWidthInPixels } from 'anu/common/utils';
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
  const { flexDirection, maxWidth, align, justify, width, fixed, disableGutters, sx } = props;

  let sxStyle: SxProp = { ...sx };
  let containerStyle: StyleProp<ViewStyle> = {
    flexDirection,
    alignItems: align,
    justifyContent: justify,
  };

  if (fixed) sxStyle = { ...sxStyle, maxWidth: getMaxWidthInPixels('xs') };
  else if (maxWidth) sxStyle = { ...sxStyle, maxWidth: getMaxWidthInPixels(maxWidth) };

  if (width) containerStyle = { ...containerStyle, width };

  if (!disableGutters) containerStyle = { ...containerStyle, paddingHorizontal: 10 };

  return { style: containerStyle, sx: sxStyle };
};

export const getCollapsibleContainerStyles = () => {
  const container = {
    position: 'absolute',
    top: 0,
    width: '100%',
  } as const;
  const overflowHidden = {
    overflow: 'hidden',
    width: '100%',
  } as const;

  return { container, overflowHidden };
};
