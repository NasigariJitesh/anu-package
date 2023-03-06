import { generateHoverStyles } from 'common/utils';
import { Pressable, useSx } from 'dripsy';
import { Container } from 'lib/index';
import Typography from 'lib/primitives/typography';
import { PressableStateCallbackType } from 'react-native';

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

  const { styles, layerStyles } = getStyles(restOfTheProps);

  const generateStyles = (state: PressableStateCallbackType) => {
    return generateHoverStyles(state, layerStyles, useSx);
  };

  const textStyle = { color: 'inherit', paddingHorizontal: '8px' };

  return (
    //@ts-expect-error
    <Container disableGutters style={styles}>
      <Pressable {...restOfTheProps} style={generateStyles} disabled={props.disabled}>
        <LeadingIcon {...restOfTheProps} />
        <Typography.Label style={textStyle} size='large'>
          {props.value}
        </Typography.Label>

        <TrailingIcon {...restOfTheProps} />
      </Pressable>
    </Container>
  );
};

export default Chip;
