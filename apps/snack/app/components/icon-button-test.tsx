import { Container, IconButton } from 'anu/lib';
import React from 'react';

const IconButtonScreen = () => {
  return (
    <Container>
      <Container flexDirection='row'>
        <IconButton variant='filled' icon={{ name: 'favorite' }} style={styles.iconButton} />
        <IconButton variant='filled' icon={{ name: 'favorite' }} style={styles.iconButton} toggle />
      </Container>
      <Container flexDirection='row'>
        <IconButton variant='tonal' icon={{ name: 'favorite' }} style={styles.iconButton1} />
        <IconButton variant='tonal' icon={{ name: 'favorite' }} style={styles.iconButton1} toggle />
      </Container>
      <Container flexDirection='row'>
        <IconButton variant='outlined' icon={{ name: 'favorite' }} style={styles.iconButton2} />
        <IconButton variant='outlined' icon={{ name: 'favorite' }} style={styles.iconButton2} toggle />
      </Container>
      <Container flexDirection='row'>
        <IconButton
          variant='standard'
          icon={{ name: 'favorite', props: { style: styles.iconStyle } }}
          style={styles.iconButton3}
        />
        <IconButton variant='standard' icon={{ name: 'favorite' }} style={styles.iconButton3} toggle />
      </Container>
    </Container>
  );
};

const styles = {
  iconButton: {
    borderRadius: 10,
    height: 60,
    margin: 10,
    width: 100,
  },
  iconButton1: {
    '@press': {
      backgroundColor: '#ccffff',
    },
    backgroundColor: '#ffffcc',
    borderRadius: 10,
    margin: 10,
    borderWidth: 2,
    borderColor: 'red',
  },
  iconButton2: {
    margin: 10,
    '@press': {
      borderColor: '#668809',
    },
    borderColor: '#00eeee',
  },
  iconButton3: {
    margin: 10,
    '@press': { backgroundColor: '#ffccff' },
  },
  iconStyle: { color: 'red' },
};

export default IconButtonScreen;
