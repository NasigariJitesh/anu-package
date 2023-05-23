/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-native/no-color-literals */
import { Badge, Container, Icon } from 'anu/lib';
import React from 'react';

const BadgeScreen = () => {
  return (
    <Container>
      <Container style={{ margin: 10 }}>
        <Badge value='new' position='bottomRight' overlap='circular'>
          <Icon name='notifications' />
        </Badge>
      </Container>
      <Container style={{ margin: 10 }}>
        <Badge value={1000} maxValue={50} position='bottomRight' overlap='circular'>
          <Icon name='notifications' />
        </Badge>
      </Container>
      <Container style={{ margin: 10 }}>
        <Badge value={0} showZero maxValue={50} position='bottomRight' overlap='circular'>
          <Icon name='notifications' />
        </Badge>
      </Container>
    </Container>
  );
};

export default BadgeScreen;
