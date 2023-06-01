import { Container } from 'anu/lib/primitives';
import React from 'react';
import { GestureResponderEvent } from 'react-native';

import { useStepIndicatorContext } from '../context';
import { StepHeaderProps, StepProps } from '../types';
import { getStepIndicatorHeaderStyles } from '../utils';
import StepIndicatorHeaderItem from './step-indicator-header-item';

const checkIfStepCanBeSkipped = (props?: StepProps) => {
  return (props?.completed && !props?.error) || props?.notApplicable || props?.optional;
};

const StepIndicatorHeader = (props: StepHeaderProps) => {
  const styles = getStepIndicatorHeaderStyles(props);

  const { changeTo, activeStep } = useStepIndicatorContext();

  const onPressHandler = (event: GestureResponderEvent, step: number) => {
    if (props.navigateOnPress) {
      if (props.nonLinear || (step < activeStep && props.steps[step - 1]?.props.editable)) {
        changeTo(step);
        if (props.OnPress) props.OnPress(event, activeStep, step);
      } else if (step > activeStep) {
        let flag = true;
        for (let index = activeStep - 1; index < step - 1; index++) {
          if (!checkIfStepCanBeSkipped(props.steps[index]?.props)) {
            flag = false;
            break;
          }
        }
        if (flag) {
          changeTo(step);
          if (props.OnPress) props.OnPress(event, activeStep, step);
        }
      }
    } else {
      if (props.OnPress) props.OnPress(event, activeStep, step);
    }
  };

  return (
    <Container disableGutters style={{ ...styles.container, ...(props.vertical ? { height: props.height } : {}) }}>
      {props.steps.map((step, index) => (
        <StepIndicatorHeaderItem
          item={step}
          key={index}
          index={index}
          divider={props.divider}
          vertical={props.vertical}
          onPressHandler={onPressHandler}
          labelPlacement={props.labelPlacement}
          navigateOnPress={props.navigateOnPress ?? props.OnPress !== undefined}
        />
      ))}
    </Container>
  );
};

export default StepIndicatorHeader;
