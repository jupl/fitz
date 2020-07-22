/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-require-imports */
const TSConfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

type Configuration = import('webpack').Configuration

exports.addons = [
  '@storybook/addon-a11y/register',
  '@storybook/addon-knobs/register',
  '@storybook/addon-viewport/register',
]

exports.stories = [
  '../src/**/story.tsx',
  '../src/**/stories.tsx',
  '../src/**/*.story.tsx',
  '../src/**/*.stories.tsx',
]

exports.webpackFinal = ({
  module: {rules: [{use: firstRuleUse, ...rule}, ...rules], ...module} = {
    rules: [],
  },
  ...config
}: Configuration): Configuration => {
  if (!Array.isArray(firstRuleUse)) {
    throw new Error('Unrecognizable config')
  }
  const [firstUse, ...use] = firstRuleUse
  if (typeof firstUse !== 'object' || typeof firstUse.options !== 'object') {
    throw new Error('Unrecognizable config')
  }
  return {
    ...config,
    module: {
      ...module,
      rules: [
        {
          ...rule,
          exclude: [/node_modules\/(?!gatsby\/)/],
          use: [
            {
              ...firstUse,
              options: {
                ...firstUse.options,
                plugins: [
                  require.resolve('@babel/plugin-proposal-class-properties'),
                  require.resolve('babel-plugin-remove-graphql-queries'),
                ],
                presets: [
                  require.resolve('@babel/preset-react'),
                  require.resolve('@babel/preset-env'),
                ],
              },
            },
            ...use,
          ],
        },
        ...rules,
        {
          loader: require.resolve('babel-loader'),
          options: {
            plugins: [
              require.resolve('@babel/plugin-proposal-class-properties'),
              require.resolve('babel-plugin-remove-graphql-queries'),
            ],
            presets: [['react-app', {flow: false, typescript: true}]],
          },
          test: /\.tsx?$/,
        },
      ],
    },
    resolve: {
      ...config.resolve,
      extensions: [...(config.resolve?.extensions ?? []), '.ts', '.tsx'],
      mainFields: ['browser', 'module', 'main'],
      plugins: [...(config.resolve?.plugins ?? []), new TSConfigPathsPlugin()],
    },
  }
}
