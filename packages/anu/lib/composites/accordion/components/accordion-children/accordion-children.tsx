import { Container } from 'lib/primitives/layout/components/container/container';

import { AccordionChildrenProps } from '../../types';
import { getChildrenStyles } from '../../utils';

const AccordionChildren = (props: AccordionChildrenProps) => {
  const style = getChildrenStyles(props);

  return (
    <Container disableGutters sx={{ ...style, ...props.sx }}>
      {props.children}
    </Container>
  );
};

export default AccordionChildren;
