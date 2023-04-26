import { SnackbarProps } from '../../types';

export const defaultProps: SnackbarProps & { duration: number } = {
  numberOfLines: 1,
  align: 'center',
  duration: 5000,
  content: '',
};
