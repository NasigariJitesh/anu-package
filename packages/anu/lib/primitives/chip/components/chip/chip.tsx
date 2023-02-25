import { generateHoverStyles } from 'common/utils';
import { Pressable, useSx } from 'dripsy';
import Typography from 'lib/primitives/typography';
import { PressableStateCallbackType } from 'react-native';

import { ChipProps } from '../../types';
import { getChipStyles } from '../../utils';
import { defaultProps } from './default';
import { LeadingIcon, TrailingIcon } from './icon';

/**
 * Function to render the Chip component with the styles
 *
 * @param {ChipProps} props - all the props related to the component
 */
const Chip = (props: Partial<ChipProps> & { value: string }) => {
  const restOfTheProps = { ...defaultProps, ...props };

  const generateStyles = (state: PressableStateCallbackType) => {
    const chipStyles = getChipStyles(restOfTheProps);

    return generateHoverStyles(state, chipStyles, useSx);
  };

  const textStyle = { color: 'inherit' };

  return (
    <Pressable {...restOfTheProps} style={generateStyles} disabled={props.disabled}>
      <LeadingIcon {...restOfTheProps} />
      <Typography.Label style={textStyle} size='large'>
        {props.value}
      </Typography.Label>
      <TrailingIcon {...restOfTheProps} />
    </Pressable>
  );
};

export default Chip;
