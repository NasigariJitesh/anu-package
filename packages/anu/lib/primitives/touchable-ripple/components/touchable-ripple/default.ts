import { TouchableRippleProps, TouchableRippleWebProps } from '../../types';

export const defaultProps: Omit<TouchableRippleProps, 'children'> = {
  disabled: false,
  centered: false,
  onPress: () => {},
};

export const defaultPropsWeb: Omit<TouchableRippleWebProps, 'children'> = {
  disabled: false,
  centered: false,
  onPress: () => {},
};
