import { ReactChildren } from 'anu/common/types';
import { ContainerProps, IconType } from 'anu/lib/primitives';
import { ReactElement } from 'react';
import { StyleProp, ViewStyle } from 'react-native';

export interface TabsProps extends ContainerProps {
  active?: number;
  onChange?: (active: number) => void;
  children: Array<ReactElement<TabProps>>;
  contentStyle?: StyleProp<ViewStyle>;
  tabHeaderStyle?: StyleProp<ViewStyle>;
  activeTabHeaderStyle?: StyleProp<ViewStyle>;
  type?: 'primary' | 'secondary';
}

export interface TabHeaderProps {
  tabs: Array<ReactElement<TabProps>>;
  tabHeaderStyle?: StyleProp<ViewStyle>;
  activeTabHeaderStyle?: StyleProp<ViewStyle>;
  updateActive: (value: number) => void;
  active: number;
  type?: 'primary' | 'secondary';
}

export interface TabProps extends ContainerProps {
  children: ReactChildren;
  name: string;
  icon?: IconType | ReactElement;
}

export interface HeaderItemProps extends TabProps {
  onPress: (value: number) => void;
  isActive: boolean;
  index: number;
  type?: 'primary' | 'secondary';
  tabHeaderStyle?: StyleProp<ViewStyle>;
  activeTabHeaderStyle?: StyleProp<ViewStyle>;
}
