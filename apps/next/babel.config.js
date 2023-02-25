/**
 *	@type {import('@babel/core').TransformOptions}
 * 	@param {import('@babel/core').ConfigAPI} api
 */
module.exports = function (api) {
  api.cache(true);

  // const useClassTransform = api.caller((caller) => !!caller && caller.name !== 'metro');

  return {
    presets: ['babel-preset-expo'],
    plugins: [
      '@expo/html-elements/babel',
      '@babel/plugin-proposal-export-namespace-from',
      // ...(useClassTransform ? ['@babel/plugin-proposal-class-properties'] : []),
      // 'react-native-reanimated/plugin',
      [
        'module-resolver',
        {
          alias: {
            src: './src',
            common: './common',
            navigation: './src/navigation',
            screens: './src/screens',
            constants: './common/constants',
            config: './config',
            anu: './../packages/anu',
          },
        },
      ],
    ],
  };
};
