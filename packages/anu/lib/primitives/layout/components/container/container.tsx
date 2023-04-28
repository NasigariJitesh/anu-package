/* eslint-disable react/display-name */
import { getCombinedStylesForView } from 'common/utils';
import { useTheme } from 'config/dripsy';
import { View } from 'dripsy';
import React, { forwardRef } from 'react';
import { View as NativeView } from 'react-native';

import { ContainerProps } from '../../types';
import { getContainerStyles } from '../../utils';
import { defaultProps } from './default';

/**
 * Component for Container
 *
 * @param {ContainerProps} props - all the properties related to the container component
 */
export const Container = forwardRef<NativeView, ContainerProps>((props, reference) => {
  const d = defaultProps(useTheme());

  const finalProps = { ...d, ...props };

  const { style, sx } = getContainerStyles(finalProps);

  return (
    <View ref={reference} {...finalProps} style={getCombinedStylesForView(style, props.style)} sx={sx}>
      {props.children}
    </View>
  );
});
