/* eslint-disable react-native/no-inline-styles */
import { Container, PhoneInput } from 'anu/lib';
import React, { useState } from 'react';

const PhoneInputScreen = () => {
  const [text, setText] = useState('');

  return (
    <Container style={{ padding: 10 }}>
      <PhoneInput value={text} onChangeText={setText} />
    </Container>
  );
};

export default PhoneInputScreen;
