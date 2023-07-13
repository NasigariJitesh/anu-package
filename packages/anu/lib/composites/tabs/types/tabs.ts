import { ReactChildren } from 'anu/common/types';
import { ContainerProps, IconType } from 'anu/lib/primitives';
import { ReactElement } from 'react';
import { StyleProp, TextStyle, ViewStyle } from 'react-native';

export interface TabsProps extends ContainerProps {
	/**
	 * The index of active tab
	 */
	active?: number;
	/**
	 * Callback function to be called when tab is changed
	 *
	 * @param active - index of new active tab
	 * @returns
	 */
	onChange?: (active: number) => void;
	/**
	 * The Individual Tab Components
	 */
	children: Array<ReactElement<TabProps>>;
	/**
	 * The styles for the individual tab header
	 */
	headerStyle?: StyleProp<ViewStyle>;
	/**
	 * The styles for the tab header of active tab
	 */
	activeTabHeaderStyle?: StyleProp<ViewStyle>;
	/**
	 * The type of tabs
	 */
	type?: 'primary' | 'secondary';
}

export interface TabHeaderProps {
	tabs: Array<ReactElement<TabProps>>;
	headerStyle?: StyleProp<ViewStyle>;
	activeTabHeaderStyle?: StyleProp<ViewStyle>;
	updateActive: (value: number) => void;
	active: number;
	type?: 'primary' | 'secondary';
}

export interface TabProps extends ContainerProps {
	/**
	 * The components to be displayed in the tab
	 */
	children?: ReactChildren;
	/**
	 * The name of the tab
	 */
	name?: string;
	/**
	 * The icon of the tab
	 */
	icon?: IconType | ReactElement;

	headerLabelStyle?: StyleProp<TextStyle>;

	labelDataSet?: Record<string, any>;
}

export interface HeaderItemProps extends TabProps {
	onPress: (value: number) => void;
	isActive: boolean;
	index: number;
	type?: 'primary' | 'secondary';
	tabHeaderStyle?: StyleProp<ViewStyle>;
	activeTabHeaderStyle?: StyleProp<ViewStyle>;
}
