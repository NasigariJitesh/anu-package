/* eslint-disable react-native/no-inline-styles */
import { Container, TextArea } from 'anu/lib';
import React, { useState } from 'react';

const TextAreaScreen = () => {
  const [text, setText] = useState('');
  return (
    <Container style={{ padding: 10 }}>
      <TextArea value={text} onChangeText={setText} />
    </Container>
  );
};

export default TextAreaScreen;
