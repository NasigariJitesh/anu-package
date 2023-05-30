/* eslint-disable react-native/no-inline-styles */
import { getCombinedStylesForView } from 'anu/common/utils';
import { useTheme } from 'anu/config';
import { CollapsibleContainer, getAccordionStyles, useCollapsible } from 'anu/lib';
import { Container } from 'anu/lib/primitives/layout/components/container/container';
import { Pressable } from 'dripsy';
import { createContext, useContext, useEffect } from 'react';
import { Extrapolate, interpolate, useAnimatedStyle } from 'react-native-reanimated';

import { AccordionProps } from '../../types';
import { defaultProps } from './default';

/**
 * This needs to be used because collapse is used in header component
 */
const AccordionContext = createContext({
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

  const { title, children, collapse, onPress: propOnPress, spacing, ...containerProps } = finalProps;

  const { animatedHeight, height, state, onPress, onLayout } = useCollapsible({
    defaultState: collapse ? 'collapsed' : 'expanded',
  });

  useEffect(() => {
    onPress(collapse);
  }, [collapse, onPress]);

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
      paddingTop: spacing,
    };
  }, [animatedHeight, interpolate, Extrapolate, height]);

  const onCollapse = () => {
    onPress();

    if (propOnPress) propOnPress();
  };

  return (
    <AccordionContext.Provider value={{ animatedHeight, height }}>
      <Container
        disableGutters
        {...containerProps}
        style={getCombinedStylesForView(styles.container, containerProps.style)}
      >
        <Pressable sx={styles.pressable} onPress={onCollapse}>
          <Container disableGutters style={styles.titleContainer}>
            {title}
          </Container>
        </Pressable>

        <CollapsibleContainer animatedHeight={animatedHeight} onLayout={onLayout} state={state} style={animatedStyle}>
        {children}
        </CollapsibleContainer>
      </Container>
    </AccordionContext.Provider>
  );
};

export default Accordion;
