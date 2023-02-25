import { RegularButtonProps } from '../../../types';

export const defaultProps: Omit<RegularButtonProps, 'title'> = {
  type: 'filled',
  category: 'regular',
  size: 'medium',
};
