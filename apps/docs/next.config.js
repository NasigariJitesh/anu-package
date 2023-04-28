const { withExpo } = require('@expo/next-adapter');

/** @type {import('next').NextConfig} */
const nextConfig = withExpo({
  i18n: {
    locales: ['en-US', 'fr', 'en'],
    defaultLocale: 'en',
    localeDetection: true,
  },

  reactStrictMode: true,
  swcMinify: true,
  transpilePackages: [
    'react-native',
    'react-native-web',
    'expo',
    'expo-document-picker',
    'expo-modules-core',
    'solito',
    'anu',
    'react-native-vector-icons',
    // 'react-native-draggable-flatlist',
    '@expo/html-elements',
    '@dripsy/core',
    'dripsy',
    'react-native-safe-area-context',
    // Add more React Native / Expo packages here...
  ],
  experimental: {
    forceSwcTransforms: true,
    appDir: false,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  async redirects() {
    return [
      {
        source: '/components',
        destination: '/components/avatar',
        permanent: false,
      },
      {
        source: '/components/button',
        destination: '/components/button/common',
        permanent: true,
      },
    ];
  },
});

module.exports = nextConfig;
