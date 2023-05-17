import { ExtendedDisabledStyles, ExtendedHoverStyles } from 'anu/common/types';
import { ReactElement } from 'react';
import { ButtonProps as RNButtonProps, StyleProp, TextStyle, ViewStyle } from 'react-native';

import { SegmentedButton } from '../components/segmented-button/segmented-button';
import { IconType } from './button';

export interface SegmentedButtonStyle extends ExtendedDisabledStyles, ExtendedHoverStyles {}

/**
 * The props type for the Segmented Button Component
 */
export interface SegmentedButtonProps extends RNButtonProps {
  /**
   * The ids of selected members of the segmented button group
   */
  selected?: string | string[];
  /**
   * Id of the segmented button
   */
  id: string;
  /**
   * The callback when there is a press or click on the segmented buttons
   *
   * @param {string}id - the id of the clicked segmented button
   */
  onSelect?: (id: string) => void;
  /**
   * The icon component or the icon props for material icons
   */
  icon?: IconType | ReactElement;
  /**
   * The styles for the segmented button component
   */
  style?: SegmentedButtonStyle;
  /**
   * The styles for the label of the button
   */
  labelStyle?: StyleProp<TextStyle>;
  isFirst?: boolean;
  isLast?: boolean;

  dataSets?: {
    containerDataSet?: Record<string, any>;
    labelDataSet?: Record<string, any>;
    iconDataSet?: Record<string, any>;
  };
}

/**
 * The props type for the Segmented Button Group Component
 */
export interface SegmentedButtonGroupProps {
  /**
   * The ids of selected members of the segmented button group
   */
  selected?: string | string[];
  /**
   * whether the multiple segmented buttons can be selected at once
   */
  multiSelect?: boolean;
  /**
   * The callback when there is a press or click on the segmented buttons
   *
   * @param {string}id - the id of the clicked segmented button
   */
  onPress?: (id: string) => void;
  children: React.ReactElement<typeof SegmentedButton>[];
  /**
   * style for the segmented button group container
   */
  containerStyle?: StyleProp<ViewStyle>;
}
