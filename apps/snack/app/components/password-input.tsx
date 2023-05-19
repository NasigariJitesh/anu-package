/* eslint-disable react-native/no-inline-styles */
import { Container, PasswordInput } from 'anu/lib';
import React, { useState } from 'react';

const PasswordInputScreen = () => {
  const [text, setText] = useState('');

  return (
    <Container style={{ padding: 10 }}>
      <PasswordInput value={text} onChangeText={setText} />
    </Container>
  );
};

export default PasswordInputScreen;
