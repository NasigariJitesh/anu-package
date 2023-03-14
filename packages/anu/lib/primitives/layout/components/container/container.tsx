import { getCombinedStylesForView } from 'common/utils';
import { useTheme } from 'config/dripsy/theme';
import { View } from 'dripsy';
import React from 'react';

import { ContainerProps } from '../../types';
import { getContainerStyles } from '../../utils';
import { defaultProps } from './default';

/**
 * Component for Container
 *
 * @param {ContainerProps} props - all the properties related to the container component
 */
export const Container = (props: ContainerProps) => {
  const finalProps = { ...defaultProps, ...props };

  const { style, sx } = getContainerStyles(finalProps, useTheme());

  return (
    <View {...finalProps} style={getCombinedStylesForView(style, finalProps.style)} sx={sx}>
      {props.children}
    </View>
  );
};
