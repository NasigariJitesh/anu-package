/* eslint-disable react-native/no-inline-styles */
import { useTheme } from 'anu/config';
import { Container, Icon, Switch, Typography } from 'anu/lib';
import React, { useState } from 'react';

const SwitchScreen = () => {
  const [on, toggleOn] = useState(false);
  const [on1, toggleOn1] = useState(false);
  const theme = useTheme();
  return (
    <Container style={{ flex: 1 }}>
      <Container style={{ padding: 10 }}>
        <Typography.Title style={{ marginBottom: 5 }}>Switch</Typography.Title>
        <Switch value={on} onValueChange={toggleOn} />
      </Container>
      <Container style={{ padding: 10 }}>
        <Typography.Title style={{ marginBottom: 5 }}>Switch - with Icon</Typography.Title>
        <Switch
          value={on1}
          onValueChange={toggleOn1}
          iconOn={<Icon name='flash-on' style={{ color: theme.colors.$primary }} />}
          iconOff={<Icon name='flash-off' style={{ color: theme.colors.$inverseOnSurface }} />}
        />
      </Container>
    </Container>
  );
};

export default SwitchScreen;
