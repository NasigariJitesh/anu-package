import { SwitchProps } from '../../types';

export const defaultProps: SwitchProps & { value: boolean } = {
  value: false,
  size: 32,
  icon: {
    true: null,
    false: null,
  },
};
