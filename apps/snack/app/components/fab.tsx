/* eslint-disable react-native/no-inline-styles */
import { Container, FAB, Typography } from 'anu/lib';
import React from 'react';

const FABScreen = () => {
  return (
    <Container style={{ paddingHorizontal: 20, paddingVertical: 10, flex: 1 }}>
      <Typography.Title style={{ marginBottom: 5 }}>FAB</Typography.Title>
      <FAB FABColor='primary' icon={{ name: 'phone' }} />
      <Typography.Title style={{ marginBottom: 5, marginTop: 10 }}>FAB - small</Typography.Title>
      <FAB FABColor='primary' icon={{ name: 'phone' }} size='small' />
      <Typography.Title style={{ marginBottom: 5, marginTop: 10 }}>FAB - large</Typography.Title>
      <FAB FABColor='primary' icon={{ name: 'phone' }} size='large' />
    </Container>
  );
};

export default FABScreen;
