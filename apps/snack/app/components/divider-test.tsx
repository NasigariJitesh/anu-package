/* eslint-disable react-native/no-color-literals */
/* eslint-disable react-native/no-inline-styles */
import { Container, Divider, Typography } from 'anu/lib';
import React from 'react';

const DividerScreen = () => {
  return (
    <Container align='center'>
      <Typography.Body>Item 1</Typography.Body>
      <Divider align='end' text='or' orientation='horizontal' variant='full-width' style={{ width: 150 }} />
      <Typography.Body>Item 2</Typography.Body>
      <Divider align='start' text='or' orientation='horizontal' variant='full-width' />
      <Typography.Body>Item 3</Typography.Body>
      <Container flexDirection='row' align='center' style={{ height: 150 }}>
        <Typography.Body>Item 1</Typography.Body>
        <Divider align='end' orientation='vertical' variant='full-height' style={{ height: 50 }}>
          <Container
            disableGutters
            flexDirection='row'
            align='center'
            style={{ width: 10, height: 10, backgroundColor: 'red' }}
          />
        </Divider>
        <Typography.Body>Item 2</Typography.Body>
      </Container>
    </Container>
  );
};

export default DividerScreen;
