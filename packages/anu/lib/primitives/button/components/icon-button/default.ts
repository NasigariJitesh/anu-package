import { IconButtonProps } from '../../types';

export const defaultProps: Omit<IconButtonProps, 'icon'> & { selected: boolean } = {
  variant: 'tonal',
  selected: false,
};
