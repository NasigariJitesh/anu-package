import Content from 'components/content';
import { stepIndicatorDocumentation } from 'services/docs/step-indicator';

const StepIndicator = () => {
  return <Content values={stepIndicatorDocumentation} />;
};

export default StepIndicator;
