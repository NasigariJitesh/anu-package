const { withExpo } = require('@expo/next-adapter');

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = withExpo({
  reactStrictMode: false,
  swcMinify: true,
  transpilePackages: [
    'react-native',
    'react-native-web',
    'expo',
    '@expo/html-elements',
    'solito',
    'dripsy',
    '@dripsy/core',
    'react-native-vector-icons',
    'anu',
    // 'moti',
    // 'react-native-reanimated',
    // '@motify',
    // 'nativewind',
  ],
  experimental: {
    forceSwcTransforms: true,
  },
  webpack: (config, options) => {
    // config.module.rules.push({
    //   test: /\.ttf$/,
    //   loader: 'url-loader', // or directly file-loader
    //   include: path.resolve(__dirname, 'node_modules/react-native-vector-icons/Fonts'),
    // });

    // config.module.rules.push({
    //   test: /\.(woff(2)?|eot|ttf|otf|svg)(\?v=\d+\.\d+\.\d+)?$/,
    //   // Next.js already handles url() in css/sass/scss files
    //   issuer: /\.\w+(?<!(s?c|sa)ss)$/i,
    //   use: [
    //     {
    //       loader: require.resolve('url-loader'),
    //       options: {
    //         limit: 8192,
    //         fallback: require.resolve('file-loader'),
    //         publicPath: `${''}/_next/static/chunks/fonts/`,
    //         outputPath: `${options.isServer ? '../' : ''}static/chunks/fonts/`,
    //         name: '[name]-[hash].[ext]',
    //       },
    //     },
    //   ],
    // });

    return config;
  },
});

module.exports = nextConfig;
