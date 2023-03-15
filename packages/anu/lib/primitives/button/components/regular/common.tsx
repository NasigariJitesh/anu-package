import { useTheme } from 'anu/config';
import { generateHoverStyles, getCombinedStylesForText } from 'common/utils';
import { Pressable, useSx } from 'dripsy';
import { Icon } from 'lib/index';
import Container from 'lib/primitives/layout';
import Typography from 'lib/primitives/typography';
import { PressableStateCallbackType } from 'react-native';

import { RegularButtonProps as ButtonProps } from '../../types';
import { getButtonStyles, getLabelStyles } from '../../utils';

/**
 * Function to render the Button component with the styles
 *
 * @param {ButtonProps} props - all the props related to the component
 */
export const RenderComponent = (props: ButtonProps) => {
  const theme = useTheme();

  const { styles, stateLayerStyles } = getButtonStyles(props, theme);
  const labelStyles = getLabelStyles(props);

  const generateStyles = (state: PressableStateCallbackType) => {
    return generateHoverStyles(state, stateLayerStyles, useSx);
  };

  const getIcon = () => {
    const { icon } = props;

    if (icon)
      return 'name' in icon ? (
        <Icon size={18} color='inherit' name={icon.name as never} {...icon.props} style={icon.props?.style} />
      ) : (
        icon
      );
    else return null;
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
        {getIcon()}
        <Typography.Label size='large' style={getCombinedStylesForText(labelStyles, props.labelStyle)}>
          {props.title}
        </Typography.Label>
      </Pressable>
    </Container>
  );
};
