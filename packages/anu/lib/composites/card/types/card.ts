import { ReactChildren } from 'anu/common/types';
import { Sx } from 'dripsy';
import { ContainerAlign, ContainerJustify, ContainerProps, ImageProps } from 'lib';
import { StyleProp, TextStyle, ViewStyle } from 'react-native';

/**
 * The variant type for the card component
 * Checkout {@link https://m3.material.io/components/cards/overview Card} to learn more
 */
export type CardVariant = 'outlined' | 'filled' | 'elevated';

interface CommonCardProps extends Omit<ContainerProps, 'fixed' | 'disableGutters' | 'variant'> {
  variant?: CardVariant;
  orientation?: 'horizontal' | 'vertical';
  height?: number | string;
}

interface VerticalCardProps extends CommonCardProps {
  orientation?: 'vertical';
  width: number | string;
}

interface HorizontalCardProps extends CommonCardProps {
  orientation: 'horizontal';
  height: number | string;
}

export type CardProps = HorizontalCardProps | VerticalCardProps;

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

interface CommonCardMediaProps extends Omit<ImageProps, 'height' | 'width'> {
  height?: number | string;
  width?: number | string;
  cardOrientation?: 'horizontal' | 'vertical';
}

interface HorizontalCardMediaProps extends CommonCardMediaProps {
  width: number | string;
  cardOrientation: 'horizontal';
}

interface VerticalCardMediaProps extends CommonCardMediaProps {
  height: number | string;
  cardOrientation?: 'vertical';
}

export type CardMediaProps = HorizontalCardMediaProps | VerticalCardMediaProps;

export interface CardHeaderProps {
  avatar?: ReactChildren;
  heading: string;
  headingStyle?: StyleProp<TextStyle>;
  subHeading?: string;
  subHeadingStyle?: StyleProp<TextStyle>;
  action?: ReactChildren;
}
