import TSConfigPathsPlugin from 'tsconfig-paths-webpack-plugin'
// tslint:disable-next-line:no-implicit-dependencies
import {Configuration, RuleSetLoader, RuleSetRule} from 'webpack'

interface Options {
  config: Configuration
}

// Patch to fix tsconfig-paths plugin
// tslint:disable-next-line:no-object-mutation
Object.assign(process.env, {TS_NODE_PROJECT: ''})

// tslint:disable-next-line:no-default-export
export default ({config}: Options): Configuration => {
  const {resolve = {}, module} = config
  const [babelRule, ...otherRules]: RuleSetRule[] = config.module
    ? config.module.rules
    : []
  const [useBabel, ...babelUses] = babelRule.use as RuleSetLoader[]
  const {extensions = [], plugins = []} = resolve
  return {
    ...config,
    module: {
      ...module,
      rules: [
        {
          ...babelRule,
          exclude: [/node_modules[\\\/](?!gatsby[\\\/])/],
          use: [
            {
              ...useBabel,
              loader: 'babel-loader',
              options: {
                ...useBabel.options as {},
                plugins: [
                  '@babel/plugin-proposal-class-properties',
                  'babel-plugin-remove-graphql-queries',
                ],
                presets: [
                  '@babel/preset-react',
                  '@babel/preset-env',
                ],
              },
            },
            ...babelUses,
          ],
        },
        ...otherRules,
        {
          loader: 'babel-loader',
          options: {
            plugins: [
              '@babel/plugin-proposal-class-properties',
              'babel-plugin-remove-graphql-queries',
            ],
            presets: [
              ['react-app', {flow: false, typescript: true}],
            ],
          },
          test: /\.(ts|tsx)$/,
        },
      ],
    },
    resolve: {
      ...resolve,
      extensions: [...extensions, '.ts', '.tsx'],
      mainFields: ['browser', 'module', 'main'],
      plugins: [...plugins, new TSConfigPathsPlugin()],
    },
  }
}
