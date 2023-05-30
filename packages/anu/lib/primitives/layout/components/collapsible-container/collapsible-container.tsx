import React from 'react';
import Animated, { useAnimatedStyle } from 'react-native-reanimated';

import { CollapsibleContainerProps } from '../../types';
import { getCollapsibleContainerStyles } from '../../utils';

/**
 *
 * @param props
 */
const CollapsibleContainer = (props: CollapsibleContainerProps) => {
  const { children, onLayout, animatedHeight, state, style } = props;

  const styles = getCollapsibleContainerStyles();

  const animatedStyle = useAnimatedStyle(() => {
    return {
      height: animatedHeight.value,
    };
  }, [animatedHeight]);

  return (
    <Animated.View
      style={[animatedStyle, styles.overflowHidden]}
      pointerEvents={state === 'expanded' ? 'auto' : 'none'}
    >
      <Animated.View onLayout={onLayout} style={[styles.container, style]}>
        {children}
      </Animated.View>
    </Animated.View>
  );
};

export default CollapsibleContainer;
