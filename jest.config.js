'use strict'

const {pathsToModuleNameMapper} = require('ts-jest/utils')
const {compilerOptions} = require('./tsconfig')

module.exports = {
  coveragePathIgnorePatterns: [
    '/assets/',
    '/node_modules/',
    'story',
    'stories',
  ],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: '<rootDir>/',
  }),
  preset: '@jupl/ts',
  setupFiles: ['dotenv/config'],
  setupFilesAfterEnv: ['<rootDir>/test/setup.ts'],
  testPathIgnorePatterns: ['/node_modules/', '/\\.cache/'],
  transform: {
    '/assets/.*$': '<rootDir>/test/file-transformer.js',
  },
  transformIgnorePatterns: ['node_modules/(?!(@storybook/addon-storyshots)/)'],
}
