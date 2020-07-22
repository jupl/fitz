import {GatsbyNode} from 'gatsby'
import TSConfigPathsPlugin from 'tsconfig-paths-webpack-plugin'

/**
 * Add additional configuration options to Webpack.
 * @param args Gatsby create Webpack config options
 * @param args.actions Gatsby actions
 * @param args.getConfig Get Webpack config
 */
export const onCreateWebpackConfig: GatsbyNode['onCreateWebpackConfig'] = ({
  actions,
  getConfig,
}) => {
  const {extensions} = getConfig().resolve
  actions.setWebpackConfig({
    resolve: {
      plugins: [new TSConfigPathsPlugin({extensions})],
    },
  })
}
