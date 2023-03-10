import { Container } from 'lib/primitives';
import { useState } from 'react';

import { SegmentedButtonGroupProps } from '../../types/segmented-button';

/**
 * The Segmented Button Group component
 *
 * @param props - the properties of the Radio Button Group component
 */
export const SegmentedButtonGroup = (props: SegmentedButtonGroupProps) => {
  const [selected, setSelected] = useState<string | string[]>(props.selected ?? props.multiSelect ? [] : '');

  const onPressHandler = (value: string) => {
    if (props.onPress) props.onPress(value);

    if (props.multiSelect && Array.isArray(selected)) {
      const selectedValues = [...selected];

      const index = selectedValues.indexOf(value);

      if (index > -1) selectedValues.splice(index, 1);
      else selectedValues.push(value);

      setSelected([...selectedValues]);
    } else setSelected((previous) => (previous === value ? '' : value));
  };

  if (props.children.length > 5) throw new Error('Maximum of 5 SegmentedButtons are allowed');

  return (
    <Container disableGutters flexDirection='row' align='center' justify='center' style={props.containerStyle}>
      {props.children.map((c, index): React.ReactElement => {
        // if (typeof c.type !== 'string' && c.type.name === 'SegmentedButton') {
        let p;
        p = { ...c.props, selected: selected, onSelect: onPressHandler };
        if (index === 0) p = { ...p, isFirst: true };
        else if (index === props.children.length - 1) p = { ...p, isLast: true };

        return { ...c, props: p };
        // } else {
        //   throw new Error('Only SegmentedButton components can be children');
        // }
      })}
    </Container>
  );
};
