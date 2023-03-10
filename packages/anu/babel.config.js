// babel.config.js
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      '@expo/html-elements/babel',
      '@babel/plugin-proposal-export-namespace-from',
      [
        'module-resolver',
        {
          alias: {
            common: './common',
            config: './config',
            lib: './lib',
          },
        },
      ],
    ],
  };
};
