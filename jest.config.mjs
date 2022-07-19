export default {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: [ '<rootDir>/jest.setup.js' ],
  moduleNameMapper: {
    '@components(.*)$': '<rootDir>/src/components',
    '@hooks(.*)$': '<rootDir>/src/hooks',
    '@pages(.*)$': '<rootDir>/src/pages',
    '@connectors(.*)$': '<rootDir>/src/connectors',
    '@redux-store(.*)$': '<rootDir>/src/redux-store',
    '@api-effects(.*)$': '<rootDir>/src/api-effects',
    '@utils(.*)$': '<rootDir>/src/utils',
    '@locales(.*)$': '<rootDir>/src/locales',
    '@style(.*)$': '<rootDir>/src/style',
    '@store-connectors(.*)$': '<rootDir>/src/store-connectors',
    '@hocs(.*)$': '<rootDir>/src/hocs',
    '@constants(.*)$': '<rootDir>/src/constants',
    '@test-utils(.*)$': '<rootDir>/test-utils',
  },
  verbose: true,
};
