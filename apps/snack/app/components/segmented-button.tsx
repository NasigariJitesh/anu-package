/* eslint-disable react-native/no-inline-styles */
import { Container, SegmentedButton, SegmentedButtonGroup, Typography } from 'anu/lib';
import React from 'react';

const SegmentedButtonScreen = () => {
  return (
    <Container style={{ padding: 10, flex: 1, width: '100%' }}>
      <Typography.Title style={{ marginBottom: 5 }}>Segmented Button</Typography.Title>
      <SegmentedButtonGroup multiSelect containerStyle={{ width: '100%' }}>
        <SegmentedButton id='segmentedButton1' title='Button 1' />
        <SegmentedButton id='segmentedButton2' title='Button 2' />
        <SegmentedButton id='segmentedButton3' title='Button 3' icon={{ name: 'person' }} />
        <SegmentedButton id='segmentedButton4' title='Button 4' icon={{ name: 'add' }} disabled />
      </SegmentedButtonGroup>
    </Container>
  );
};

export default SegmentedButtonScreen;
