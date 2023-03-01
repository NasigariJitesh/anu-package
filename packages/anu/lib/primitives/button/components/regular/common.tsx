import { generateHoverStyles, getCombinedStylesForText } from 'common/utils';
import { Pressable, useSx } from 'dripsy';
import Typography from 'lib/primitives/typography';
import { PressableStateCallbackType } from 'react-native';

import { RegularButtonProps } from '../../types';
import { getButtonStyles } from '../../utils';

type ButtonProps = RegularButtonProps;

/**
 * Function to render the Button component with the styles
 *
 * @param {ButtonProps} props - all the props related to the component
 */
export const RenderComponent = (props: ButtonProps) => {
  const labelStyles = { color: 'inherit' };
  const generateStyles = (state: PressableStateCallbackType) => {
    const buttonStyles = getButtonStyles(props);

    return generateHoverStyles(state, buttonStyles, useSx);
  };

  return (
    <Pressable
      accessibilityRole='button'
      onPress={props.onPress}
      {...props.pressableProps}
      style={generateStyles}
      disabled={props.disabled}
    >
      <Typography.Label size='large' style={getCombinedStylesForText(labelStyles, props.labelStyle)}>
        {props.title}
      </Typography.Label>
    </Pressable>
  );
};
