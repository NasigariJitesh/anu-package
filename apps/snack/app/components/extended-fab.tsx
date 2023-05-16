import { Container, ExtendedFAB } from 'anu/lib';
import React from 'react';
import { StyleSheet } from 'react-native';

const ExtendedFABScreen = () => {
  return (
    <Container>
      <ExtendedFAB title='Contact' icon={{ name: 'phone' }} style={styles.extendedFab} />
    </Container>
  );
};

export default ExtendedFABScreen;

const styles = StyleSheet.create({
  extendedFab: {
    margin: 10,
  },
});
