import { Container, FAB } from 'anu/lib';
import React from 'react';

const FABScreen = () => {
  return (
    <Container>
      <FAB icon={{ name: 'phone' }} style={styles.fab} />
      <FAB icon={{ name: 'phone' }} style={styles.fab1} />
      <FAB icon={{ name: 'phone' }} style={styles.fab2} />
      <FAB icon={{ name: 'phone', props: { style: styles.iconStyle } }} style={styles.fab3} />
    </Container>
  );
};

export default FABScreen;

const styles = {
  fab: {
    margin: 10,
  },
  fab1: {
    '@press': {
      backgroundColor: 'pink',
    },
    backgroundColor: 'red',
    margin: 10,
  },
  fab2: {
    width: 300,
    height: 150,
    alignItems: 'flex-end',
    padding: 20,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: 'yellow',
  },
  fab3: {
    padding: 30,
    height: 100,
    width: 100,
    margin: 10,
  },
  iconStyle: {
    color: 'black',
  },
};
