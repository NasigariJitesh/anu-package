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
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  async redirects() {
    return [
      {
        source: '/components/button',
        destination: '/components/button/regular',
        permanent: true,
      },
    ];
  },
});

module.exports = nextConfig;
