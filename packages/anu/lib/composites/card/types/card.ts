import { ReactChildren } from 'anu/common/types';
import { ContainerAlign, ContainerJustify, ContainerProps, ImageProps } from 'anu/lib';
import { Sx } from 'dripsy';
import { StyleProp, TextStyle, ViewStyle } from 'react-native';

/**
 * The variant type for the card component
 * Checkout {@link https://m3.material.io/components/cards/overview Card} to learn more
 */
export type CardVariant = 'outlined' | 'filled' | 'elevated';

interface CommonCardProps extends Omit<ContainerProps, 'fixed' | 'disableGutters' | 'variant'> {
  /**
   * The style variant of the card.
   */
  variant?: CardVariant;
  /**
   * Whether the Card is horizontal or vertical card.
   */
  orientation?: 'horizontal' | 'vertical';
  /**
   * The Height of the card, is optional when orientation is vertical
   */
  height?: number | string;
}

interface VerticalCardProps extends CommonCardProps {
  /**
   * Whether the Card is horizontal or vertical card.
   */
  orientation?: 'vertical';
  /**
   * The Width of the card, is optional when orientation is horizontal
   */
  width: number | string;
}

interface HorizontalCardProps extends CommonCardProps {
  /**
   * Whether the Card is horizontal or vertical card.
   */
  orientation: 'horizontal';
  /**
   * The Height of the card, is optional when orientation is vertical
   */
  height: number | string;
}

export type CardProps = HorizontalCardProps | VerticalCardProps;

export interface CardContentProps {
  /**
   * The child components that is displayed to as content of the card
   */
  children: ReactChildren;
  /**
   * The style for content area of the card
   */
  style?: StyleProp<ViewStyle>;
}

export interface CardActionsProps {
  /**
   * The child components that is displayed to as actions of the card
   */
  children: ReactChildren;
  /**
   * The style for action area of the card
   */
  style?: StyleProp<ViewStyle>;
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx?: Sx;
  /**
   * The alignment of all action items on the cross axis
   */
  align?: ContainerAlign;
  /**
   * The alignment of all action items on the main axis
   */
  justify?: ContainerJustify;
}

interface DefaultCardTitleProps {
  /**
   * The text for title
   */
  title: string;
  /**
   * The text for sub title
   */
  subTitle?: string;
  /**
   * Whether to use default title format or custom title components
   */
  type?: 'default';
}

interface CustomCardTitleProps {
  /**
   * The child elements for the custom title type
   */
  children: ReactChildren;
  /**
   * Whether to use default title format or custom title components
   */
  type: 'custom';
}

export type CardTitleProps = DefaultCardTitleProps | CustomCardTitleProps;

interface CommonCardMediaProps extends Omit<ImageProps, 'height' | 'width'> {
  /**
   * The Height of the media, is optional when card orientation is vertical
   */
  height?: number | string;
  /**
   * The Width of the media, is optional when card orientation is horizontal
   */
  width?: number | string;
  /**
   * Whether the Card is horizontal or vertical card
   */
  cardOrientation?: 'horizontal' | 'vertical';
}

interface HorizontalCardMediaProps extends CommonCardMediaProps {
  /**
   * The Width of the media, is optional when card orientation is horizontal
   */
  width: number | string;
  /**
   * Whether the Card is horizontal or vertical card
   */
  cardOrientation: 'horizontal';
}

interface VerticalCardMediaProps extends CommonCardMediaProps {
  /**
   * The Height of the media, is optional when card orientation is vertical
   */
  height: number | string;
  /**
   * Whether the Card is horizontal or vertical card
   */
  cardOrientation?: 'vertical';
}

export type CardMediaProps = HorizontalCardMediaProps | VerticalCardMediaProps;

export interface CardHeaderProps {
  /**
   *The avatar component that is displayed to left of the heading
   */
  avatar?: ReactChildren;
  /**
   *The heading text
   */
  heading: string;
  /**
   *The style for the heading text
   */
  headingStyle?: StyleProp<TextStyle>;
  /**
   *The sub heading text
   */
  subHeading?: string;
  /**
   *The style for the sub heading text
   */
  subHeadingStyle?: StyleProp<TextStyle>;
  /**
   * The sub heading text
   */
  action?: ReactChildren;
}
