import { ContainerProps } from 'lib/primitives/layout/types/container';

/**
 * The variant type for the card component
 * Checkout {@link https://m3.material.io/components/cards/overview Card} to learn more
 */
export type CardVariant = 'outlined' | 'filled' | 'elevated';

export interface CardProps extends Omit<ContainerProps, 'fixed' | 'disableGutters'> {
  onHover: (event: MouseEvent) => void;
  variant: CardVariant;
}
