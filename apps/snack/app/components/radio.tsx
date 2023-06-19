/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-native/no-color-literals */
import { Container, Radio, RadioButtonGroup, Typography } from 'anu/lib';
import React from 'react';

const RadioScreen = () => {
  return (
    <Container>
      <Container style={{ margin: 10 }}>
        <Typography.Title style={{ marginBottom: 5 }}>Radio Button</Typography.Title>
        <Radio id='basic' />
      </Container>
      <Container style={{ margin: 10 }}>
        <Typography.Title style={{ marginBottom: 5 }}>Radio Button Group</Typography.Title>
        <RadioButtonGroup flexDirection='row'>
          <Radio id='button1' label='Button 1' labelStyle={{ marginRight: 5 }} />
          <Radio id='button2' label='Button 2' labelStyle={{ marginRight: 5 }} />
          <Radio id='button3' label='Button 3' labelStyle={{ marginRight: 5 }} />
        </RadioButtonGroup>
      </Container>
    </Container>
  );
};

export default RadioScreen;
