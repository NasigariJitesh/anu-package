import { Container, TouchableRipple } from 'anu/lib';
import { generateHoverStyles } from 'common/utils';
import { useTheme } from 'config/dripsy';
import { useSx } from 'dripsy';
import Typography from 'lib/primitives/typography';
import { GestureResponderEvent, PressableStateCallbackType } from 'react-native';

import { ChipProps } from '../../types';
import { getStyles } from '../../utils';
import { defaultProps } from './default';
import { LeadingIcon, TrailingIcon } from './icon';

/**
 * Function to render the Chip component with the styles
 *
 * @param {ChipProps} props - all the props related to the component
 */
const Chip = (props: Partial<ChipProps> & { value: string }) => {
  const restOfTheProps = { ...defaultProps, ...props };

  const theme = useTheme();
  const { styles, layerStyles } = getStyles(restOfTheProps, theme);

  const generateStyles = (state: PressableStateCallbackType) => {
    return generateHoverStyles(state, layerStyles, useSx);
  };

  const textStyle = {
    color: 'inherit',
    paddingHorizontal: '8px',
    cursor: 'inherit',
    fontFamily: 'inherit',
    fontWeight: 'inherit' as never,
  };

  return (
    //@ts-expect-error
    <Container disableGutters style={styles}>
      <TouchableRipple
        {...restOfTheProps}
        onPress={(event: GestureResponderEvent) => {
          if (restOfTheProps.onPress) restOfTheProps.onPress(event);
        }}
        style={generateStyles}
        disabled={props.disabled}
      >
        <>
          <LeadingIcon {...restOfTheProps} />
          <Typography.Label style={textStyle} size='large'>
            {props.value}
          </Typography.Label>

          <TrailingIcon {...restOfTheProps} />
        </>
      </TouchableRipple>
    </Container>
  );
};

export default Chip;
