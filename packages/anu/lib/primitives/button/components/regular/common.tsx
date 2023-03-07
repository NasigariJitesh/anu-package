import { generateHoverStyles, getCombinedStylesForText } from 'common/utils';
import { Pressable, useSx } from 'dripsy';
import Container from 'lib/primitives/layout';
import Typography from 'lib/primitives/typography';
import { PressableStateCallbackType } from 'react-native';

import { ButtonProps } from '../../types';
import { getButtonStyles } from '../../utils';

/**
 * Function to render the Button component with the styles
 *
 * @param {ButtonProps} props - all the props related to the component
 */
export const RenderComponent = (props: ButtonProps) => {
  const labelStyles = { color: 'inherit', cursor: 'pointer' };
  const { styles, stateLayerStyles } = getButtonStyles(props);

  const generateStyles = (state: PressableStateCallbackType) => {
    return generateHoverStyles(state, stateLayerStyles, useSx);
  };

  return (
    // @ts-expect-error REASON: we get ts error but react native ignores hover related styles
    <Container disableGutters style={styles}>
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
    </Container>
  );
};
