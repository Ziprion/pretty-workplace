module.exports = {
  root: true,
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true,
    'jest/globals': true,
  },
  plugins: [ 'functional', 'simple-import-sort', 'jest' ],
  extends: [
    'airbnb',
    'plugin:functional/external-recommended',
    'plugin:functional/recommended',
  ],
  rules: {
    'import/extensions': 'off',
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
    'consistent-return': 'off',
    'max-len': [
      'error', {
        code: 120,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      },
    ],
    'array-bracket-spacing': [ 'error', 'always' ],
    'object-property-newline': [ 'error', { allowAllPropertiesOnSameLine: false } ],
    'simple-import-sort/imports': [
      'error', {
        groups: [
          [ '^react$', '^[a-z]' ],
          [ '^@' ],
        ],
      },
    ],
    'react/jsx-sort-props': [
      'error', {
        callbacksLast: true,
        shorthandLast: true,
        reservedFirst: [ 'key', 'ref' ],
      },
    ],
  },
};
