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

import { ExtendedDisabledStyles, ExtendedElevatedStyles, ExtendedHoverStyles } from 'anu/common/types';
import { IconProps, IconSource } from 'anu/lib/primitives/icon';
import { Pressable } from 'dripsy';
import { ReactElement } from 'react';
import { StyleProp, TextStyle, ViewProps } from 'react-native';

/**
 *  The type of the Chip Component
 *
 *  Check out {@link https://m3.material.io/components/chips/overview Chip Types} to learn more
 */
export type ChipType = 'assist' | 'filter' | 'input' | 'suggestion';

export interface ChipContainerStyle extends ExtendedDisabledStyles, ExtendedHoverStyles, ExtendedElevatedStyles {}

/**
 * Common props for the chip component
 */
export interface CommonChipProps extends Omit<React.ComponentProps<typeof Pressable>, 'sx' | 'style'> {
  /**
   * The type of the chip
   */
  type: ChipType;
  /**
   * The content of the chip
   */
  value: string;
  /**
   * The styles for the chip component.
   */
  style?: ChipContainerStyle;
  /**
   * The styles for the chip label.
   */
  labelStyle?: StyleProp<TextStyle>;
  /**
   * If true, the component is disabled.
   */
  disabled?: boolean;
}

type Icon = { name: IconSource; containerProps?: ViewProps; iconProps?: Omit<IconProps, 'name'> };

export interface SuggestionChip extends CommonChipProps {
  /**
   * Whether the chip is selected
   */
  selected?: boolean;
  /**
   * The type of the chip
   */
  type: 'suggestion';
  /**
   * Whether the chip has an elevated style
   */
  elevated?: boolean;
}

export interface InputChip extends CommonChipProps {
  /**
   * The type of the chip
   */
  type: 'input';
  /**
   * Icon to be displayed before (to left of) the chip content
   */
  leadingIcon?: Icon;
  /**
   * Icon to be displayed after (to right of) the chip content
   */
  trailingIcon?: Icon;
  /**
   * Whether the chip is selected
   */
  selected?: boolean;
}

export interface FilterChip extends CommonChipProps {
  /**
   * The type of the chip
   */
  type: 'filter';
  /**
   * Icon to be displayed before (to left of) the chip content
   */
  leadingIcon?: Icon;
  /**
   * Whether the chip is selected
   */
  selected?: boolean;
  /**
   * Whether the chip has an elevated style
   */
  elevated?: boolean;
}

export interface AssistChip extends CommonChipProps {
  /**
   * The type of the chip
   */
  type: 'assist';
  /**
   * Icon to be displayed before (to left of) the chip content
   */
  leadingIcon?: Icon | ReactElement;
  /**
   * Whether the chip has an elevated style
   */
  elevated?: boolean;
}

/**
 * Common props for the chip component
 */
export type ChipProps = AssistChip | FilterChip | InputChip | SuggestionChip;
