/**
 * Ava configuration.
 */
// eslint-disable-next-line import/no-default-export
export default {
  extensions: ['js', 'ts', 'tsx'],
  files: ['src/**/{*.,}test.*'],
  require: ['./test/setup'],
}
