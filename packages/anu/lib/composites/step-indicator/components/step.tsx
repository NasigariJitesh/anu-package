import React from 'react';

import { Container } from '../../../primitives';
import { StepProps } from '../types';

const Step = (props: StepProps) => {
  return <Container disableGutters {...props} />;
};

export default Step;
