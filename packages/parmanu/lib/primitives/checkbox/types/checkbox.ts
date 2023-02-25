import { ExtendedDisabledStyles, ExtendedHoverStyles } from 'common/types';
import { IconStyle } from 'lib/primitives/icon';
import { StyleProp, TextStyle } from 'react-native';

export interface CheckBoxStyle extends ExtendedDisabledStyles, ExtendedHoverStyles {}

/**
 * The props type for the Checkbox Component
 */
export interface CheckboxProps {
  selected?: boolean;
  indeterminate?: boolean;
  id: string;
  onPress?: (value: string) => void;
  label?: string;
  labelPlacement?: 'left' | 'right' | 'top' | 'bottom';
  style?: CheckBoxStyle;
  disabled?: boolean;
  labelStyle?: StyleProp<TextStyle>;
  iconStyle?: IconStyle;
  color?: string;
  error?: boolean;
  iconSize?: number;
}
