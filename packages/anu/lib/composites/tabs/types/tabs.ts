import { ReactChildren } from 'anu/common/types';
import { IconType } from 'anu/lib/primitives';
import { MutableRefObject, ReactElement, RefObject } from 'react';
import {
  Animated,
  GestureResponderEvent,
  LayoutChangeEvent,
  LayoutRectangle,
  StyleProp,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';

export type AnimatedViewStyle = Animated.AnimatedProps<StyleProp<ViewStyle>>;
export type AnimatedTextStyle = Animated.AnimatedProps<StyleProp<TextStyle>>;
export type Mode = 'fixed' | 'scrollable';

export interface AnimatedColorArguments {
  tabIndex: number;
  active: boolean;
  position?: Animated.Value;
  offset?: Animated.Value;
  textColor: string;
  activeColor: string;
  childrenCount: number;
}

export interface IndicatorArguments {
  layouts: MutableRefObject<Record<string, LayoutRectangle> | null>;
  index: number;
  childrenCount: number;
  position?: Animated.Value;
  offset?: Animated.Value;
  tabsLayout: LayoutRectangle | null;
}
export type IndicatorReturns = [RefObject<View> | undefined, () => void, AnimatedViewStyle | null];
export interface OffsetScrollArguments {
  index: number;
  offset: Animated.Value | undefined;
  updateScroll: (direction?: undefined | 'next' | 'prev') => void;
  mode: Mode;
}
export interface TabScreenProps {
  label: string;
  icon?: IconType;
  children: ReactChildren;
  onPress?: (event: GestureResponderEvent) => void;
  onPressIn?: (event: GestureResponderEvent) => void;
  disabled?: boolean;
}
export interface TabHeaderItemProps {
  tab: ReactElement<TabScreenProps>;
  tabIndex: number;
  active: boolean;
  goTo: (index: number) => void;
  onTabLayout: (index: number, event: LayoutChangeEvent) => void;
  activeColor: string;
  textColor: string;
  position?: Animated.Value;
  offset?: Animated.Value;
  childrenCount: number;
  mode: Mode;
  type?: 'primary' | 'secondary';
}

export interface TabsProps {
  children: ReactElement<TabScreenProps>[];
  persistKey?: string;
  style?: ViewStyle;
  defaultIndex?: number;
  uppercase?: boolean;
  mode?: Mode;
  type?: 'primary' | 'secondary';
  onChangeIndex?: (index: number) => void;
  disableSwipe?: boolean;
}
