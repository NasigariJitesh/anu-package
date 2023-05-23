/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-native/no-color-literals */
import { Avatar, AvatarGroup, Container } from 'anu/lib';
import React from 'react';

const AvatarScreen = () => {
  return (
    <Container>
      <Container style={{ margin: 10 }}>
        <Avatar source={{ uri: 'https://i.pravatar.cc/' }} />
      </Container>
      <Container style={{ margin: 10 }}>
        <Avatar name='John' lastName='Doe' />
      </Container>
      <Container style={{ margin: 10 }}>
        <AvatarGroup max={5}>
          <Avatar source={{ uri: 'https://i.pravatar.cc/?img=1' }} />
          <Avatar source={{ uri: 'https://i.pravatar.cc/?img=2' }} />
          <Avatar source={{ uri: 'https://i.pravatar.cc/?img=3' }} />
          <Avatar source={{ uri: 'https://i.pravatar.cc/?img=4' }} />
          <Avatar source={{ uri: 'https://i.pravatar.cc/?img=5' }} />
          <Avatar source={{ uri: 'https://i.pravatar.cc/?img=6' }} />
          <Avatar source={{ uri: 'https://i.pravatar.cc/?img=7' }} />
          <Avatar source={{ uri: 'https://i.pravatar.cc/?img=8' }} />
          <Avatar source={{ uri: 'https://i.pravatar.cc/?img=9' }} />
        </AvatarGroup>
      </Container>
    </Container>
  );
};

export default AvatarScreen;
