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
import { Pressable } from 'dripsy';
import { IconProps, IconSource } from 'lib/primitives/icon';
import { ReactElement } from 'react';
import { ButtonProps as RNButtonProps, StyleProp, TextStyle } from 'react-native';

/**
 *  The type of the Button Component
 *
 *  Check out {@link https://m3.material.io/components/all-buttons#9134ac95-678e-49ae-a50a-e71948011b05 Button Types} to learn more
 */
export type ButtonType = 'elevated' | 'filled' | 'tonal' | 'outlined' | 'text';

// export type IconButtonType = Omit<ButtonType, 'elevated' | 'text'> | 'standard';
export type IconButtonType = 'filled' | 'tonal' | 'outlined' | 'standard';

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
  // category: ButtonCategory;
  // size: ButtonSize;
  /**
   * The type/variant of the button
   */
  type: ButtonType;
  /**
   * The styles for the button component.
   */
  containerStyle?: ButtonContainerStyle;
  /**
   * The styles for the label of the button.
   */
  labelStyle?: StyleProp<TextStyle>;
  /**
   * The properties of the pressable component of react native (except sx)
   */
  pressableProps?: Omit<React.ComponentProps<typeof Pressable>, 'sx'>;
}

/**
 * Props for the regular Button component
 */
export interface RegularButtonProps extends ButtonProps {
  size: 'medium';
}

/**
 * The type of icon component for the icon button
 */
export type IconType = { name: IconSource; props?: Omit<IconProps, 'name'> };

/**
 * Props for the icon Button component
 */
export interface IconButtonProps extends Omit<ButtonProps, 'title' | 'type' | 'labelStyle'> {
  /**
   * The icon component or the icon props for material icons
   */
  icon: IconType | ReactElement;
  /**
   * The type of the icon button
   */
  type: IconButtonType;
  /**
   * Whether the icon button is toggle-able
   */
  toggle?: boolean;
}

/**
 * Props for FAB Component
 */
export interface FABProps extends Omit<ButtonProps, 'title' | 'type' | 'disabled' | 'labelStyle'> {
  /**
   * The icon component or the icon props for material icons
   */
  icon: IconType | ReactElement;
  /**
   * The size of the floating action button
   */
  size: 'small' | 'medium' | 'large';
  /**
   * Color theme for the FAB
   */
  FABColor: 'primary' | 'secondary' | 'surface' | 'tertiary';
  /**
   * Whether the FAB is lowered than usual FAB elevation
   */
  lowered?: boolean;
}

/**
 * Props for Extended FAB Component
 */
export interface ExtendedFABProps extends Omit<ButtonProps, 'type' | 'disabled' | 'labelStyle'> {
  /**
   * The icon component or the icon props for material icons
   */
  icon?: IconType | ReactElement;
  /**
   * Color theme for the Extended FAB
   */
  FABColor: 'primary' | 'secondary' | 'surface' | 'tertiary';
  /**
   * Whether the FAB is lowered than usual FAB elevation
   */
  lowered?: boolean;
  /**
   * The styles for the title of extended FAB
   */
  titleStyle?: StyleProp<TextStyle>;
}
