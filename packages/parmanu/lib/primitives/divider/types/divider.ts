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
export type DividerTextAlign = 'center' | 'start' | 'end';

/**
 * Props for the divider component
 */
export interface DividerProps {
  variant: DividerVariant;
  pattern: DividerPattern;
  orientation: DividerOrientation;
  borderWidth: number | string;
  light?: boolean;
  children?: ReactChildren;
  text?: string;
  textAlign?: DividerTextAlign;
  textStyle?: StyleProp<TextStyle>;
  style?: Sx;
}
