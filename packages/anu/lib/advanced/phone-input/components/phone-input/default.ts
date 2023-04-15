import { PhoneInputProps } from '../../types';

export const defaultProps: Omit<PhoneInputProps, 'value' | 'data' | 'onChangeText' | 'flatListProps'> = {
  variant: 'filled',
  label: 'Phone number',
};
