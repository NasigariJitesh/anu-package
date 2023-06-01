/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-native/no-color-literals */
import { Container, Radio, RadioButtonGroup } from 'anu/lib';
import React from 'react';

const style = { margin: 10 };

const RadioScreen = () => {
  return (
    <Container>
      <Container flexDirection='row'>
        <Container disableGutters style={style}>
          <Radio id='basic' />
        </Container>
        <Container disableGutters style={style}>
          <Radio id='disabled' disabled />
        </Container>
        <Container disableGutters style={style}>
          <Radio id='basic' selected='basic' />
        </Container>
        <Container disableGutters style={style}>
          <Radio id='basic-disabled' selected='basic-disabled' disabled />
        </Container>
      </Container>
      <Container flexDirection='row'>
        <Container disableGutters style={style}>
          <Radio id='label' label='Label' />
        </Container>
        <Container disableGutters style={style}>
          <Radio id='labelLeft' label='Left' labelPlacement='left' />
        </Container>
        <Container disableGutters style={style}>
          <Radio id='labelRight' label='Right' labelPlacement='right' />
        </Container>
      </Container>
      <Container flexDirection='row'>
        <Container disableGutters style={style}>
          <Radio id='labelTop' label='Top' labelPlacement='top' />
        </Container>
        <Container disableGutters style={style}>
          <Radio id='labelBottom' label='Bottom' labelPlacement='bottom' />
        </Container>
      </Container>
      <Container flexDirection='row'>
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
