/* eslint-disable react-native/no-color-literals */
import { Button, Container } from 'anu/lib';
import React from 'react';

const CommonButtonScreen = () => {
  return (
    <Container>
      <Button.Filled title='Filled' style={styles.button} />
      <Button.Elevated title='Elevated' style={styles.button1} />
      <Button.Tonal title='Tonal' style={styles.button2} />
      <Button.Outlined title='Outlined' style={styles.button3} />
      <Button.Text title='Text' style={styles.button4} labelStyle={styles.labelStyle} />
    </Container>
  );
};

const styles = {
  button: {
    margin: 10,
    width: 180,
  },
  button1: {
    borderRadius: 20,
    height: 100,
    margin: 10,
    width: 300,
  },
  button2: {
    '@press': {
      backgroundColor: '#ccffff',
    },
    backgroundColor: '#ffffcc',
    borderRadius: 10,
    margin: 10,
    padding: 20,
  },
  button3: {
    '@press': {
      borderColor: '#668809',
    },
    borderColor: '#00eeee',
  },
  button4: {
    '@press': { backgroundColor: '#ffccff' },
  },
  labelStyle: { color: 'red' },
};

export default CommonButtonScreen;
