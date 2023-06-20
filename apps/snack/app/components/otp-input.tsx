/* eslint-disable react-native/no-inline-styles */
import { Container, OTPInput, Typography } from 'anu/lib';
import React, { useState } from 'react';

const OTPInputScreen = () => {
  const [text, setText] = useState('');
  const [text1, setText1] = useState('');

  return (
    <Container style={{ flex: 1 }}>
      <Container style={{ padding: 10, width: '100%' }}>
        <Typography.Title style={{ marginBottom: 5 }}>Outlined OTP Input</Typography.Title>

        <OTPInput value={text} onValueChange={setText} variant='outlined' numberOfDigits={4} />
      </Container>
      <Container style={{ padding: 10, width: '100%' }}>
        <Typography.Title style={{ marginBottom: 5 }}>Filled OTP Input</Typography.Title>

        <OTPInput value={text1} onValueChange={setText1} variant='filled' numberOfDigits={6} />
      </Container>
    </Container>
  );
};

export default OTPInputScreen;
