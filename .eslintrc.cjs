module.exports = {
  root: true,

  parser: 'babel-eslint',

  env: {
    browser: true,
    node: true,
  },

  plugins: [ 'functional', 'simple-import-sort' ],

  extends: [
    'airbnb',
    'plugin:functional/external-recommended',
    'plugin:functional/recommended',
  ],

  rules: {
    'import/extensions': 'off',
    'no-console': 'off',
    'react/prop-types': 'off',
    'functional/no-conditional-statement': 'off',
    'functional/no-expression-statement': 'off',
    'functional/immutable-data': 'off',
    'functional/functional-parameters': 'off',
    'functional/no-try-statement': 'off',
    'functional/no-throw-statement': 'off',
    'import/prefer-default-export': 'off',
    'import/no-unresolved': 'off',
    'react/jsx-props-no-spreading': 'off',
    'max-len': [ 'error', {
      code: 120,
      ignoreUrls: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
      ignoreRegExpLiterals: true,
    } ],
    'array-bracket-spacing': [ 'error', 'always' ],
    'react/jsx-max-props-per-line': [
      'error', {
        maximum: {
          single: 2,
          multi: 1,
        },
      },
    ],
    'simple-import-sort/imports': [ 'error', {
      groups: [
        [ '^react$', '^[a-z]' ],
        [ '^@' ],
      ],
    } ],
  },
};
