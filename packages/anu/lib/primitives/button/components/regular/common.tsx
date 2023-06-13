import { generateHoverStyles, getCombinedStylesForText } from 'anu/common/utils';
import { useTheme } from 'anu/config';
import { Container, Icon, TouchableRipple } from 'anu/lib';
import Typography from 'anu/lib/primitives/typography';
import { useSx } from 'dripsy';
import { ActivityIndicator, GestureResponderEvent, PressableStateCallbackType } from 'react-native';

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
  const labelStyles = {
    ...getLabelStyles(props),
    color: styles.color as string,
  };

  const activityIndicatorStyle = {
    marginHorizontal: 2,
  };

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
          style={getCombinedStylesForText({ color: styles.color as string }, icon.props?.style)}
        />
      ) : (
        icon
      );
    else return null;
  };

  return (
    <Container
      dataSet={props.dataSets?.containerDataSet}
      disableGutters
      // @ts-expect-error REASON: we get ts error but react native ignores hover related styles
      style={styles}
    >
      <TouchableRipple
        accessibilityRole='button'
        {...props.pressableProps}
        onPress={(event: GestureResponderEvent) => {
          if (props.onPress) props.onPress(event);
        }}
        style={generateStyles}
        disabled={props.disabled}
        dataSet={props.dataSets?.containerDataSet}
      >
        <>
          {getIcon()}
          {props.isLoading ? <ActivityIndicator style={activityIndicatorStyle} color={styles.color as string} /> : null}
          <Typography.Label
            dataSet={props.dataSets?.labelDataSet}
            selectable={false}
            size='large'
            style={getCombinedStylesForText(labelStyles, props.labelStyle)}
          >
            {props.title}
          </Typography.Label>
        </>
      </TouchableRipple>
    </Container>
  );
};
