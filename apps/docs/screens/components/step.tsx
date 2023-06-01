import Content from 'components/content';
import { stepDocumentation } from 'services/docs/step';

const Step = () => {
  return <Content values={stepDocumentation} />;
};

export default Step;
