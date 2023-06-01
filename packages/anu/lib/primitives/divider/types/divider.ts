import { ReactChildren } from 'anu/common/types';
import { StyleProp, TextStyle, ViewStyle } from 'react-native';

/**
 * The Divider variant type
 * Checkout {@link https://m3.material.io/components/divider/specs Divider} to learn more
 */
export type DividerVariantHorizontal = 'full-width' | 'left-inset' | 'right-inset' | 'middle';
export type DividerVariantVertical = 'full-height' | 'top-inset' | 'bottom-inset' | 'middle';

/**
 * The Divider pattern type
 * Checkout {@link https://developer.mozilla.org/en-US/docs/Web/CSS/border-style Divider Pattern} to learn more
 */
export type DividerPattern = 'line' | 'dotted' | 'dashed';

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
interface CommonDividerProps {
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
  thickness?: number;

  /**
   * The component that is to be displayed on the divider
   */
  children?: ReactChildren;
  /**
   * "The text that is to be displayed on the divider.
   */
  text?: string;
  /**
   * The color of the divider.
   */
  color?: string;
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
  style?: StyleProp<ViewStyle>;
}

interface VerticalDividerProps extends CommonDividerProps {
  /**
   * Variant of divider that decides width for horizontal, height for vertical dividers
   */
  variant?: DividerVariantVertical;
  orientation: 'vertical';
}

interface HorizontalDividerProps extends CommonDividerProps {
  /**
   * Variant of divider that decides width for horizontal, height for vertical dividers
   */
  variant?: DividerVariantHorizontal;
  orientation?: 'horizontal';
}

export type DividerProps = HorizontalDividerProps | VerticalDividerProps;
