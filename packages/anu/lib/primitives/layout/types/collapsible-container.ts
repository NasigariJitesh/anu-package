import { LayoutChangeEvent, StyleProp, ViewStyle } from 'react-native';
import Animated from 'react-native-reanimated';

export type State = 'expanded' | 'collapsed';

export type Config = {
  duration?: number;
  easing?: Animated.EasingFunction;
  defaultState?: State;
};

export interface CollapsibleContainerProps {
  children: React.ReactNode;
  onLayout: (event: LayoutChangeEvent) => void;
  animatedHeight: Animated.SharedValue<number>;
  state: State;
  style?: StyleProp<Animated.AnimateStyle<ViewStyle>>;
}
