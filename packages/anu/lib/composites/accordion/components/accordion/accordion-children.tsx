import { Container } from 'anu/lib/primitives/layout';

import { AccordionChildrenProps } from '../../types';

/**
 * Children component for Accordion
 *
 * @param props - children props for accordion
 */
const AccordionChildren = (props: AccordionChildrenProps) => {
  return (
    <Container disableGutters {...props}>
      {props.children}
    </Container>
  );
};

export default AccordionChildren;
