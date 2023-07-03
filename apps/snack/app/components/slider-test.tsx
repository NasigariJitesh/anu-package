/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-native/no-color-literals */
import { Container, Slider } from 'anu/lib';
import React from 'react';

const SliderScreen = () => {
  return (
    <Container style={{ width: '100%' }}>
      <Container style={{ margin: 10, width: '100%' }}>
        <Slider value={0.3} startFromZero />
      </Container>
      <Container style={{ margin: 10, width: '100%' }}>
        <Slider value={3} minimumValue={1} maximumValue={7} step={1} />
      </Container>
      <Container style={{ margin: 10, width: '100%' }}>
        <Slider value={[4, 9]} step={1.5} minimumValue={3} maximumValue={10} />
      </Container>
      <Container style={{ margin: 10, width: '100%', height: 300 }}>
        <Slider
          value={0.2}
          startFromZero
          vertical
          containerStyle={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
        />
      </Container>
    </Container>
  );
};

export default SliderScreen;
