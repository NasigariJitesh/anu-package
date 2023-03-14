import { getTheme } from 'config/dripsy/theme';
import { SxProp } from 'dripsy';

import { CardProps } from '../../types/card';

const { colors } = getTheme();

/**
 * Default Properties of the card component
 */
export const defaultProps: Partial<CardProps> = {
  variant: 'elevated' as const,
  style: {
    backgroundColor: colors.$background,
    shadowColor: colors.$primary + 90,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 1,
  },
};

export const defaultSxProps: SxProp = {
  color: colors.$primary,
};
