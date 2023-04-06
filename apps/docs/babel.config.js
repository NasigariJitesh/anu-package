// babel.config.js
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      '@babel/plugin-proposal-export-namespace-from',
      '@expo/html-elements/babel',
      require.resolve('expo-router/babel'),
      'react-native-reanimated/plugin',
      [
        'expo-document-picker',
        {
          iCloudContainerEnvironment: 'Production',
        },
      ],
      [
        'expo-image-picker',
        {
          photosPermission: 'The app accesses your photos to let you share them with your friends.',
        },
      ],
      [
        'module-resolver',
        {
          alias: {
            src: './src',
            lib: '../../packages/anu/lib',
            common: '../../packages/anu/common',
            config: '../../packages/anu/config',
            anu: '../../packages/anu',
          },
        },
      ],
    ],
  };
};
