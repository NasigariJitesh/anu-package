import { FABProps } from './../../types';

export const defaultProps: Omit<FABProps, 'icon'> = {
  FABColor: 'primary',
  size: 'medium',
  lowered: false,
};
