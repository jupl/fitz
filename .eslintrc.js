'use strict'

module.exports = {
  extends: './node_modules/@jupl/ts/lint',
  ignorePatterns: ['coverage/', 'dist/', 'public/'],
  rules: {
    '@typescript-eslint/ban-ts-ignore': 'off',
    'functional/immutable-data': [
      'error',
      {
        ignoreAccessorPattern: [
          'module.exports',
          'this',
          't.context.**',
          'exports.*',
          'process.**',
        ],
        ignoreImmediateMutation: true,
      },
    ],
    'import/no-named-as-default-member': 'off',
  },
}
