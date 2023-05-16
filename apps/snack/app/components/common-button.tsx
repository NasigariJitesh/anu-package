import { Button, Container } from 'anu/lib';
import React from 'react';
import { StyleSheet } from 'react-native';

const CommonButtonScreen = () => {
  return (
    <Container>
      <Button.Filled title='Filled' style={styles.button} />
      <Button.Elevated title='Elevated' style={styles.button} />
      <Button.Tonal title='Tonal' style={styles.button} />
      <Button.Outlined title='Outlined' style={styles.button} />
      <Button.Text title='Text' style={styles.button} />
    </Container>
  );
};

const styles = StyleSheet.create({
  button: {
    margin: 10,
    width: 180,
  },
});

export default CommonButtonScreen;
