/* eslint-disable react-native/no-color-literals */
import { Container, Tab, Tabs, Typography } from 'anu/lib';
import React from 'react';
import { StyleSheet } from 'react-native';

const TabsScreen = () => {
  return (
    <Container disableGutters style={styles.flex}>
      <Tabs type='primary' style={styles.flex}>
        <Tab name='Tab1' icon={{ name: 'home' }} style={styles.tabContainer}>
          <Typography.Body>This is Tab1</Typography.Body>
        </Tab>
        <Tab name='Tab2' icon={{ name: 'favorite' }} style={styles.tabContainer}>
          <Typography.Body>This is Tab2</Typography.Body>
        </Tab>
        <Tab name='Tab3' icon={{ name: 'notifications' }} style={styles.tabContainer}>
          <Typography.Body>This is Tab3</Typography.Body>
        </Tab>
      </Tabs>
      <Tabs type='secondary' style={styles.flex}>
        <Tab name='Tab1' icon={{ name: 'home' }} style={styles.tabContainer}>
          <Typography.Body>This is Tab1</Typography.Body>
        </Tab>
        <Tab name='Tab2' icon={{ name: 'favorite' }} style={styles.tabContainer}>
          <Typography.Body>This is Tab2</Typography.Body>
        </Tab>
        <Tab name='Tab3' icon={{ name: 'notifications' }} style={styles.tabContainer}>
          <Typography.Body>This is Tab3</Typography.Body>
        </Tab>
      </Tabs>
    </Container>
  );
};

const styles = StyleSheet.create({
  flex: { flex: 1 },
  tabContainer: {
    alignItems: 'center',
    backgroundColor: '#fcfcfc',
    flex: 1,
    justifyContent: 'center',
    maxHeight: 300,
    width: '100%',
  },
});

export default TabsScreen;
