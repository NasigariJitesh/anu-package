import { RegularButtonProps } from '../../../types';

export const defaultProps: Omit<RegularButtonProps, 'title'> = {
  type: 'elevated',
  category: 'regular',
  size: 'medium',
};
