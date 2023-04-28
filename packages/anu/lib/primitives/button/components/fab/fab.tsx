import { useTheme } from 'anu/config';
import { generateHoverStyles } from 'common/utils';
import { useSx } from 'dripsy';
import { Container, TouchableRipple } from 'lib/primitives';
import Icon from 'lib/primitives/icon';
import { ReactElement } from 'react';
import { GestureResponderEvent, PressableStateCallbackType } from 'react-native';

import { FABProps, IconType } from '../../types';
import { getFABStyles } from '../../utils';
import { defaultProps } from './default';

/**
 * Function to render the FAB component with the styles
 *
 * @param {FABProps} props - all the props related to the component
 */
const FAB = (props: FABProps) => {
  const restOfTheProps = { ...defaultProps, ...props };

  const theme = useTheme();

  const { containerStyles, pressableStyles, iconStyles } = getFABStyles(restOfTheProps, theme);

  const generateStyles = (state: PressableStateCallbackType) => {
    return generateHoverStyles(state, pressableStyles, useSx);
  };

  const getIcon = (icon: IconType | ReactElement) => {
    const { size, ...otherIconStyles } = iconStyles;

    return 'name' in icon ? (
      <Icon size={size} style={otherIconStyles} name={icon.name as never} {...icon.props} />
    ) : (
      icon
    );
  };

  return (
    // @ts-expect-error REASON: we get ts error but react native ignores hover related styles
    <Container disableGutters style={containerStyles}>
      <TouchableRipple
        accessibilityRole='button'
        {...restOfTheProps.pressableProps}
        onPress={(event: GestureResponderEvent) => {
          if (restOfTheProps.onPress) restOfTheProps.onPress(event);
        }}
        style={generateStyles}
      >
        {getIcon(restOfTheProps.icon)}
      </TouchableRipple>
    </Container>
  );
};

export default FAB;
