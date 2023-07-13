import { generateHoverStyles } from 'anu/common/utils';
import { useTheme } from 'anu/config';
import { Container, Icon, TouchableRipple, Typography } from 'anu/lib';
import { useSx } from 'dripsy';
import React from 'react';
import { PressableStateCallbackType } from 'react-native';

import { HeaderItemProps } from '../../types';
import { getHeaderItemStyles } from '../../utils';

const ActiveIndicator = (props: HeaderItemProps) => {
	const theme = useTheme();

	const styles = getHeaderItemStyles(theme, props);

	return props.type === 'secondary' ? (
		<Container disableGutters style={styles.secondaryIndicatorStyle} />
	) : (
		<Container disableGutters style={styles.primaryIndicatorContainerStyle}>
			<Container disableGutters style={styles.primaryIndicatorStyle} />
		</Container>
	);
};

const TabHeaderItem = (props: HeaderItemProps) => {
	const theme = useTheme();

	const styles = getHeaderItemStyles(theme, props);

	const generateStyles = (state: PressableStateCallbackType) => {
		//@ts-expect-error
		return generateHoverStyles(state, styles.rippleStyle, useSx);
	};

	return (
		<TouchableRipple
			onPress={() => props.onPress(props.index)}
			style={generateStyles}>
			<>
				<Container disableGutters style={styles.innerContainerStyle}>
					{props.icon ? (
						'name' in props.icon ? (
							<Icon
								name={props.icon.name}
								size={24}
								style={[
									styles.iconStyle,
									props.isActive ? styles.activeStyle : {},
								]}
								{...props.icon.props}
							/>
						) : (
							props.icon
						)
					) : null}
					{props.name ? (
						<Typography.Body
							dataSet={props.labelDataSet}
							style={[
								styles.labelStyle,
								props.headerLabelStyle,
								props.isActive ? styles.activeStyle : {},
							]}>
							{props.name}
						</Typography.Body>
					) : null}
				</Container>

				{props.isActive ? <ActiveIndicator {...props} /> : null}
			</>
		</TouchableRipple>
	);
};

export default TabHeaderItem;
