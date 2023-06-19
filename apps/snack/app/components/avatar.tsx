/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-native/no-color-literals */
import { Avatar, AvatarGroup, Container, Typography } from 'anu/lib';
import React from 'react';

const AvatarScreen = () => {
  return (
    <Container style={{ width: '100%' }}>
      <Container style={{ margin: 10 }}>
        <Typography.Title style={{ marginBottom: 5 }}>Image Avatar</Typography.Title>
        <Avatar source={{ uri: 'https://i.pravatar.cc/' }} />
      </Container>
      <Container style={{ margin: 10 }}>
        <Typography.Title style={{ marginBottom: 5 }}>Letter Avatar</Typography.Title>

        <Avatar name='John' lastName='Doe' />
      </Container>
      <Container style={{ margin: 10 }}>
        <Typography.Title style={{ marginBottom: 5 }}>Avatar Group</Typography.Title>

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
