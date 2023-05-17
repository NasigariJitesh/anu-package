/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-native/no-color-literals */
import { Container } from 'anu/lib';
import React from 'react';

const ContainerScreen = () => {
  return (
    <Container>
      <Container style={{ backgroundColor: 'grey', width: '100%', height: 300 }} sx={{ backgroundColor: 'pink' }} />
    </Container>
  );
};

export default ContainerScreen;
