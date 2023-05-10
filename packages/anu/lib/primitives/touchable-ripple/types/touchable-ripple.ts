/* eslint-disable react-native/split-platform-components */
import { Pressable } from 'dripsy';
import { PressableAndroidRippleConfig } from 'react-native';

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

  dataSet?: Record<string, never>;
}

export interface TouchableRippleProps
  extends CommonTouchableRippleProps,
    Omit<React.ComponentProps<typeof Pressable>, 'children'> {
  /**
   * Type of background drawable to display the feedback (Android).
   * https://reactnative.dev/docs/pressable#rippleconfig
   */
  background?: PressableAndroidRippleConfig;
}

export interface TouchableRippleWebProps
  extends CommonTouchableRippleProps,
    Omit<React.ComponentPropsWithRef<typeof Pressable>, 'children'> {
  // eslint-disable-next-line @typescript-eslint/ban-types
  background?: Object;
}
