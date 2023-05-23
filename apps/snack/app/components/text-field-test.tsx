/* eslint-disable react-native/no-color-literals */
/* eslint-disable react-native/no-inline-styles */
import { Container, TextField } from 'anu/lib';
import React, { useState } from 'react';

const TextFieldScreen = () => {
  const [text, setText] = useState('');
  const [text1, setText1] = useState('');
  return (
    <Container style={{ flex: 1, padding: 10 }}>
      <TextField value={text} onChangeText={setText} hideClearButton />
      <TextField
        variant='filled'
        value={text1}
        onChangeText={setText1}
        textStyle={{ color: 'red' }}
        error={() => text1 === 'error'}
      />
    </Container>
  );
};

export default TextFieldScreen;
