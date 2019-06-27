import {GatsbyNode} from 'gatsby'
import TSConfigPathsPlugin from 'tsconfig-paths-webpack-plugin'

// Reset TS_NODE_PROJECT to avoid problems with plugins
delete process.env.TS_NODE_PROJECT // tslint:disable-line:no-object-mutation

/** Add additional configuration options to Webpack */
export const onCreateWebpackConfig: GatsbyNode['onCreateWebpackConfig'] = ({
  actions,
  getConfig,
}) => {
  const {extensions} = getConfig().resolve
  actions.setWebpackConfig({
    resolve: {
      plugins: [
        new TSConfigPathsPlugin({extensions}),
      ],
    },
  })
}
