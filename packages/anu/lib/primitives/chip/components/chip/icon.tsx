import Icon from 'lib/primitives/icon';
import { View } from 'react-native';

import { ChipProps } from '../../types';
import { getIconStyles } from '../../utils';

/**
 * Function to render the icon component within chip
 *
 * @param {ChipProps} props - all the props related to the component
 */
export const LeadingIcon = (props: ChipProps) => {
  const styles = getIconStyles(props);

  if (props.type !== 'suggestion' && props.leadingIcon) {
    return (
      <View {...props.leadingIcon.containerProps} style={[styles, props.leadingIcon.containerProps?.style]}>
        <Icon color={styles.color} name={props.leadingIcon.name as never} {...props.leadingIcon.iconProps} />
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
  const styles = getIconStyles(props);

  if (props.type === 'input' && props.trailingIcon) {
    return (
      <View {...props.trailingIcon.containerProps} style={[styles, props.trailingIcon.containerProps?.style]}>
        <Icon color={styles.color} name={props.trailingIcon.name as never} {...props.trailingIcon.iconProps} />
      </View>
    );
  }

  return null;
};
