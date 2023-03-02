import { CheckboxProps } from '../../types';

/**
 * Default Properties of the radio button component
 */
export const defaultProps: Omit<CheckboxProps, 'id'> = {
  iconSize: 18,
  disabled: false,
  error: false,
};
