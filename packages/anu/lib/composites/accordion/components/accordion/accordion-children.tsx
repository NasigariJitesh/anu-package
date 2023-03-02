import { Container } from 'lib/primitives/layout/components/container/container';

import { AccordionChildrenProps } from '../../types';
import { getChildrenStyles } from '../../utils';

/**
 * Children component for Accordion
 *
 * @param props - children props for accordion
 */
const AccordionChildren = (props: AccordionChildrenProps) => {
  const style = getChildrenStyles();

  return (
    <Container disableGutters sx={{ ...style, ...props.sx }}>
      {props.children}
    </Container>
  );
};

export default AccordionChildren;
