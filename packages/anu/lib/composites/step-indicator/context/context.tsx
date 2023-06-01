/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { createContext, useContext, useEffect, useState } from 'react';

import { StepIndicatorContextData } from '../types';

const StepIndicatorContext = createContext<StepIndicatorContextData>({
  activeStep: 1,
  totalSteps: 1,
  next: () => {},
  previous: () => {},
  changeTo: (to: number) => {},
});

/**
 *
 */
export function useStepIndicatorContext() {
  return useContext(StepIndicatorContext);
}

/**
 *
 * @param root0
 * @param root0.children
 * @param root0.initialActiveStep - the initial active step of step indicator
 * @param root0.totalSteps - the total number of  steps of step indicator
 */
function StepIndicatorProvider({
  children,
  initialActiveStep,
  totalSteps,
}: {
  children: React.ReactNode;
  initialActiveStep?: number;
  totalSteps: number;
}) {
  const [activeStep, setActiveStep] = useState(initialActiveStep ?? 1);

  const changeTo = (to: number) => {
    if (to <= totalSteps || to > 0) setActiveStep(to);
  };
  const next = () => {
    if (activeStep < totalSteps) setActiveStep((active) => active + 1);
  };
  const previous = () => {
    if (activeStep > 1) setActiveStep((active) => active - 1);
  };

  return (
    <StepIndicatorContext.Provider
      value={{
        activeStep,
        totalSteps,
        next,
        previous,
        changeTo,
      }}
    >
      {children}
    </StepIndicatorContext.Provider>
  );
}

export { StepIndicatorContext, StepIndicatorProvider };
