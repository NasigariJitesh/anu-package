/* eslint-disable react-native/split-platform-components */
import { GestureResponderEvent, Pressable, PressableAndroidRippleConfig, StyleProp, ViewStyle } from 'react-native';

interface CommonTouchableRippleProps {
  /**
   * Whether to render the ripple outside the view bounds.
   */
  borderless?: boolean;
  /**
   * Whether to start the ripple at the center (Web).
   */
  centered?: boolean;
  /**
   * Whether to prevent interaction with the touchable.
   */
  disabled?: boolean | null;
  /**
   * Function to execute on press. If not set, will cause the touchable to be disabled.
   */
  onPress?: ((event: GestureResponderEvent) => void) | null;
  /**
   * Function to execute on long press.
   */
  onLongPress?: ((event: GestureResponderEvent) => void) | null;
  /**
   * Function to execute immediately when a touch is engaged, before `onPressOut` and `onPress`.
   */
  onPressIn?: ((event: GestureResponderEvent) => void) | null;
  /**
   * Function to execute when a touch is released.
   */
  onPressOut?: ((event: GestureResponderEvent) => void) | null;
  /**
   * Color of the ripple effect (Android >= 5.0 and Web).
   */
  rippleColor?: string;
  /**
   * Color of the underlay for the highlight effect (Android < 5.0 and iOS).
   */
  underlayColor?: string;
  /**
   * Content of the `TouchableRipple`.
   */
  children: React.ReactNode;
}

export interface TouchableRippleProps
  extends CommonTouchableRippleProps,
    Omit<
      React.ComponentProps<typeof Pressable>,
      'children' | 'disabled' | 'onLongPress' | 'onPress' | 'onPressIn' | 'onPressOut'
    > {
  /**
   * Type of background drawable to display the feedback (Android).
   * https://reactnative.dev/docs/pressable#rippleconfig
   */
  background?: PressableAndroidRippleConfig;
}

export interface TouchableRippleWebProps
  extends CommonTouchableRippleProps,
    Omit<
      React.ComponentPropsWithRef<typeof Pressable>,
      'children' | 'disabled' | 'onLongPress' | 'onPress' | 'onPressIn' | 'onPressOut'
    > {
  // eslint-disable-next-line @typescript-eslint/ban-types
  background?: Object;
}
