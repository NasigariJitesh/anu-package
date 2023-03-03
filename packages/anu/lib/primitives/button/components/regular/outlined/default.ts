import { RegularButtonProps } from '../../../types';

export const defaultProps: Omit<RegularButtonProps, 'title'> = {
  type: 'outlined',
  size: 'medium',
};
