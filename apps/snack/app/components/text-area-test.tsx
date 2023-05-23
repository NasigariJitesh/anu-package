/* eslint-disable react-native/no-color-literals */
/* eslint-disable react-native/no-inline-styles */
import { Container, TextArea } from 'anu/lib';
import React, { useState } from 'react';

const TextAreaScreen = () => {
  const [text, setText] = useState('');
  const [text1, setText1] = useState('');
  return (
    <Container style={{ padding: 10 }}>
      <TextArea value={text} onChangeText={setText} />
      <TextArea
        variant='filled'
        value={text1}
        onChangeText={setText1}
        style={{ margin: 10 }}
        textStyle={{ color: 'red' }}
        error={() => text1 === 'error'}
      />
    </Container>
  );
};

export default TextAreaScreen;
