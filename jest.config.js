module.exports = {
  verbose: false,
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  testEnvironment: 'node',
  cacheDirectory: '.jest/cache',
  testPathIgnorePatterns: [
    '\\.snap$',
    '<rootDir>/node_modules/',
    '<rootDir>/build',
    '<rootDir>/lib',
  ],
  transformIgnorePatterns: ['\\.snap$', '<rootDir>/build', '<rootDir>/lib'],
  transform: {
    '\\.(ts|tsx)$': 'ts-jest',
  },
  testRegex: '(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$',
  testMatch: null,
  setupFiles: [
    '<rootDir>/config/jest/globalFetch.ts',
    '<rootDir>/config/setupTests.js',
  ],
  moduleDirectories: ['node_modules'],
  unmockedModulePathPatterns: [
    '<rootDir>/node_modules/react',
    '<rootDir>/node_modules/react-dom',
    '<rootDir>/node_modules/react-addons-test-utils',
  ],
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss)$': 'identity-obj-proxy',
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/config/fileMock.js',
  },
  automock: false,
  collectCoverage: true,
  collectCoverageFrom: [
    '**/*.{ts,tsx}',
    '!**/node_modules/**',
    '!**/vendor/**',
    '!**/__mocks__/**',
    '!**/__snapshots__/**',
    '!**/config/**',
    '!**/build/**',
    '!**/lib/**',
  ],
};
