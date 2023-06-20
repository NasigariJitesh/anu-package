/* eslint-disable react-native/no-inline-styles */
import { Container, PhoneInput, Typography } from 'anu/lib';
import React, { useState } from 'react';

const PhoneInputScreen = () => {
  const [text, setText] = useState('');
  const [text1, setText1] = useState('');

  return (
    <Container style={{ flex: 1, width: '100%' }}>
      <Container style={{ padding: 10, width: '100%', height: 100 }}>
        <Typography.Title style={{ marginBottom: 5 }}>Outlined Phone Input</Typography.Title>
        <PhoneInput value={text} onChangeText={setText} variant='outlined' />
      </Container>
      <Container style={{ padding: 10, width: '100%', height: 100 }}>
        <Typography.Title style={{ marginBottom: 5 }}>Filled Phone Input</Typography.Title>
        <PhoneInput value={text1} onChangeText={setText1} variant='filled' />
      </Container>
    </Container>
  );
};

export default PhoneInputScreen;
