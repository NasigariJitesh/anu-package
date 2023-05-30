import Content from 'components/content';
import { accordionChildrenDocumentation } from 'services/docs/accordion-children';

const AccordionChildren = () => {
  return <Content values={accordionChildrenDocumentation} />;
};

export default AccordionChildren;
