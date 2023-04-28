import { TextFieldWithMaskProps } from '../../types';

export const defaultProps: Omit<TextFieldWithMaskProps, 'value'> = {
  disabled: false,
  mask: 'DD-MM-YYYY',
};
