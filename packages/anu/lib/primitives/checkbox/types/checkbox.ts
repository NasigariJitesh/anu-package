import { ExtendedDisabledStyles, ExtendedHoverStyles } from 'common/types';
import { IconStyle } from 'lib/primitives/icon';
import { StyleProp, TextStyle, ViewStyle } from 'react-native';

export interface CheckBoxStyle extends ExtendedDisabledStyles, ExtendedHoverStyles {}

/**
 * The props type for the Checkbox Component
 */
export interface CheckboxProps {
  /**
   * Whether the checkbox is selected
   */
  selected?: boolean;
  /**
   * If true, the component appears indeterminate.
   */
  indeterminate?: boolean;
  /**
   * Id of the checkbox item
   */
  id: string;
  /**
   * The callback when there is a press or click on the checkbox
   *
   * @param id - The id of the checkbox
   */
  onPress?: (id: string) => void;
  /**
   * The label to display with the checkbox.
   */
  label?: string;
  /**
   * Position where the label should be placed.
   */
  labelPlacement?: 'left' | 'right' | 'top' | 'bottom';
  /**
   * The styles for the checkbox component.
   */
  style?: CheckBoxStyle;
  /**
   * If true, the component is disabled
   */
  disabled?: boolean;
  /**
   * The styles for the label of the checkbox
   */
  labelStyle?: StyleProp<TextStyle>;
  /**
   * The styles for the container of the checkbox
   */
  containerStyle?: StyleProp<ViewStyle>;
  /**
   * The styles for the checked Icon
   */
  iconStyle?: IconStyle;
  /**
   * The color of the checkbox component
   */
  color?: string;
  /**
   * Whether an error occurred regarding to the checkbox.
   */
  error?: boolean;
  /**
   * The size of the checked icon
   */
  iconSize?: number;
}
