import {GatsbyNode} from 'gatsby'
import TSConfigPathsPlugin from 'tsconfig-paths-webpack-plugin'

/**
 * Add additional configuration options to Webpack.
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
