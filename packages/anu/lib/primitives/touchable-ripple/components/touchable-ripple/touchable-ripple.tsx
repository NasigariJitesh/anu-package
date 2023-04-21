import { getCombinedStylesForView } from 'anu/common/utils';
import { useTheme } from 'anu/config';
import * as React from 'react';
import { GestureResponderEvent, Platform, Pressable } from 'react-native';

import { TouchableRippleProps } from '../../types';
import { getTouchableRippleColors, getTouchableRippleStyles, hasTouchHandler } from '../../utils';
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

  if (TouchableRipple.supported) {
    return (
      <Pressable
        {...rest}
        disabled={disabled}
        style={getCombinedStylesForView(borderless ? borderlessStyle : {}, style)}
        android_ripple={
          background == null
            ? {
                color: calculatedRippleColor,
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
      style={getCombinedStylesForView(
        {
          ...(borderless ? borderlessStyle : {}),
          ...(showUnderlay ? { backgroundColor: calculatedUnderlayColor } : {}),
        },
        style,
      )}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
    >
      {React.Children.only(children)}
    </Pressable>
  );
};

TouchableRipple.supported = Platform.OS === 'android' && Platform.Version >= ANDROID_VERSION_LOLLIPOP;

export default TouchableRipple;
