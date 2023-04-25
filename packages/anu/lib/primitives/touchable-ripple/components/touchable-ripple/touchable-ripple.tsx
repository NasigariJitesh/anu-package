import { useTheme } from 'anu/config';
import { Pressable } from 'dripsy';
import * as React from 'react';
import { useState } from 'react';
import { GestureResponderEvent, Platform, PressableStateCallbackType } from 'react-native';

import { TouchableRippleProps } from '../../types';
import { getStateStyle, getTouchableRippleColors, getTouchableRippleStyles, hasTouchHandler } from '../../utils';
import { defaultProps } from './default';

const ANDROID_VERSION_LOLLIPOP = 21;
const ANDROID_VERSION_PIE = 28;

const TouchableRipple = (props: TouchableRippleProps) => {
  const finalProps = { ...defaultProps, ...props };

  const {
    style,
    background,
    borderless,
    disabled: disabledProp,
    rippleColor,
    underlayColor,
    children,
    ...rest
  } = finalProps;

  const { onPress, onLongPress, onPressIn, onPressOut } = rest;
  const hasPassedTouchHandler = hasTouchHandler({
    onPress,
    onLongPress,
    onPressIn,
    onPressOut,
  });
  const disabled = disabledProp || !hasPassedTouchHandler;

  const [showUnderlay, setShowUnderlay] = React.useState<boolean>(false);

  const theme = useTheme();
  const { borderlessStyle } = getTouchableRippleStyles();

  const { calculatedRippleColor, calculatedUnderlayColor } = getTouchableRippleColors(
    theme,
    rippleColor,
    underlayColor,
  );

  const [rippleBackgroundColor, setRippleBackgroundColor] = useState(calculatedRippleColor);

  // A workaround for ripple on Android P is to use useForeground + overflow: 'hidden'
  const useForeground = Platform.OS === 'android' && Platform.Version >= ANDROID_VERSION_PIE && borderless;

  const handlePressIn = (event: GestureResponderEvent) => {
    setShowUnderlay(true);
    onPressIn?.(event);
  };

  const handlePressOut = (event: GestureResponderEvent) => {
    setShowUnderlay(false);
    onPressOut?.(event);
  };

  const handlePress = (event: GestureResponderEvent) => {
    if (onPress) onPress(event);
  };

  if (TouchableRipple.supported) {
    return (
      <Pressable
        {...rest}
        onPress={handlePress}
        disabled={disabled}
        style={(state) =>
          getStateStyle(state, borderless ? borderlessStyle : {}, style, setRippleBackgroundColor, rippleColor)
        }
        android_ripple={
          background == null
            ? {
                color: rippleBackgroundColor,
                borderless,
                foreground: useForeground,
              }
            : background
        }
      >
        {React.Children.only(children)}
      </Pressable>
    );
  }

  return (
    <Pressable
      {...rest}
      disabled={disabled}
      style={(state: PressableStateCallbackType) =>
        getStateStyle(
          state,
          {
            ...(borderless ? borderlessStyle : {}),
            ...(showUnderlay ? { backgroundColor: calculatedUnderlayColor } : {}),
          },
          style,
          setRippleBackgroundColor,
          rippleColor,
        )
      }
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      onPress={handlePress}
    >
      {React.Children.only(children)}
    </Pressable>
  );
};

TouchableRipple.supported = Platform.OS === 'android' && Platform.Version >= ANDROID_VERSION_LOLLIPOP;

export default TouchableRipple;
