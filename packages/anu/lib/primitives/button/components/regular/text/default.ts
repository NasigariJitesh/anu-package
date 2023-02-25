import { RegularButtonProps } from '../../../types';

export const defaultProps: Omit<RegularButtonProps, 'title'> = {
  type: 'text',
  category: 'regular',
  size: 'medium',
};
