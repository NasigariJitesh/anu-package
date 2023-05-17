import { Container, Divider, Typography } from 'anu/lib';
import React from 'react';

const DividerScreen = () => {
  return (
    <Container>
      <Typography.Body>Item 1</Typography.Body>
      <Divider orientation='horizontal' variant='full-width' />
      <Typography.Body>Item 2</Typography.Body>
    </Container>
  );
};

export default DividerScreen;
