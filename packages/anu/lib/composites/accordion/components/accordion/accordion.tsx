/* eslint-disable react-native/no-inline-styles */
import { TouchableRipple } from 'anu/lib';
import { Container } from 'lib/primitives/layout/components/container/container';
import { createContext, useContext, useState } from 'react';
import { Animated, View } from 'react-native';

import { AccordionProps } from '../../types';
import { defaultProps } from './default';

/**
 * This needs to be used because collapse is used in header component
 */
const AccordionContext = createContext({
  collapse: false,
});

export const useAccordionContext = () => {
  return useContext(AccordionContext);
};

/**
 * Accordion Component
 *
 * TODO: Add Animations
 *
 * @param props - Accordion props
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
      <Container disableGutters {...finalProps.containerProps} style={finalProps.style}>
        <TouchableRipple sx={{ transition: 'all 2s linear' }} onPress={onCollapse}>
          <View>{finalProps.title}</View>
        </TouchableRipple>
        {collapse ? null : <Animated.View>{props.children}</Animated.View>}
      </Container>
    </AccordionContext.Provider>
  );
};

export default Accordion;
