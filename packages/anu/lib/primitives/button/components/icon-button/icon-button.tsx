import { generateHoverStyles } from 'common/utils';
import { Pressable, useSx } from 'dripsy';
import { Container, Icon } from 'lib/primitives';
import { ReactElement, useState } from 'react';
import { GestureResponderEvent, PressableStateCallbackType } from 'react-native';

import { IconButtonProps, IconType } from '../../types';
import { getIconButtonStyles } from '../../utils';
import { defaultProps } from './default';

/**
 * Function to render the Button component with the styles
 *
 * @param {IconButtonProps} props - all the props related to the component
 */
const IconButton = (props: IconButtonProps) => {
  const [isSelected, toggleSelected] = useState(false);

  const restOfTheProps = { ...defaultProps, ...props };

  const { containerStyles, pressableStyles, iconStyles } = getIconButtonStyles(restOfTheProps, isSelected);

  const generateStyles = (state: PressableStateCallbackType) => {
    return generateHoverStyles(state, pressableStyles, useSx);
  };

  const onPressHandler = (event: GestureResponderEvent) => {
    toggleSelected((previous) => !previous);
    if (restOfTheProps.onPress) restOfTheProps.onPress(event);
  };

  const getIcon = (icon: IconType | ReactElement) => {
    // @ts-expect-error REASON: we get ts error but react native ignores hover related styles
    return 'name' in icon ? <Icon style={iconStyles} name={icon.name as never} {...icon.props} /> : icon;
  };

  return (
    // @ts-expect-error REASON: we get ts error but react native ignores hover related styles
    <Container disableGutters style={containerStyles}>
      <Pressable
        accessibilityRole='button'
        {...restOfTheProps.pressableProps}
        style={generateStyles}
        disabled={restOfTheProps.disabled}
        onPress={onPressHandler}
      >
        {getIcon(restOfTheProps.icon)}
      </Pressable>
    </Container>
  );
};

export default IconButton;