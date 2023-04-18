/* eslint-disable react-native/no-inline-styles */
import { Portal } from '@gorhom/portal';
import { useTheme } from 'anu/config';
import { Container } from 'anu/lib/primitives';
import React, { useEffect, useRef, useState } from 'react';
import { Animated, StyleSheet, TouchableWithoutFeedback, ViewStyle } from 'react-native';

import { useMenuContext } from '../../context';
import { MenuListProps } from '../../types';
import { getMenuListStyle } from '../../utils';
import { defaultProps } from './default';

const DURATION = 200; // in milliseconds
const DELAY = 100; // in milliseconds

const MenuList = (props: MenuListProps) => {
  const finalProps = { ...defaultProps, ...props };

  const { position: positionType, positionCoordinates, style, height: propHeight, ...otherViewProps } = finalProps;

  const { hideMenu, position, isOpen } = useMenuContext();
  const theme = useTheme();

  const { containerStyle, defaultStyle } = getMenuListStyle(theme, position, finalProps);

  const height = useRef(new Animated.Value(0)).current;
  const [, setValue] = useState(0);

  const styleForAnimateView = { ...defaultStyle, ...style };

  const animatedStyle: Animated.WithAnimatedObject<ViewStyle> = {
    ...styleForAnimateView,
    height: height,
  };

  useEffect(() => {
    if (isOpen) {
      transitionIn();
    } else {
      transitionOut();
    }
  }, [isOpen]);

  const transitionIn = () => {
    Animated.timing(height, {
      toValue: propHeight ?? 300,
      duration: DURATION,
      useNativeDriver: true,
      delay: DELAY,
    }).start();
  };

  const transitionOut = () => {
    Animated.timing(height, {
      toValue: 0,
      duration: DURATION,
      useNativeDriver: true,
      delay: DELAY,
    }).start();
  };

  console.log(isOpen, 'portal');

  return isOpen ? (
    <Portal name='CustomPortalHost'>
      <TouchableWithoutFeedback
        onPress={() => {
          hideMenu();
        }}
        style={{ ...StyleSheet.absoluteFillObject }}
      >
        <Container
          style={{
            ...StyleSheet.absoluteFillObject,
          }}
        >
          <Container disableGutters style={containerStyle} sx={{ height: 100, width: 100, backgroundColor: 'pink' }}>
            {/* <Animated.View {...otherViewProps} style={animatedStyle}>
              {finalProps.children}
            </Animated.View> */}
          </Container>
        </Container>
      </TouchableWithoutFeedback>
    </Portal>
  ) : null;
};

export default MenuList;
