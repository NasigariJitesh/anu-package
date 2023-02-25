import { ExtendedDisabledStyles, ExtendedHoverStyles, Flex } from 'common/types';
import { ContainerAlign } from 'lib/primitives/layout/types';
import { ContainerJustify } from 'lib/primitives/layout/types/container';
import { StyleProp } from 'react-native';
import { TextStyle } from 'react-native/Libraries/StyleSheet/StyleSheetTypes';

import RadioButton from '../components';

export interface RadioButtonStyle extends ExtendedDisabledStyles, ExtendedHoverStyles {}

/**
 * The props type for the Radio Button Component
 */
export interface RadioButtonProps {
  id: string;
  selected?: string;
  onPress?: (value: string) => void;
  label?: string;
  labelPlacement?: 'left' | 'right' | 'top' | 'bottom';
  style?: RadioButtonStyle;
  disabled?: boolean;
  labelStyle?: StyleProp<TextStyle>;
  color?: string;
}

/**
 * The props type for the Radio Button Group Component
 */
export interface RadioButtonGroupProps {
  selected?: string;
  onPress?: (value: string) => void;
  children: React.ReactElement<typeof RadioButton> | React.ReactElement<typeof RadioButton>[];
  flexDirection?: Flex;
  align?: ContainerAlign;
  justify?: ContainerJustify;
}
