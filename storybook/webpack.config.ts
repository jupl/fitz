import TSConfigPathsPlugin from 'tsconfig-paths-webpack-plugin'
// tslint:disable-next-line:no-implicit-dependencies
import {Configuration} from 'webpack'

interface Options {
  config: Configuration
}

// Patch to fix tsconfig-paths plugin
// tslint:disable-next-line:no-object-mutation
Object.assign(process.env, {TS_NODE_PROJECT: ''})

// tslint:disable-next-line:no-default-export
export default ({config}: Options): Configuration => {
  const {resolve = {}} = config
  const rules = config.module ? config.module.rules : []
  const {extensions = [], plugins = []} = resolve
  return {
    ...config,
    module: {
      ...module,
      rules: [
        ...rules,
        {
          test: /\.tsx?$/,
          use: [
            {
              loader: 'awesome-typescript-loader',
              options: {
                cacheDirectory: 'node_modules/.awcache',
                forceIsolatedModules: true,
                transpileOnly: true,
                useCache: true,
              },
            },
          ],
        },
      ],
    },
    resolve: {
      ...resolve,
      extensions: [...extensions, '.ts', '.tsx'],
      plugins: [...plugins, new TSConfigPathsPlugin()],
    },
  }
}
