import { Container, useStepIndicatorContext } from 'anu/lib';
import React from 'react';
import { StyleSheet } from 'react-native';

import { StepIndicatorProps } from '../types';
import { defaultProps } from './default';
import StepIndicatorHeader from './step-indicator-header';

const StepIndicator = (props: StepIndicatorProps) => {
  const finalProps = { ...defaultProps, ...props };

  const { children, divider, vertical, OnPress, navigateOnPress, labelPlacement, nonLinear, ...containerProps } =
    finalProps;

  const { activeStep } = useStepIndicatorContext();

  return (
    <Container disableGutters {...containerProps}>
      <StepIndicatorHeader
        navigateOnPress={navigateOnPress}
        OnPress={OnPress}
        steps={children}
        divider={divider}
        vertical={vertical}
        labelPlacement={labelPlacement}
        height={StyleSheet.flatten(containerProps.style)?.height}
        nonLinear={nonLinear}
      />

      {vertical ? null : children[activeStep - 1]}
    </Container>
  );
};

export default StepIndicator;
