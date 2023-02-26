import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

/**
 *
 */
export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to Expo + Next.js 👋</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
  },
});
