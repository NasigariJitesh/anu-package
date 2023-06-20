/* eslint-disable react-native/no-color-literals */
import { Container, Tab, Tabs, Typography } from 'anu/lib';
import React from 'react';
import { StyleSheet } from 'react-native';

const TabsScreen = () => {
  return (
    <Container disableGutters style={styles.flex}>
      <Typography.Title style={styles.heading}>Primary Tabs</Typography.Title>
      <Tabs type='primary'>
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
      <Typography.Title style={styles.heading}>Secondary Tabs</Typography.Title>

      <Tabs type='secondary'>
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
  heading: { marginBottom: 5, marginTop: 10 },
  tabContainer: {
    alignItems: 'center',
    height: 200,
    justifyContent: 'center',
    width: '100%',
  },
});

export default TabsScreen;
