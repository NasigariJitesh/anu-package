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
  /**
   * The shape of the overlaying container of the badge
   */
  overlap?: BadgeContainerType;
  /**
   * The position of the badge.
   */
  position?: BadgePosition;
  /**
   * The styles for the badge content
   */
  style?: StyleProp<ViewStyle>;
  /**
   * The extended styles for the badge
   */
  sx?: SxProp;

  children?: ReactChildren;
  /**
   * The styles for the badge content
   */
  contentStyle?: StyleProp<TextStyle>;
}

/**
 * Properties for badge with numeric content
 */
export interface NumberBadgeProps extends CommonBadgeProps {
  /**
   * whether the badge should be displayed when value is zero
   */
  showZero?: boolean;
  /**
   * The content of the badge
   */
  value: number;
  /**
   * Beyond this, the value will be shown as VALUE+
   *
   * @example if maxValue = 50 and value = 51, then it will show 50+
   */
  maxValue?: number;
}

/**
 * Properties for badge with string content
 */
export interface StringBadgeProps extends CommonBadgeProps {
  /**
   * The content of the badge
   */
  value: string;
}

/**
 * Properties for badge component
 */
export type BadgeProps = StringBadgeProps | NumberBadgeProps;
