module.exports = {
  root: true,
  extends: ['prettier', '@react-native-community'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        // endOfLine: 'auto',
      },
    ],
    indent: ['off', 2],
    'react/react-in-jsx-scope': 'off',
    'linebreak-style': ['error', 'unix'],
    'react-native/no-inline-styles': 'off',
    'max-len': [
      'warn',
      {
        code: 120,
        tabWidth: 2,
        comments: 1000,
        ignoreComments: true,
        ignoreTrailingComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      },
    ],
  },
  // todo these settings doesn't work
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@', './src'],
          ['@images', './src/assets/images'],
        ],
        extensions: ['.ts', '.js', '.jsx', '.tsx', '.json'],
      },
    },
  },
};
