import { StepIndicatorProps, StepProps } from '../types';

export const defaultProps: Omit<StepIndicatorProps, 'children'> = {
  vertical: false,
  nonLinear: false,
  navigateOnPress: true,
};

export const defaultStepProps: StepProps = {
  optionalLabel: 'Optional',
};
