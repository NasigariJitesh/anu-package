import { Container, IconButton } from 'anu/lib';
import React from 'react';
import { StyleSheet } from 'react-native';

const IconButtonScreen = () => {
  return (
    <Container>
      <Container flexDirection='row'>
        <IconButton variant='filled' icon={{ name: 'favorite' }} style={styles.iconButton} />
        <IconButton variant='filled' icon={{ name: 'favorite' }} style={styles.iconButton} toggle />
      </Container>
      <Container flexDirection='row'>
        <IconButton variant='tonal' icon={{ name: 'favorite' }} style={styles.iconButton} />
        <IconButton variant='tonal' icon={{ name: 'favorite' }} style={styles.iconButton} toggle />
      </Container>
      <Container flexDirection='row'>
        <IconButton variant='outlined' icon={{ name: 'favorite' }} style={styles.iconButton} />
        <IconButton variant='outlined' icon={{ name: 'favorite' }} style={styles.iconButton} toggle />
      </Container>
      <Container flexDirection='row'>
        <IconButton variant='standard' icon={{ name: 'favorite' }} style={styles.iconButton} />
        <IconButton variant='standard' icon={{ name: 'favorite' }} style={styles.iconButton} toggle />
      </Container>
    </Container>
  );
};

const styles = StyleSheet.create({
  iconButton: {
    margin: 10,
  },
});

export default IconButtonScreen;
