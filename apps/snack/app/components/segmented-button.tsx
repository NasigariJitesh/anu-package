import { Container, SegmentedButton, SegmentedButtonGroup } from 'anu/lib';
import React from 'react';
import { StyleSheet } from 'react-native';

const SegmentedButtonScreen = () => {
  return (
    <Container>
      <SegmentedButtonGroup multiSelect containerStyle={styles.SegmentedButton}>
        <SegmentedButton id='segmentedButton1' title='Button 1' />
        <SegmentedButton id='segmentedButton2' title='Button 2' />
        <SegmentedButton id='segmentedButton3' title='Button 3' icon={{ name: 'person' }} />
        <SegmentedButton id='segmentedButton4' title='Button 4' icon={{ name: 'add' }} disabled />
      </SegmentedButtonGroup>
    </Container>
  );
};

export default SegmentedButtonScreen;

const styles = StyleSheet.create({
  SegmentedButton: {
    height: 150,
    margin: 10,
  },
});
