import { ReactElement } from 'react';
import { Animated, StyleProp, ViewStyle } from 'react-native';

import { Mode, TabScreenProps } from './tabs';

export interface SwiperRenderProps {
  style?: StyleProp<ViewStyle>;
  index: number;
  goTo: (index: number) => void;
  children: ReactElement<TabScreenProps>[];
  position?: Animated.Value;
  offset?: Animated.Value;
  mode: Mode;
  type?: 'primary' | 'secondary';
}

export interface SwiperProps {
  style?: StyleProp<ViewStyle>;
  onChangeIndex: (index: number) => void;
  defaultIndex?: number;
  children: ReactElement<TabScreenProps>[];
  mode: Mode;
  disableSwipe?: boolean;
  type?: 'primary' | 'secondary';
}
