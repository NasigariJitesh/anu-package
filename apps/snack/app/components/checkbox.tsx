/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-native/no-color-literals */
import { Checkbox, Container, Typography } from 'anu/lib';
import React from 'react';

const CheckboxScreen = () => {
  return (
    <Container style={{ width: '100%', padding: 10 }}>
      <Container style={{ width: '100%', padding: 10 }}>
        <Typography.Title style={{ marginBottom: 5 }}>Checkbox</Typography.Title>

        <Checkbox id='basic' />
      </Container>
      <Container style={{ width: '100%', padding: 10 }}>
        <Typography.Title style={{ marginBottom: 5 }}>Checkbox - indeterminate</Typography.Title>

        <Checkbox id='indeterminate' indeterminate />
      </Container>
    </Container>
  );
};

export default CheckboxScreen;
