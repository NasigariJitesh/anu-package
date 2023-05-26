/* eslint-disable react-native/no-inline-styles */
import { Container, Switch } from 'anu/lib';
import React, { useState } from 'react';

const SwitchScreen = () => {
  const [on, toggleOn] = useState(false);
  return (
    <Container style={{ padding: 10 }}>
      <Switch value={on} onValueChange={toggleOn} />
    </Container>
  );
};

export default SwitchScreen;
