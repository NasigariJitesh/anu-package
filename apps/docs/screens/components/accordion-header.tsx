import Content from 'components/content';
import { accordionHeaderDocumentation } from 'services/docs/accordion-header';

const AccordionHeader = () => {
  return <Content values={accordionHeaderDocumentation} />;
};

export default AccordionHeader;
