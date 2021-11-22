module.exports = {
  root: true,

  parser: 'babel-eslint',

  env: {
    browser: true,
    node: true,
  },

  plugins: ['functional'],

  extends: [
    'airbnb',
    'plugin:functional/external-recommended',
    'plugin:functional/recommended',
  ],

  rules: {
    'import/extensions': 'off',
    'react/prop-types': 'off',
    'no-console': 'off',
    'functional/no-conditional-statement': 'off',
    'functional/no-expression-statement': 'off',
    'functional/immutable-data': 'off',
    'functional/functional-parameters': 'off',
    'functional/no-try-statement': 'off',
    'functional/no-throw-statement': 'off',
    'import/prefer-default-export': 'off',
    'import/no-unresolved': 'off',
    'react/jsx-props-no-spreading': 'off',
    'max-len': ["error", 120],
  },
};
