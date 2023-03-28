import { ReactChildren } from 'common/types';
import { Sx } from 'dripsy';
import { StyleProp, TextStyle } from 'react-native';

/**
 * The Divider variant type
 * Checkout {@link https://m3.material.io/components/divider/specs Divider} to learn more
 */
export type DividerVariant =
  | 'full-width'
  | 'left-inset'
  | 'right-inset'
  | 'middle'
  | 'full-height'
  | 'top-inset'
  | 'bottom-inset';

/**
 * The Divider pattern type
 * Checkout {@link https://developer.mozilla.org/en-US/docs/Web/CSS/border-style Divider Pattern} to learn more
 */
export type DividerPattern = 'line' | 'double-line' | 'dotted' | 'dashed';

/**
 * The Divider orientation type
 */
export type DividerOrientation = 'horizontal' | 'vertical';

/**
 * The Divider text align type
 */
export type DividerAlign = 'center' | 'start' | 'end';

/**
 * Props for the divider component
 */
export interface DividerProps {
  /**
   * Variant of divider that decides width for horizontal, height for vertical dividers
   */
  variant?: DividerVariant;
  /**
   * The pattern of the dividing line
   */
  pattern?: DividerPattern;
  /**
   * Whether the divider is vertical or horizontal.
   */
  orientation?: DividerOrientation;
  /**
   * The thickness or weight of the divider line.
   */
  thickness?: number | string;
  /**
   * If true, the divider is displayed in a lighter shade of the color given in style.
   */
  light?: boolean;
  /**
   * The component that is to be displayed on the divider
   */
  children?: ReactChildren;
  /**
   * "The text that is to be displayed on the divider.
   */
  text?: string;
  /**
   * The alignment of text/children on the divider.
   */
  align?: DividerAlign;
  /**
   * The styles for the text on the divider
   */
  textStyle?: StyleProp<TextStyle>;
  /**
   * The styles for the divider component
   */
  style?: Sx;
}
