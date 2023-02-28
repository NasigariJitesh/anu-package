import { Typography } from 'anu/lib';
import React from 'react';
import { StyleSheet, View } from 'react-native';

/**
 *
 */
export default function App() {
  return (
    <View style={styles.container}>
      <Typography.Display>Welcome to Expo + Next.js 👋</Typography.Display>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});
