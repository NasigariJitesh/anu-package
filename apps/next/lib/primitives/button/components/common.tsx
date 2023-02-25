import { generateHoverStyles } from 'common/utils';
import { Pressable, useSx } from 'dripsy';
import Typography from 'lib/primitives/typography';
import { PressableStateCallbackType } from 'react-native';

import { RegularButtonProps } from '../types';
import { getButtonStyles } from '../utils';

type ButtonProps = RegularButtonProps;

/**
 * Function to render the Button component with the styles
 *
 * @param {ButtonProps} props - all the props related to the component
 */
export const RenderComponent = (props: ButtonProps) => {
  const generateStyles = (state: PressableStateCallbackType) => {
    const buttonStyles = getButtonStyles(props);

    return generateHoverStyles(state, buttonStyles, useSx);
  };

  return (
    <Pressable accessibilityRole='button' {...props.pressableProps} style={generateStyles} disabled={props.disabled}>
      <Typography.Label size='large' sx={{ color: 'inherit', ...props.labelStyle }}>
        {props.title}
      </Typography.Label>
    </Pressable>
  );
};
