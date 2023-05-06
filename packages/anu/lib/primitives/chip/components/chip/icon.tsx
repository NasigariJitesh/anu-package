import { useTheme } from 'anu/config';
import Icon from 'anu/lib/primitives/icon';
import { View } from 'react-native';

import { ChipProps } from '../../types';
import { getStyles } from '../../utils';

/**
 * Function to render the icon component within chip
 *
 * @param {ChipProps} props - all the props related to the component
 */
export const LeadingIcon = (props: ChipProps) => {
  const theme = useTheme();

  const { iconStyle } = getStyles(props, theme);

  if (props.type !== 'suggestion' && props.leadingIcon) {
    return (
      <View {...props.leadingIcon.containerProps} style={props.leadingIcon.containerProps?.style}>
        <Icon
          name={props.leadingIcon.name as never}
          {...props.leadingIcon.iconProps}
          size={iconStyle.size}
          //@ts-expect-error Reason sometimes color is undefined according to ts but its value is set according to the type of chip
          style={iconStyle}
        />
      </View>
    );
  }

  return null;
};

/**
 * Function to render the icon component within chip
 *
 * @param {ChipProps} props - all the props related to the component
 */
export const TrailingIcon = (props: ChipProps) => {
  const theme = useTheme();

  const { iconStyle } = getStyles(props, theme);

  if (props.type === 'input' && props.trailingIcon) {
    return (
      <View {...props.trailingIcon.containerProps} style={props.trailingIcon.containerProps?.style}>
        <Icon
          name={props.trailingIcon.name as never}
          {...props.trailingIcon.iconProps}
          size={iconStyle.size}
          //@ts-expect-error Reason sometimes color is undefined according to ts but its value is set according to the type of chip
          style={iconStyle}
        />
      </View>
    );
  }

  return null;
};
