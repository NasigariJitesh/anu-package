/* eslint-disable react-native/no-inline-styles */
import { Container, PhoneInput } from 'anu/lib';
import React, { useState } from 'react';

const PhoneInputScreen = () => {
  const [text, setText] = useState('');

  return (
    <Container style={{ padding: 10, flex: 1 }}>
      <PhoneInput value={text} onChangeText={setText} />
      <PhoneInput value={text} onChangeText={setText} variant='outlined' style={{ width: 250, height: 100 }} />
    </Container>
  );
};

export default PhoneInputScreen;
