/* eslint-disable react-native/no-inline-styles */
import { Container, Icon, TextField, Typography } from 'anu/lib';
import React, { useState } from 'react';

const TextFieldScreen = () => {
  const [text, setText] = useState('');
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');
  return (
    <Container style={{ flex: 1, width: '100%' }}>
      <Container style={{ padding: 10, width: '100%', height: 150 }}>
        <Typography.Title style={{ marginBottom: 5 }}>Outlined Text Field</Typography.Title>

        <TextField value={text} onChangeText={setText} />
      </Container>
      <Container style={{ padding: 10, width: '100%', height: 150 }}>
        <Typography.Title style={{ marginBottom: 5 }}>Filled Text Field</Typography.Title>

        <TextField value={text1} onChangeText={setText1} variant='filled' />
      </Container>
      <Container style={{ padding: 10, width: '100%', height: 150 }}>
        <Typography.Title style={{ marginBottom: 5 }}>Text Field - with Icons</Typography.Title>

        <TextField
          value={text2}
          onChangeText={setText2}
          variant='outlined'
          trailingIcon={<Icon name={'keyboard-tab'} />}
          leadingIcon={<Icon name={'language'} />}
        />
      </Container>
    </Container>
  );
};

export default TextFieldScreen;
