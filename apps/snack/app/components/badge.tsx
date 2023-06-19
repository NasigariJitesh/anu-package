/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-native/no-color-literals */
import { Badge, Container, Icon, Typography } from 'anu/lib';
import React from 'react';

const BadgeScreen = () => {
  return (
    <Container style={{ width: '100%', padding: 10 }}>
      <Container>
        <Typography.Title style={{ marginBottom: 5 }}>Notification Badge</Typography.Title>
        <Badge value={150} maxValue={99} position='topRight' overlap='circular'>
          <Icon name='notifications' />
        </Badge>
      </Container>
      <Container>
        <Typography.Title style={{ marginBottom: 5 }}>Status Badge</Typography.Title>
        <Badge value='new' position='bottomRight' overlap='circular'>
          <Icon name='notifications' />
        </Badge>
      </Container>
    </Container>
  );
};

export default BadgeScreen;
