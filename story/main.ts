/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-require-imports */
const TSConfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

type Configuration = import('webpack').Configuration

exports.stories = [
  '../src/**/story.tsx',
  '../src/**/stories.tsx',
  '../src/**/*.story.tsx',
  '../src/**/*.stories.tsx',
]

exports.webpackFinal = (config: Configuration): Configuration => ({
  ...config,
  module: {
    ...config.module,
    rules: [
      ...(config.module?.rules ?? []),
      {
        loader: require.resolve('babel-loader'),
        options: {
          presets: [['react-app', {flow: false, typescript: true}]],
        },
        test: /\.tsx?$/,
      },
    ],
  },
  resolve: {
    ...config.resolve,
    extensions: [...(config.resolve?.extensions ?? []), '.ts', '.tsx'],
    plugins: [...(config.resolve?.plugins ?? []), new TSConfigPathsPlugin()],
  },
})
