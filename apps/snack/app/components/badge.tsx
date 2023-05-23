/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-native/no-color-literals */
import { Badge, Container, Icon } from 'anu/lib';
import React from 'react';

const BadgeScreen = () => {
  return (
    <Container>
      <Badge value='new' position='bottomRight' overlap='circular'>
        <Icon name='notifications' />
      </Badge>
    </Container>
  );
};

export default BadgeScreen;
