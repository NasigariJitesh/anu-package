/* eslint-disable react-native/no-inline-styles */
import { Container, ExtendedFAB, Typography } from 'anu/lib';
import React from 'react';

const ExtendedFABScreen = () => {
  return (
    <Container style={{ paddingHorizontal: 20, paddingVertical: 10, flex: 1 }}>
      <Typography.Title style={{ marginBottom: 5 }}>Extended FAB</Typography.Title>

      <ExtendedFAB title='Contact' icon={{ name: 'phone' }} />
      <Typography.Title style={{ marginBottom: 5, marginTop: 10 }}>Extended FAB - lowered</Typography.Title>

      <ExtendedFAB title='Contact' icon={{ name: 'phone' }} lowered />
    </Container>
  );
};

export default ExtendedFABScreen;
