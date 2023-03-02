import { Pressable, View } from 'dripsy';
import Container from 'lib/primitives/layout/components';
import { createContext, useContext, useState } from 'react';

import { AccordionProps } from '../../types';
import { defaultProps } from './default';

const AccordionContext = createContext({
  collapse: false,
});

export const useAccordionContext = () => {
  return useContext(AccordionContext);
};

/**
 *
 * @param props
 * @returns
 */
const Accordion = (props: AccordionProps) => {
  const finalProps = { ...defaultProps, ...props };

  const [collapse, toggleCollapse] = useState(finalProps.collapse);

  const onCollapse = () => {
    toggleCollapse((previousState) => !previousState);

    if (props.onPress) props.onPress();
  };

  return (
    <AccordionContext.Provider value={{ collapse }}>
      <Container disableGutters {...props.containerProps} sx={props.sx} style={props.style}>
        <Pressable onPress={onCollapse}>
          <View>{finalProps.title}</View>
          {collapse ? null : <View>{finalProps.children}</View>}
        </Pressable>
      </Container>
    </AccordionContext.Provider>
  );
};

export default Accordion;
