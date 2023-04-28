import { useTheme } from 'anu/config';
import { generateHoverStyles, getCombinedStylesForText } from 'common/utils';
import { useSx } from 'dripsy';
import { Container, TouchableRipple, Typography } from 'lib/primitives';
import Icon from 'lib/primitives/icon';
import { ReactElement } from 'react';
import { GestureResponderEvent, PressableStateCallbackType } from 'react-native';

import { ExtendedFABProps, IconType } from '../../types';
import { getExtendedFABStyles } from '../../utils';
import { defaultProps } from './default';

/**
 * Function to render the Extended FAB component with the styles
 *
 * @param {ExtendedFABProps} props - all the props related to the component
 */
const ExtendedFAB = (props: ExtendedFABProps) => {
  const restOfTheProps = { ...defaultProps, ...props };

  const theme = useTheme();
  const { containerStyles, pressableStyles, iconStyles, labelStyles } = getExtendedFABStyles(restOfTheProps, theme);

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
        <>
          {restOfTheProps.icon ? getIcon(restOfTheProps.icon) : null}
          <Typography.Label style={getCombinedStylesForText(labelStyles, restOfTheProps.titleStyle)}>
            {restOfTheProps.title}
          </Typography.Label>
        </>
      </TouchableRipple>
    </Container>
  );
};

export default ExtendedFAB;
