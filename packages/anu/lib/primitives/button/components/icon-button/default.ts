import { IconButtonProps } from '../../types';

export const defaultProps: Omit<IconButtonProps, 'icon'> & { selected: boolean } = {
  type: 'tonal',
  selected: false,
};
