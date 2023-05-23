import { generateHoverStyles, getCombinedStylesForText } from 'anu/common/utils';
import { useTheme } from 'anu/config';
import { Container, TouchableRipple } from 'anu/lib';
import Typography from 'anu/lib/primitives/typography';
import { useSx } from 'dripsy';
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
    paddingHorizontal: 8,
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
          <Typography.Label style={getCombinedStylesForText(textStyle, props.labelStyle)} size='large'>
            {props.value}
          </Typography.Label>

          <TrailingIcon {...restOfTheProps} />
        </>
      </TouchableRipple>
    </Container>
  );
};

export default Chip;
