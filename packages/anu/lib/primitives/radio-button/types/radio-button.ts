import { ExtendedDisabledStyles, ExtendedHoverStyles, Flex } from 'anu/common/types';
import { ContainerAlign } from 'anu/lib/primitives/layout/types';
import { ContainerJustify } from 'anu/lib/primitives/layout/types/container';
import { StyleProp, ViewStyle } from 'react-native';
import { TextStyle } from 'react-native/Libraries/StyleSheet/StyleSheetTypes';

import RadioButton from '../components';

export interface RadioButtonStyle extends ExtendedDisabledStyles, ExtendedHoverStyles {}

/**
 * The props type for the Radio Button Component
 */
export interface RadioButtonProps {
  /**
   * Id of the radio button item.
   */
  id: string;
  /**
   * Id of the selected radio button
   */
  selected?: string;
  /**
   * The callback when there is a press or click on the radio button.
   *
   * @param {string}id - the id of the selected radio button
   */
  onPress?: (id: string) => void;
  /**
   * The label to display with the radio button.
   */
  label?: string;
  /**
   * Position where the label should be placed.
   */
  labelPlacement?: 'left' | 'right' | 'top' | 'bottom';
  /**
   *The styles for the radio button component.
   */
  style?: RadioButtonStyle;
  /**
   * If true, the component is disabled.
   */
  disabled?: boolean;
  /**
   * The styles for the label of the radio button.
   */
  labelStyle?: StyleProp<TextStyle>;
  /**
   * The styles for the container of the radio button.
   */
  containerStyle?: StyleProp<ViewStyle>;
  /**
   * The color of the radio button component.
   */
  color?: string;
}

/**
 * The props type for the Radio Button Group Component
 */
export interface RadioButtonGroupProps {
  /**
   * Whether the radio button is selected
   */
  selected?: string;
  /**
   * The callback when there is a press or click on the radio button.
   *
   * @param {string}id - the id of the selected radio button
   */
  onPress?: (id: string) => void;
  /**
   * the radio button children
   */
  children: React.ReactElement<typeof RadioButton> | React.ReactElement<typeof RadioButton>[];
  /**
   * the radio button group container flex direction
   */
  flexDirection?: Flex;
  /**
   * the alignment of the radio button across cross axis of group container
   */
  align?: ContainerAlign;
  /**
   * the alignment of the radio button across main axis of group container
   */
  justify?: ContainerJustify;
}
