const { withExpo } = require('@expo/next-adapter');

/** @type {import('next').NextConfig} */
const nextConfig = withExpo({
  reactStrictMode: true,
  swcMinify: true,
  transpilePackages: [
    'react-native',
    'react-native-web',
    'expo',
    'solito',
    'anu',
    'react-native-vector-icons',
    '@expo/html-elements',
    '@dripsy/core',
    'dripsy',
    // Add more React Native / Expo packages here...
  ],
  experimental: {
    forceSwcTransforms: true,
    appDir: false,
  },
});

module.exports = nextConfig;
