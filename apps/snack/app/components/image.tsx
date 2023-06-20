/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-native/no-color-literals */
import { Container, Image, Typography } from 'anu/lib';
import React from 'react';

const ImageScreen = () => {
  return (
    <Container style={{ flex: 1 }}>
      <Typography.Title style={{ marginBottom: 5, marginTop: 10 }}>Image</Typography.Title>

      <Image
        source={{
          uri: 'https://hips.hearstapps.com/hmg-prod/images/ocean-quotes-index-1624414741.jpg',
        }}
        alt='url-image'
        style={{ height: 200, width: 300 }}
      />
    </Container>
  );
};

export default ImageScreen;
