module.exports = { // tslint:disable-line:no-object-mutation
  preset: '@jupl/ts',
  setupFiles: [
    'dotenv/config',
  ],
  setupFilesAfterEnv: [
    '<rootDir>/jest/setup.ts',
  ],
  snapshotSerializers: [
    'enzyme-to-json/serializer',
  ],
  testPathIgnorePatterns: [
    '/node_modules/',
    '/\\.cache/',
  ],
}
