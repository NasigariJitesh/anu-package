/* eslint-disable react-native/no-inline-styles */
import { Container, OTPInput } from 'anu/lib';
import React, { useState } from 'react';

const OTPInputScreen = () => {
  const [text, setText] = useState('');

  return (
    <Container>
      <Container style={{ padding: 10 }}>
        <OTPInput value={text} onValueChange={setText} variant='outlined' numberOfDigits={4} />
      </Container>
      <Container style={{ padding: 10 }}>
        <OTPInput value={text} onValueChange={setText} variant='filled' numberOfDigits={4} />
      </Container>
    </Container>
  );
};

export default OTPInputScreen;
