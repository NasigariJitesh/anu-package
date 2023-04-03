import { ReactChildren } from 'anu/common/types';
import { Sx } from 'dripsy';
import { ContainerAlign, ContainerJustify, ContainerProps, ImageProps } from 'lib';
import { StyleProp, TextStyle, ViewStyle } from 'react-native';

/**
 * The variant type for the card component
 * Checkout {@link https://m3.material.io/components/cards/overview Card} to learn more
 */
export type CardVariant = 'outlined' | 'filled' | 'elevated';

export interface CardProps extends Omit<ContainerProps, 'fixed' | 'disableGutters' | 'variant'> {
  onHover: (event: MouseEvent) => void;
  variant: CardVariant;
}

export interface CardContentProps {
  children: ReactChildren;
  style?: StyleProp<ViewStyle>;
  sx?: Sx;
}

export interface CardActionsProps {
  children: ReactChildren;
  style?: StyleProp<ViewStyle>;
  sx?: Sx;
  align?: ContainerAlign;
  justify?: ContainerJustify;
}

interface DefaultCardTitleProps {
  title: string;
  subTitle?: string;
  type: 'default';
}

interface CustomCardTitleProps {
  children: ReactChildren;
  type: 'custom';
}

export type CardTitleProps = DefaultCardTitleProps | CustomCardTitleProps;

export interface CardMediaProps extends Omit<ImageProps, 'height' | 'width'> {
  height?: number | string;
  width?: number | string;
}

interface CommonCardHeaderProps {
  avatar?: ReactChildren;
  heading: string;
  headingStyle?: StyleProp<TextStyle>;
  subHeading?: string;
  subHeadingStyle?: StyleProp<TextStyle>;
}

interface ImageCardHeaderProps extends CommonCardHeaderProps {
  image?: ReactChildren;
}

interface ActionCardHeaderProps extends CommonCardHeaderProps {
  action?: ReactChildren;
}

export type CardHeaderProps = ImageCardHeaderProps | ActionCardHeaderProps;
