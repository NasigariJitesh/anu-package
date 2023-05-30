import Content from 'components/content';
import { accordionDocumentation } from 'services/docs/accordion';

const Accordion = () => {
  return <Content values={accordionDocumentation} />;
};

export default Accordion;
