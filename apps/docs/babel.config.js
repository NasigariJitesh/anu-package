// babel.config.js
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      '@expo/html-elements/babel',
      require.resolve('expo-router/babel'),
      '@babel/plugin-proposal-export-namespace-from',
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
