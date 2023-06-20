/* eslint-disable react-native/no-inline-styles */
import { Container, TextArea, Typography } from 'anu/lib';
import React, { useState } from 'react';

const TextAreaScreen = () => {
  const [text, setText] = useState('');
  const [text1, setText1] = useState('');
  return (
    <Container style={{ flex: 1, width: '100%' }}>
      <Container style={{ padding: 10, width: '100%', height: 150 }}>
        <Typography.Title style={{ marginBottom: 5 }}>Outlined Text Area</Typography.Title>

        <TextArea value={text} onChangeText={setText} variant='outlined' />
      </Container>
      <Container style={{ padding: 10, width: '100%', height: 150 }}>
        <Typography.Title style={{ marginBottom: 5 }}>Filled Text Area</Typography.Title>

        <TextArea value={text1} onChangeText={setText1} variant='filled' />
      </Container>
    </Container>
  );
};

export default TextAreaScreen;
