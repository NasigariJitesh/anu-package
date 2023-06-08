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
import { ExtendedDisabledStyles, ExtendedHoverStyles } from 'anu/common/types';
import { IconProps, IconSource } from 'anu/lib/primitives/icon';
import { ReactElement } from 'react';
import {
	ButtonProps as RNButtonProps,
	StyleProp,
	TextStyle,
} from 'react-native';

import TouchableRipple from '../../touchable-ripple';

/**
 *  The type of the Button Component
 *
 *  Check out {@link https://m3.material.io/components/all-buttons#9134ac95-678e-49ae-a50a-e71948011b05 Button Types} to learn more
 */
export type ButtonType = 'elevated' | 'filled' | 'tonal' | 'outlined' | 'text';

// export type IconButtonType = Omit<ButtonType, 'elevated' | 'text'> | 'standard';
export type IconButtonType = 'filled' | 'tonal' | 'outlined' | 'standard';

export type ButtonCategory =
	| 'common'
	| 'icon'
	| 'segmented'
	| 'floating-action'
	| 'extended-floating-action';

/**
 * The tokens for the selected type scale in the typography component
 *
 * Check out {@link https://m3.material.io/styles/typography/type-scale-tokens | Button Sizes} to learn more
 */
export type ButtonSize = 'large' | 'medium' | 'small';

export interface ButtonContainerStyle
	extends ExtendedDisabledStyles,
		ExtendedHoverStyles {}

/**
 * Common props for the button component
 */
export interface ButtonProps extends RNButtonProps {
	category:
		| 'common'
		| 'icon-button'
		| 'floating-action'
		| 'extended-floating-action';
	// size: ButtonSize;

	/**
	 * The styles for the button component.
	 */
	style?: ButtonContainerStyle;
	/**
	 * The styles for the label of the button.
	 */
	labelStyle?: StyleProp<TextStyle>;
	/**
	 * The properties of the pressable component of react native (except sx)
	 */
	pressableProps?: Omit<
		React.ComponentProps<typeof TouchableRipple>,
		'sx' | 'children'
	>;
}

/**
 * Props for the regular Button component
 */
interface CommonRegularButtonProps extends ButtonProps {
	category: 'common';
	size: 'medium';
	/**
	 * The icon component or the icon props for material icons.
	 */
	icon?: IconType | ReactElement;
	/**
	 * The type/variant of the button
	 */
	variant: ButtonType;

	isLoading?: boolean;

	dataSets?: {
		containerDataSet?: Record<string, any>;
		labelDataSet?: Record<string, any>;
	};
}

export type RegularButtonProps = Omit<CommonRegularButtonProps, 'category'>;

/**
 * The type of icon component for the icon button
 */
export type IconType = { name: IconSource; props?: Omit<IconProps, 'name'> };

/**
 * Props for the icon Button component
 */
interface CommonIconButtonProps
	extends Omit<ButtonProps, 'title' | 'labelStyle'> {
	category: 'icon-button';
	/**
	 * The icon component or the icon props for material icons
	 */
	icon: IconType | ReactElement;
	/**
	 * The type of the icon button
	 */
	variant: IconButtonType;
	/**
	 * Whether the icon button is toggle-able
	 */
	toggle?: boolean;

	/**
	 * Whether the toggle-able icon button is selected or not
	 */
	selected?: boolean;

	dataSets?: {
		containerDataSet?: Record<string, any>;
		iconDataSet?: Record<string, any>;
	};
}

export type IconButtonProps = Omit<CommonIconButtonProps, 'category'>;

/**
 * Props for FAB Component
 */
interface CommonFABProps
	extends Omit<ButtonProps, 'title' | 'type' | 'disabled' | 'labelStyle'> {
	category: 'floating-action';
	/**
	 * The icon component or the icon props for material icons
	 */
	icon: IconType | ReactElement;
	/**
	 * The size of the floating action button
	 */
	size?: 'small' | 'medium' | 'large';
	/**
	 * Color theme for the FAB
	 */
	FABColor?: 'primary' | 'secondary' | 'surface' | 'tertiary';
	/**
	 * Whether the FAB is lowered than usual FAB elevation
	 */
	lowered?: boolean;

	dataSets?: {
		containerDataSet?: Record<string, any>;
		iconDataSet?: Record<string, any>;
	};
}

export type FABProps = Omit<CommonFABProps, 'category'>;

/**
 * Props for Extended FAB Component
 */
interface CommonExtendedFABProps
	extends Omit<ButtonProps, 'type' | 'disabled' | 'labelStyle'> {
	category: 'extended-floating-action';
	/**
	 * The icon component or the icon props for material icons
	 */
	icon?: IconType | ReactElement;
	/**
	 * Color theme for the Extended FAB
	 */
	FABColor?: 'primary' | 'secondary' | 'surface' | 'tertiary';
	/**
	 * Whether the FAB is lowered than usual FAB elevation
	 */
	lowered?: boolean;
	/**
	 * The styles for the title of extended FAB
	 */
	labelStyle?: StyleProp<TextStyle>;

	dataSets?: {
		containerDataSet?: Record<string, any>;
		labelDataSet?: Record<string, any>;
		iconDataSet?: Record<string, any>;
	};
}

export type ExtendedFABProps = Omit<CommonExtendedFABProps, 'category'>;

export type CommonButtonProps =
	| CommonExtendedFABProps
	| CommonRegularButtonProps
	| CommonIconButtonProps
	| CommonFABProps;
