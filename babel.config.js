module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    // ... other configs, if any
    [
      'module-resolver',
      {
        extensions: [
          '.ios.js',
          '.android.js',
          '.ios.jsx',
          '.android.jsx',
          '.js',
          '.jsx',
          '.json',
          '.ts',
          '.tsx',
          '.png',
          '.jpg',
        ],
        root: ['.'],
        alias: {
          '~': './src',
          '@theme': './src/theme',
          '@common': './src/common',
          '@i18n': './src/i18n',
          '@layouts': './src/layouts',
          '@assets': './src/assets',
          '@graphql': './src/graphql',
          '@config': './src/config',
          '@screens': './src/screens',
          '@services': './src/services',
          '@router': './src/router',
          '@redux': './src/redux',
          '@providers': './src/providers',
        },
      },
    ],
  ],
};
