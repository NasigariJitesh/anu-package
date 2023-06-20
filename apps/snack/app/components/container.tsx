/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-native/no-color-literals */
import { Container, Typography } from 'anu/lib';
import React from 'react';

const ContainerScreen = () => {
  return (
    <Container>
      <Typography.Title style={{ marginBottom: 5, marginTop: 10 }}>Container</Typography.Title>
      <Container style={{ backgroundColor: 'grey', width: '100%', height: 300 }} />
    </Container>
  );
};

export default ContainerScreen;
