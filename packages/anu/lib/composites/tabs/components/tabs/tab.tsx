import { Container } from 'anu/lib';

import { TabProps } from '../../types';

const Tab = (props: TabProps) => {
  return (
    <Container disableGutters {...props}>
      {props.children}
    </Container>
  );
};

export default Tab;
