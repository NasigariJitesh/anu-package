/* eslint-disable react-native/no-inline-styles */
import { Container, Divider, Typography } from 'anu/lib';
import React from 'react';

const DividerScreen = () => {
  return (
    <Container style={{ flex: 1 }}>
      <Container style={{ padding: 10 }}>
        <Typography.Title style={{ marginBottom: 5 }}>Divider - horizontal</Typography.Title>

        <Typography.Body>Item 1</Typography.Body>
        <Divider orientation='horizontal' variant='full-width' />
        <Typography.Body>Item 2</Typography.Body>
        <Divider orientation='horizontal' variant='left-inset' />
        <Typography.Body>Item 3</Typography.Body>
        <Divider orientation='horizontal' variant='right-inset' />
        <Typography.Body>Item 4</Typography.Body>
        <Divider orientation='horizontal' variant='middle' />
        <Typography.Body>Item 5</Typography.Body>
        <Divider orientation='horizontal' variant='middle' text='Divider' />
        <Typography.Body>Item 6</Typography.Body>
        <Divider orientation='horizontal' variant='middle' pattern='dashed' />
        <Typography.Body>Item 7</Typography.Body>
        <Divider orientation='horizontal' variant='middle' pattern='dotted' />
        <Typography.Body>Item 8</Typography.Body>
      </Container>
      <Container style={{ padding: 10 }}>
        <Typography.Title style={{ marginBottom: 5 }}>Divider - vertical</Typography.Title>
        <Container flexDirection='row' align='center' style={{ height: 50 }}>
          <Typography.Body>Item 1</Typography.Body>
          <Divider orientation='vertical' variant='full-height' />
          <Typography.Body>Item 2</Typography.Body>
          <Divider orientation='vertical' variant='top-inset' />
          <Typography.Body>Item 3</Typography.Body>
          <Divider orientation='vertical' variant='bottom-inset' />
          <Typography.Body>Item 4</Typography.Body>
          <Divider orientation='vertical' variant='middle' />
          <Typography.Body>Item 5</Typography.Body>
          <Divider orientation='vertical' variant='full-height' text='or' textStyle={{ width: 25 }} />
          <Typography.Body>Item 6</Typography.Body>
        </Container>
      </Container>
    </Container>
  );
};

export default DividerScreen;
