/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-native/no-color-literals */
import { Container, Slider, Typography } from 'anu/lib';
import React from 'react';

const SliderScreen = () => {
  return (
    <Container>
      <Container style={{ margin: 10 }}>
        <Typography.Title style={{ marginBottom: 5 }}>Slider</Typography.Title>
        <Slider value={0.3} startFromZero />
      </Container>
      <Container style={{ margin: 10 }}>
        <Typography.Title style={{ marginBottom: 5 }}>Slider - Discrete</Typography.Title>
        <Slider value={3} minimumValue={1} maximumValue={7} step={1} />
      </Container>
      <Container style={{ margin: 10 }}>
        <Typography.Title style={{ marginBottom: 5 }}>Slider - Range</Typography.Title>
        <Slider value={[4, 6]} step={1} minimumValue={3} maximumValue={10} />
      </Container>
      <Container style={{ margin: 10 }}>
        <Typography.Title style={{ marginBottom: 5 }}>Slider - Vertical</Typography.Title>
        <Slider value={0.5} startFromZero vertical />
      </Container>
    </Container>
  );
};

export default SliderScreen;
