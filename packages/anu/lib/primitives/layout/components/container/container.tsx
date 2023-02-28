import { getCombinedStylesForView } from 'common/utils';
import { View } from 'dripsy';
import React from 'react';

import { ContainerProps } from '../../types';
import { getContainerStyles } from '../../utils';
import { defaultProps } from './default';

/**
 * Component for Container
 *
 * @param {Partial<ContainerProps>} props - all the properties related to the container component
 */
export const Container = (props: Partial<ContainerProps>) => {
  const finalProps = { ...defaultProps, ...props };

  const { style, sx } = getContainerStyles(finalProps);

  return (
    <View {...finalProps} style={getCombinedStylesForView(style, props.style)} sx={sx}>
      {props.children}
    </View>
  );
};
