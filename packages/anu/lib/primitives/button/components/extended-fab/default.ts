import { ExtendedFABProps } from './../../types';

export const defaultProps: Omit<ExtendedFABProps, 'icon' | 'title'> = {
  FABColor: 'primary',
  lowered: false,
};
