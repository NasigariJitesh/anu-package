/* eslint-disable react-native/no-inline-styles */
import { Chip, Container } from 'anu/lib';
import React from 'react';

const ChipScreen = () => {
  return (
    <Container style={{ padding: 10 }}>
      <Chip type='assist' value='Assist' />
    </Container>
  );
};

export default ChipScreen;
