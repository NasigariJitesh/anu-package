/* eslint-disable react-native/no-inline-styles */
import { Container, OTPInput } from 'anu/lib';
import React, { useState } from 'react';

const OTPInputScreen = () => {
  const [text, setText] = useState('');

  return (
    <Container style={{ padding: 10, flex: 1 }}>
      <OTPInput value={text} onValueChange={setText} variant='outlined' numberOfDigits={4} />
    </Container>
  );
};

export default OTPInputScreen;
