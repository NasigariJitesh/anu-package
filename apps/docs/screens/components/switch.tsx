import Content from 'components/content';
import { switchDocumentation } from 'services/docs/switch';

const Switch = () => {
  return <Content values={switchDocumentation} />;
};

export default Switch;
