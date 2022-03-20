module.exports = {
  testPathIgnorePatterns: ['/node_modules'],
  setupFilesAfterEnv: ['<rootDir>/src/tests/setupTests.ts'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
  },
  moduleNameMapper: {
    '\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
    '\\.(scss|css|sass)$': 'identity-obj-proxy',
  },
  testEnvironment: 'jsdom',
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.tsx', '!src/**/*.spec.tsx'],
  coverageReporters: ['lcov', 'json'],
};
