/* eslint-disable react-hooks/exhaustive-deps */
import { Container } from 'anu/lib/primitives';
import * as React from 'react';
import { useEffect, useRef, useState } from 'react';
import { Animated, StyleSheet } from 'react-native';

import { AnimatedClockSwitcherProps, clockTypes } from '../../types';

/**
 *
 * @param props
 */
const AnimatedClockSwitcher = (props: AnimatedClockSwitcherProps) => {
  const { focused, hours, minutes } = props;

  const collapsed = focused === clockTypes.hours;

  const animatedCollapsed = useRef<Animated.Value>(new Animated.Value(collapsed ? 1 : 0)).current;

  const [, setValue] = useState(0);

  useEffect(() => {
    animatedCollapsed.addListener((arguments_) => setValue(arguments_.value));

    return () => {
      animatedCollapsed.removeAllListeners();
    };
  }, []);

  useEffect(() => {
    Animated.timing(animatedCollapsed, {
      toValue: collapsed ? 1 : 0,
      duration: 300,
      delay: 200,
      useNativeDriver: true,
    }).start();
  }, [collapsed]);

  return (
    <Container disableGutters style={StyleSheet.absoluteFill}>
      <Animated.View
        pointerEvents={collapsed ? 'auto' : 'none'}
        style={[
          StyleSheet.absoluteFill,
          {
            opacity: animatedCollapsed,
          },
        ]}
      >
        {hours}
      </Animated.View>
      <Animated.View
        pointerEvents={collapsed ? 'none' : 'auto'}
        style={[
          StyleSheet.absoluteFill,
          {
            opacity: animatedCollapsed.interpolate({
              inputRange: [0, 1],
              outputRange: [1, 0],
            }),
          },
        ]}
      >
        {minutes}
      </Animated.View>
    </Container>
  );
};

export default AnimatedClockSwitcher;
