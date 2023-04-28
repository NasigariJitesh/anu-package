import { useTheme } from 'anu/config';
import { generateHoverStyles, getCombinedStylesForText } from 'common/utils';
import { useSx } from 'dripsy';
import { Icon, TouchableRipple } from 'lib/index';
import Container from 'lib/primitives/layout';
import Typography from 'lib/primitives/typography';
import { GestureResponderEvent, PressableStateCallbackType } from 'react-native';

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
  const labelStyles = { ...getLabelStyles(props), color: styles.color as string };

  const generateStyles = (state: PressableStateCallbackType) => {
    return generateHoverStyles(state, stateLayerStyles, useSx);
  };

  const getIcon = () => {
    const { icon } = props;

    if (icon)
      return 'name' in icon ? (
        <Icon
          size={18}
          name={icon.name as never}
          {...icon.props}
          //@ts-expect-error reason: the style type will always be text style only
          style={getCombinedStylesForText({ color: styles.color }, icon.props?.style)}
        />
      ) : (
        icon
      );
    else return null;
  };

  return (
    // @ts-expect-error REASON: we get ts error but react native ignores hover related styles
    <Container disableGutters style={styles}>
      <TouchableRipple
        accessibilityRole='button'
        {...props.pressableProps}
        onPress={(event: GestureResponderEvent) => {
          if (props.onPress) props.onPress(event);
        }}
        style={generateStyles}
        disabled={props.disabled}
      >
        <>
          {getIcon()}
          <Typography.Label size='large' style={getCombinedStylesForText(labelStyles, props.labelStyle)}>
            {props.title}
          </Typography.Label>
        </>
      </TouchableRipple>
    </Container>
  );
};
