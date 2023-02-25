/**
 * Refer the documentation from mui to build the types and interfaces for the typography component
 *
 * Check out the following links
 *
 *  - {@link https://mui.com/api/typography/ Typography API}
 *  - {@link https://mui.com/api/typography/#props Typography Props}
 *
 *  @todo - Add default values for the props
 */

import { ExtendedDisabledStyles, ExtendedHoverStyles } from 'common/types';
import { Pressable, SxProp } from 'dripsy';
import { ButtonProps as RNButtonProps } from 'react-native';

/**
 *  The type of the Button Component
 *
 *  Check out {@link https://m3.material.io/components/all-buttons#9134ac95-678e-49ae-a50a-e71948011b05 Button Types} to learn more
 */
export type ButtonType = 'elevated' | 'filled' | 'tonal' | 'outlined' | 'text';

export type ButtonCategory = 'regular' | 'icon' | 'segmented' | 'floating-action' | 'extended-floating-action';

/**
 * The tokens for the selected type scale in the typography component
 *
 * Check out {@link https://m3.material.io/styles/typography/type-scale-tokens | Button Sizes} to learn more
 */
export type ButtonSize = 'large' | 'medium' | 'small';

export interface ButtonContainerStyle extends ExtendedDisabledStyles, ExtendedHoverStyles {}

/**
 * Common props for the button component
 */
export interface ButtonProps extends RNButtonProps {
  type: ButtonType;
  category: ButtonCategory;
  // size: ButtonSize;
  containerStyle?: ButtonContainerStyle;
  labelStyle?: SxProp;
  pressableProps?: Omit<React.ComponentProps<typeof Pressable>, 'sx'>;
}

/**
 * Props for the regular Button component
 */
export interface RegularButtonProps extends ButtonProps {
  // size: 'medium';
  category: 'regular';
}
