import { ReactChildren } from 'anu/common/types';
import { ContainerProps } from 'anu/lib';
import { ReactElement } from 'react';
import { GestureResponderEvent, StyleProp, TextStyle } from 'react-native';

export interface StepIndicatorContextData {
  activeStep: number;
  totalSteps: number;
  next: () => void;
  previous: () => void;
  changeTo: (to: number) => void;
}

export interface StepIndicatorProps extends ContainerProps {
  /**
   * The Individual Step Components
   */
  children: ReactElement<StepProps>[];
  /**
   * Custom divider component for the step indicator
   */
  divider?: ReactChildren;
  /**
   * whether the orientation of step indicator is vertical
   */
  vertical?: boolean;
  /**
   * Whether the steps can be proceeded in non linear order
   */
  nonLinear?: boolean;
  /**
   * If true, navigates to particular step when clicked on the step details in step indicator
   */
  navigateOnPress?: boolean;
  /**
   * Callback function to be executed when step details are pressed.
   */
  OnPress?: (event: GestureResponderEvent, currentStep?: number, TargetStep?: number) => void;
  /**
   * Placement of the label in the step details
   */
  labelPlacement?: 'in-line' | 'below';
}

export interface StepProps extends ContainerProps {
  /**
   * Whether the step has error
   */
  error?: boolean;
  /**
   * Whether the step is not applicable
   */
  notApplicable?: boolean;
  /**
   * Whether the step is optional
   */
  optional?: boolean;
  /**
   * Whether the step is completed
   */
  completed?: boolean;
  /**
   * Whether the step is editable
   */
  editable?: boolean;
  /**
   * Custom name for the step
   */
  name?: string;
  /**
   * Styles for the name of the step
   */
  nameStyle?: StyleProp<TextStyle>;
  /**
   * Custom icon component for the step
   */
  icon?: ReactElement;
  /**
   * Custom label component for the optional indicator
   */
  optionalLabel?: ReactChildren;
}

export interface StepHeaderProps {
  steps: ReactElement<StepProps>[];
  divider?: ReactChildren;
  vertical?: boolean;
  navigateOnPress?: boolean;
  OnPress?: (event: GestureResponderEvent, currentStep?: number, TargetStep?: number) => void;
  labelPlacement?: 'in-line' | 'below';
  height?: string | number;
  nonLinear?: boolean;
}

export interface StepHeaderItemProps {
  item: ReactElement<StepProps>;
  divider?: ReactChildren;
  vertical?: boolean;
  index: number;
  navigateOnPress?: boolean;
  onPressHandler: (event: GestureResponderEvent, step: number) => void;
  labelPlacement?: 'in-line' | 'below';
}
