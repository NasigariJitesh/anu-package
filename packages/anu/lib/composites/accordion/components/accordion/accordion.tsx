/* eslint-disable react-native/no-inline-styles */
import { useTheme } from 'anu/config';
import { CollapsibleContainer, getAccordionStyles, useCollapsible } from 'anu/lib';
import { Container } from 'anu/lib/primitives/layout/components/container/container';
import { Pressable } from 'dripsy';
import { createContext, useContext, useState } from 'react';
import { Extrapolate, interpolate, useAnimatedStyle } from 'react-native-reanimated';

import { getCombinedStylesForView } from '../../../../../common/utils';
import { AccordionProps } from '../../types';
import { defaultProps } from './default';

/**
 * This needs to be used because collapse is used in header component
 */
const AccordionContext = createContext({
  collapse: false,
  animatedHeight: { value: 0 },
  height: 0,
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

  const { animatedHeight, height, onPress, onLayout } = useCollapsible({
    defaultState: finalProps.collapse ? 'collapsed' : 'expanded',
  });

  const theme = useTheme();

  const styles = getAccordionStyles(theme);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(animatedHeight.value, [0, height], [0, 1], Extrapolate.CLAMP),
      transform: [
        {
          translateY: interpolate(animatedHeight.value, [0, height], [-50, 0], Extrapolate.CLAMP),
        },
      ],
      paddingTop: finalProps.spacing,
    };
  }, [animatedHeight, interpolate, Extrapolate, height]);

  const onCollapse = () => {
    toggleCollapse((previousState) => !previousState);

    onPress();

    if (props.onPress) props.onPress();
  };

  return (
    <AccordionContext.Provider value={{ collapse, animatedHeight, height }}>
      <Container
        disableGutters
        {...finalProps.containerProps}
        style={getCombinedStylesForView(styles.container, finalProps.style)}
      >
        <Pressable sx={styles.pressable} onPress={onCollapse}>
          <Container disableGutters style={styles.titleContainer}>
            {finalProps.title}
          </Container>
        </Pressable>

        <CollapsibleContainer
          animatedHeight={animatedHeight}
          onLayout={onLayout}
          state={finalProps.collapse ? 'collapsed' : 'expanded'}
          style={animatedStyle}
        >
          {props.children}
        </CollapsibleContainer>
      </Container>
    </AccordionContext.Provider>
  );
};

export default Accordion;
