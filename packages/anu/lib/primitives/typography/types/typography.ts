/**
 * Refer the documentation from mui to build the types and interfaces for the typography component
 *
 * Check out the following links
 *
 *  - {@link https://mui.com/api/typography/ Typography API}
 *  - {@link https://mui.com/api/typography/#props Typography Props}
 *
 *  @todo - Add default values for the props
 */

import { TextProps } from '@expo/html-elements/build/primitives/Text';
import { StyleProp, TextStyle } from 'react-native';

/**
 *  The type scale for the typography component
 *
 *  Check out {@link https://m3.material.io/styles/typography/type-scale-tokens Type Scale Tokens} to learn more
 */
export type TypeScales = 'display' | 'headline' | 'title' | 'label' | 'body';

/**
 * The tokens for the selected type scale in the typography component
 *
 * Check out {@link https://m3.material.io/styles/typography/type-scale-tokens | Type Scale Tokens} to learn more
 */
export type Tokens = 'large' | 'medium' | 'small';

/**
 * refer {@link Tokens} to learn more
 */
export type DisplayTokens = Tokens;
/**
 * refer {@link Tokens} to learn more
 */
export type HeadlineTokens = Tokens;
/**
 * refer {@link Tokens} to learn more
 */
export type TitleTokens = Tokens;

/**
 * refer {@link Tokens} to learn more
 *
 */
export type LabelTokens = Tokens;

/**
 * How to align the text of a typography component
 */
export type TextAlign = 'center' | 'auto' | 'justify' | 'left' | 'right';

/**
 * The type of Header tag in HTML that needs to be rendered
 */
export type HeadingType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';

/**
 * The type of label tag in HTML that needs to be rendered
 */
export type LabelType = 'label' | BodyType;

/**
 * The type of body tag in HTML that needs to be rendered
 */
export type BodyType = 'p';

/**
 * The type of HTML tag that needs to be rendered
 */
export type HTMLType = HeadingType | LabelType | BodyType;

/**
 * Common props for the typography component
 */
export interface TypographyProps extends TextProps {
  /**
   * How to align the text of a typography component
   */
  align: TextAlign;

  /**
   *  The type scale for the typography component
   */
  scale: TypeScales;

  /**
   * The tokens for the selected type scale in the typography component
   */
  size: DisplayTokens;
  /**
   * The styles for the typography component
   */
  style?: StyleProp<TextStyle>;
}

/**
 * Props for the display component
 */
export interface DisplayProps extends TypographyProps {
  component: HeadingType;
  scale: 'display';
}

/**
 * Props for the headline component
 */
export interface HeadlineProps extends TypographyProps {
  component: HeadingType;
  scale: 'headline';
}

/**
 * Props for the title component
 */
export interface TitleProps extends TypographyProps {
  component: HeadingType;
  scale: 'title';
}

/**
 * Props for the label component
 */
export interface LabelProps extends TypographyProps {
  component: LabelType;
  scale: 'label';
  /**
   * This can be used as "for" property in label component for web
   */
  htmlFor?: string;
}

/**
 * Props for the body component
 */
export interface BodyProps extends TypographyProps {
  component: BodyType;
  scale: 'body';
}
