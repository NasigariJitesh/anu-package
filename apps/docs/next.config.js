const { withExpo } = require('@expo/next-adapter');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  i18n: {
    locales: ['en-US', 'fr', 'en'],
    defaultLocale: 'en',
    localeDetection: true,
  },
  transpilePackages: [
    'react-native',
    'react-native-web',
    'solito',
    'dripsy',
    '@dripsy/core',
    'moti',
    'app',
    'anu',
    'react-native-reanimated',
    '@expo/html-elements',
    'react-native-gesture-handler',
    'react-native-vector-icons',
    'react-native-safe-area-context',
    'react-dropzone',
    'expo-document-picker',
    'expo-blur',
    'expo-linear-gradient',
    'expo-haptics',
    'expo-modules-core',
  ],
  async redirects() {
    return [
      {
        source: '/components',
        destination: '/components/accordion',
        permanent: false,
      },
      {
        source: '/components/button',
        destination: '/components/button/common',
        permanent: true,
      },
    ];
  },
};

module.exports = withExpo(nextConfig);
