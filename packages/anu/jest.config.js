/** @type {import('jest').Config} */
module.exports = {
  testEnvironment: 'jsdom',
  preset: 'jest-expo',
  collectCoverage: true,
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg|dripsy/*|@dripsy/*)',
  ],
};
