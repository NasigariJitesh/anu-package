const { withExpo } = require('@expo/next-adapter');

/** @type {import('next').NextConfig} */
const nextConfig = withExpo({
  i18n: {
    locales: ['en-US', 'fr', 'en'],
    defaultLocale: 'en',
  },

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
    'expo-image',
    '@dripsy/core',
    'dripsy',
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
        destination: '/components/badge',
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
