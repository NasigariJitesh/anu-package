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

import { ExtendedDisabledStyles, ExtendedElevatedStyles, ExtendedHoverStyles } from 'common/types';
import { Pressable } from 'dripsy';
import { IconProps, IconSource } from 'lib/primitives/icon';
import { ViewProps } from 'react-native';

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
  type: ChipType;
  value: string;
  style?: ChipContainerStyle;
  disabled?: boolean;
}

type Icon = { name: IconSource; containerProps?: ViewProps; iconProps?: Omit<IconProps, 'name'> };

export interface SuggestionChip extends CommonChipProps {
  active?: boolean;
  type: 'suggestion';
  elevated?: boolean;
}

export interface InputChip extends CommonChipProps {
  type: 'input';
  leadingIcon?: Icon;
  trailingIcon?: Icon;
  active?: boolean;
}

export interface FilterChip extends CommonChipProps {
  type: 'filter';
  leadingIcon?: Icon;
  active?: boolean;
  elevated?: boolean;
}

export interface AssistChip extends CommonChipProps {
  type: 'assist';
  leadingIcon?: Icon;
  elevated?: boolean;
}

/**
 * Common props for the chip component
 */
export type ChipProps = AssistChip | FilterChip | InputChip | SuggestionChip;
