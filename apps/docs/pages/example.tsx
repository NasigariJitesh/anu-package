import { Container, TextField } from 'anu/lib';
import React from 'react';
import { useState } from 'react';

/**
 *
 */
export default function Example() {
  const [value, setValue] = useState('');

  return (
    <Container
      flexDirection='column'
      justify='space-between'
      sx={{ flex: 1, height: '100vh', paddingTop: 1, marginTop: 100 }}
    >
      <TextField value={value} onChangeText={setValue} autoFocus />
    </Container>
  );
}
