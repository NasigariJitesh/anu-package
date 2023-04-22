import { useTheme } from 'anu/config';
import { Container } from 'anu/lib/primitives';
import React, { useEffect, useRef } from 'react';
import { Animated } from 'react-native';

import { AbsoluteCrossViewProps } from '../../types';
import { getAbsoluteCrossViewStyles } from '../../utils';

const AnimatedCrossView = (props: AbsoluteCrossViewProps) => {
  const { collapsed, calendar, calendarEdit } = props;
  const theme = useTheme();
  const styles = getAbsoluteCrossViewStyles();

  const calendarOpacity = useRef<Animated.Value>(new Animated.Value(collapsed ? 1 : 0));

  useEffect(() => {
    Animated.timing(calendarOpacity.current, {
      toValue: collapsed ? 1 : 0,
      duration: 250,
      useNativeDriver: true,
    }).start();
  }, [collapsed]);

  return (
    <Container disableGutters style={styles.root}>
      <Animated.View
        pointerEvents={collapsed ? 'auto' : 'none'}
        style={[
          styles.calendar,
          {
            opacity: calendarOpacity.current,
            transform: [
              {
                scaleY: calendarOpacity.current.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0.85, 1],
                }),
              },
              {
                scaleX: calendarOpacity.current.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0.95, 1],
                }),
              },
            ],
          },
        ]}
      >
        {calendar}
      </Animated.View>
      <Animated.View
        pointerEvents={collapsed ? 'none' : 'auto'}
        style={[
          styles.calendarEdit,
          {
            backgroundColor: theme.colors.$surface,
            opacity: calendarOpacity.current.interpolate({
              inputRange: [0, 1],
              outputRange: [1, 0],
            }),
            transform: [
              {
                scale: calendarOpacity.current.interpolate({
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
