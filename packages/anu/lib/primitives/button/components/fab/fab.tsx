import { generateHoverStyles } from 'anu/common/utils';
import { useTheme } from 'anu/config';
import { Container, TouchableRipple } from 'anu/lib/primitives';
import Icon from 'anu/lib/primitives/icon';
import { useSx } from 'dripsy';
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
      <Icon
        size={size}
        style={otherIconStyles}
        name={icon.name as never}
        {...icon.props}
        dataSet={restOfTheProps.dataSets?.iconDataSet}
      />
    ) : (
      icon
    );
  };

  return (
    // @ts-expect-error REASON: we get ts error but react native ignores hover related styles
    <Container disableGutters style={containerStyles} dataSet={restOfTheProps.dataSets?.containerDataSet}>
      <TouchableRipple
        accessibilityRole='button'
        {...restOfTheProps.pressableProps}
        onPress={(event: GestureResponderEvent) => {
          if (restOfTheProps.onPress) restOfTheProps.onPress(event);
        }}
        style={generateStyles}
        dataSet={restOfTheProps.dataSets?.containerDataSet}
      >
        {getIcon(restOfTheProps.icon)}
      </TouchableRipple>
    </Container>
  );
};

export default FAB;
