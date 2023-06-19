/* eslint-disable react-native/no-inline-styles */
import { Container, IconButton, Typography } from 'anu/lib';
import React from 'react';
import { StyleSheet } from 'react-native';

const IconButtonScreen = () => {
  return (
    <Container style={{ padding: 10 }}>
      <Typography.Title style={{ marginBottom: 5 }}>Filled Icon Button</Typography.Title>
      <Container flexDirection='row'>
        <IconButton variant='filled' icon={{ name: 'favorite' }} style={styles.iconButton} />
        <IconButton variant='filled' icon={{ name: 'favorite' }} style={styles.iconButton} toggle />
      </Container>
      <Typography.Title style={{ marginBottom: 5, marginTop: 10 }}>Tonal Icon Button</Typography.Title>
      <Container flexDirection='row'>
        <IconButton variant='tonal' icon={{ name: 'favorite' }} style={styles.iconButton} />
        <IconButton variant='tonal' icon={{ name: 'favorite' }} style={styles.iconButton} toggle />
      </Container>
      <Typography.Title style={{ marginBottom: 5, marginTop: 10 }}>Outlined Icon Button</Typography.Title>

      <Container flexDirection='row'>
        <IconButton variant='outlined' icon={{ name: 'favorite' }} style={styles.iconButton} />
        <IconButton variant='outlined' icon={{ name: 'favorite' }} style={styles.iconButton} toggle />
      </Container>
      <Typography.Title style={{ marginBottom: 5, marginTop: 10 }}>Standard Icon Button</Typography.Title>

      <Container flexDirection='row'>
        <IconButton variant='standard' icon={{ name: 'favorite' }} style={styles.iconButton} />
        <IconButton variant='standard' icon={{ name: 'favorite' }} style={styles.iconButton} toggle />
      </Container>
    </Container>
  );
};

const styles = StyleSheet.create({
  iconButton: {
    marginHorizontal: 10,
  },
});

export default IconButtonScreen;
