import { RegularButtonProps } from '../../../types';

export const defaultProps: Omit<RegularButtonProps, 'title'> = {
  type: 'tonal',
  category: 'regular',
  size: 'medium',
};