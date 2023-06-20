/* eslint-disable react-native/no-inline-styles */
import { Card, Container, TouchableRipple, Typography } from 'anu/lib';
import React from 'react';

const TouchableRippleScreen = () => {
  return (
    <Container style={{ flex: 1, padding: 10 }}>
      <Typography.Title style={{ marginBottom: 5 }}>Touchable Ripple</Typography.Title>

      <TouchableRipple style={{ borderRadius: 12 }}>
        <Card variant='filled' width={280} style={{ height: 280 }} />
      </TouchableRipple>
    </Container>
  );
};

export default TouchableRippleScreen;
