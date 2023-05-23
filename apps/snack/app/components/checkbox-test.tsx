/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-native/no-color-literals */
import { Checkbox, Container } from 'anu/lib';
import React from 'react';
import { ScrollView } from 'react-native';

const style = { margin: 15 };

const CheckboxScreen = () => {
  return (
    <ScrollView>
      <Container disableGutters flexDirection='row'>
        <Container disableGutters style={style}>
          <Checkbox id='basic' />
        </Container>
        <Container disableGutters style={style}>
          <Checkbox id='disabled' disabled />
        </Container>
        <Container disableGutters style={style}>
          <Checkbox id='error' error />
        </Container>
      </Container>
      <Container disableGutters flexDirection='row'>
        <Container disableGutters style={style}>
          <Checkbox id='selected' selected />
        </Container>
        <Container disableGutters style={style}>
          <Checkbox id='selected-disabled' selected disabled />
        </Container>
        <Container disableGutters style={style}>
          <Checkbox id='selected-error' selected error />
        </Container>
      </Container>
      <Container disableGutters flexDirection='row'>
        <Container disableGutters style={style}>
          <Checkbox id='indeterminate' indeterminate />
        </Container>
        <Container disableGutters style={style}>
          <Checkbox id='indeterminate-disabled' indeterminate disabled />
        </Container>
        <Container disableGutters style={style}>
          <Checkbox id='indeterminate-error' indeterminate error />
        </Container>
      </Container>
      <Container disableGutters flexDirection='row'>
        <Container disableGutters style={style}>
          <Checkbox id='label' label='Label' />
        </Container>
        <Container disableGutters style={style}>
          <Checkbox id='labelLeft' label='Left' labelPlacement='left' />
        </Container>
        <Container disableGutters style={style}>
          <Checkbox id='labelRight' label='Right' labelPlacement='right' />
        </Container>
      </Container>
      <Container disableGutters flexDirection='row'>
        <Container disableGutters style={style}>
          <Checkbox id='labelTop' label='Top' labelPlacement='top' />
        </Container>
        <Container disableGutters style={style}>
          <Checkbox id='labelBottom' label='Bottom' labelPlacement='bottom' />
        </Container>
      </Container>
    </ScrollView>
  );
};

export default CheckboxScreen;
