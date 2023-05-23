/* eslint-disable react-native/no-inline-styles */
import { Container, TextField } from 'anu/lib';
import React, { useState } from 'react';

const TextFieldScreen = () => {
  const [text, setText] = useState('');
  return (
    <Container style={{ padding: 10 }}>
      <TextField value={text} onChangeText={setText} />
    </Container>
  );
};

export default TextFieldScreen;
