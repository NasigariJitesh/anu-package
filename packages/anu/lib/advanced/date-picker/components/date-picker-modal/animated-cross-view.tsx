/* eslint-disable react-hooks/exhaustive-deps */
import { useTheme } from 'anu/config';
import { Container } from 'anu/lib/primitives';
import React, { useEffect, useRef, useState } from 'react';
import { Animated } from 'react-native';

import { AnimatedCrossViewProps } from '../../types';
import { getAnimatedCrossViewStyles } from '../../utils';

/**
 *
 * @param props
 */
const AnimatedCrossView = (props: AnimatedCrossViewProps) => {
  const { collapsed, calendar, calendarEdit } = props;

  const [, setValue] = useState(0);

  const theme = useTheme();
  const styles = getAnimatedCrossViewStyles(theme, collapsed);

  const calendarOpacity = useRef(new Animated.Value(collapsed ? 1 : 0)).current;

  const transition = () => {
    Animated.timing(calendarOpacity, {
      toValue: collapsed ? 1 : 0,
      duration: 250,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    calendarOpacity.addListener((arguments_) => setValue(arguments_.value));

    return () => {
      calendarOpacity.removeAllListeners();
    };
  }, []);

  useEffect(() => {
    transition();
  }, [collapsed]);

  return (
    <Container disableGutters style={styles.root}>
      <Animated.View
        pointerEvents={collapsed ? 'auto' : 'none'}
        style={[
          styles.calendar,
          {
            opacity: calendarOpacity,
            transform: [
              {
                scaleY: calendarOpacity.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0.85, 1],
                }),
              },
              {
                scaleX: calendarOpacity.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0.95, 1],
                }),
              },
            ],
          },
        ]}
      >
        {collapsed ? calendar : null}
      </Animated.View>
      <Animated.View
        pointerEvents={collapsed ? 'none' : 'auto'}
        style={[
          styles.calendarEdit,
          {
            opacity: calendarOpacity.interpolate({
              inputRange: [0, 1],
              outputRange: [1, 0],
            }),
            transform: [
              {
                scale: calendarOpacity.interpolate({
                  inputRange: [0, 1],
                  outputRange: [1, 0.95],
                }),
              },
            ],
          },
        ]}
      >
        {calendarEdit}
      </Animated.View>
    </Container>
  );
};

export default AnimatedCrossView;
