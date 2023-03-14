import { DripsyFinalTheme } from 'dripsy';

import { CardProps } from '../../types/card';

/**
 * Default Properties of the card component
 */
export const defaultProps: Partial<CardProps> = {
  variant: 'elevated' as const,
};

export const defaultSxProps = (theme: DripsyFinalTheme) => ({
  color: theme.colors?.$primary as string,
});
