/* eslint-disable react-native/no-inline-styles */
import { Container, PasswordInput, Typography } from 'anu/lib';
import React, { useState } from 'react';

const PasswordInputScreen = () => {
  const [text, setText] = useState('');
  const [text1, setText1] = useState('');

  return (
    <Container style={{ flex: 1, width: '100%' }}>
      <Container style={{ padding: 10, width: '100%', height: 100 }}>
        <Typography.Title style={{ marginBottom: 5 }}>Outlined Password Input</Typography.Title>
        <PasswordInput value={text} onChangeText={setText} />
      </Container>
      <Container style={{ padding: 10, width: '100%', height: 100 }}>
        <Typography.Title style={{ marginBottom: 5 }}>Filled Password Input</Typography.Title>
        <PasswordInput value={text1} onChangeText={setText1} variant='filled' />
      </Container>
    </Container>
  );
};

export default PasswordInputScreen;
