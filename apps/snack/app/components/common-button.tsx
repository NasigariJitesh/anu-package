/* eslint-disable react-native/no-inline-styles */
import { Button, Container, Typography } from 'anu/lib';
import React from 'react';
import { StyleSheet } from 'react-native';

const CommonButtonScreen = () => {
  return (
    <Container>
      <Typography.Title style={{ marginBottom: 5, marginTop: 10 }}>Filled Button</Typography.Title>
      <Button.Filled title='Filled' style={styles.button} />

      <Typography.Title style={{ marginBottom: 5, marginTop: 10 }}>Elevated Button</Typography.Title>
      <Button.Elevated title='Elevated' style={styles.button} />

      <Typography.Title style={{ marginBottom: 5, marginTop: 10 }}>Tonal Button</Typography.Title>
      <Button.Tonal title='Tonal' style={styles.button} />

      <Typography.Title style={{ marginBottom: 5, marginTop: 10 }}>Outlined Button</Typography.Title>
      <Button.Outlined title='Outlined' style={styles.button} />

      <Typography.Title style={{ marginBottom: 5, marginTop: 10 }}>Text Button</Typography.Title>
      <Button.Text title='Text' style={styles.button} />

      <Typography.Title style={{ marginBottom: 5, marginTop: 10 }}>Button - with Icon</Typography.Title>
      <Button.Filled title='Profile' style={styles.button} icon={{ name: 'person' }} />
    </Container>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 180,
  },
});

export default CommonButtonScreen;
