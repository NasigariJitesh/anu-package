import { Container, FAB } from 'anu/lib';
import React from 'react';
import { StyleSheet } from 'react-native';

const FABScreen = () => {
  return (
    <Container>
      <FAB FABColor='primary' icon={{ name: 'phone' }} style={styles.fab} />
    </Container>
  );
};

export default FABScreen;

const styles = StyleSheet.create({
  fab: {
    margin: 10,
  },
});
