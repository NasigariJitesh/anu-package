import { ReactChildren } from 'common/types/index';
import { SxProp } from 'dripsy';
import { StyleProp, TextStyle, ViewStyle } from 'react-native';

/**
 * The badge container type
 */
export type BadgeContainerType = 'circular' | 'rectangular';

/**
 * The badge position type
 */
export type BadgePosition = 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight';

/**
 * Common Badge Properties
 */
export interface CommonBadgeProps {
  overlap?: BadgeContainerType;
  position?: BadgePosition;
  style?: StyleProp<ViewStyle>;
  sx?: SxProp;
  /**
   * Beyond this, the value will be shown as VALUE+
   *
   * @example if maxValue = 50 and value = 51, then it will show 50+
   */
  maxValue?: number;
  children?: ReactChildren;
  contentStyle?: StyleProp<TextStyle>;
}

/**
 * Properties for badge with numeric content
 */
export interface NumberBadgeProps extends CommonBadgeProps {
  showZero?: boolean;
  value: number;
}

/**
 * Properties for badge with string content
 */
export interface StringBadgeProps extends CommonBadgeProps {
  value: string;
}

/**
 * Properties for badge component
 */
export type BadgeProps = StringBadgeProps | NumberBadgeProps;
