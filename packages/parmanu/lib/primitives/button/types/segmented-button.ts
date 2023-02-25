import { ExtendedDisabledStyles, ExtendedHoverStyles } from 'common/types';
import { ReactElement } from 'react';
import { ButtonProps as RNButtonProps, StyleProp, TextStyle } from 'react-native';

import { SegmentedButton } from '../components/segmented-button/segmented-button';
import { IconType } from './button';

export interface SegmentedButtonStyle extends ExtendedDisabledStyles, ExtendedHoverStyles {}

/**
 * The props type for the Segmented Button Component
 */
export interface SegmentedButtonProps extends RNButtonProps {
  selected?: string | string[];
  id: string;
  onSelect?: (value: string) => void;
  icon?: IconType | ReactElement;
  style?: SegmentedButtonStyle;
  disabled?: boolean;
  titleStyle?: StyleProp<TextStyle>;
  isFirst?: boolean;
  isLast?: boolean;
}

/**
 * The props type for the Segmented Button Group Component
 */
export interface SegmentedButtonGroupProps {
  selected?: string | string[];
  multiSelect?: boolean;
  onPress?: (value: string) => void;
  children: React.ReactElement<typeof SegmentedButton>[];
}
