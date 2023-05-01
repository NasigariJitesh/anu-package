import { Container } from 'anu/lib/primitives';
import { isArray } from 'lodash';
import { ReactElement, useState } from 'react';

import { RadioButtonGroupProps } from '../../types';

/**
 *
 * @param c - React Radio Component
 * @param selected - selected state representing the radio that is currently selected
 * @param onPressHandler - state change handler
 * @returns - React Component with updated props
 */
const addPropsToEachRadio = (c: ReactElement, selected: string, onPressHandler: (value: string) => void) => {
  // if (typeof c.type !== 'string' && c.type.name === 'Radio') {
  const p = { ...c.props, selected: selected, onPress: onPressHandler };

  return { ...c, props: p };
  // } else {
  //   throw new Error('Only Radio components can be children');
  // }
};

/**
 * The Radio Button Group component
 *
 * @param props - the properties of the Radio Button Group component
 */
export const RadioButtonGroup = (props: RadioButtonGroupProps) => {
  const [selected, setSelected] = useState(props.selected || '');

  const onPressHandler = (value: string) => {
    if (props.onPress) props.onPress(value);
    setSelected(value);
  };

  return isArray(props.children) ? (
    <Container disableGutters flexDirection={props.flexDirection} align={props.align} justify={props.justify}>
      {props.children.map((c) => {
        return addPropsToEachRadio(c, selected, onPressHandler);
      })}
    </Container>
  ) : (
    <Container disableGutters flexDirection={props.flexDirection} align={props.align} justify={props.justify}>
      {addPropsToEachRadio(props.children, selected, onPressHandler)}
    </Container>
  );
};
