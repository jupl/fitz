import {GatsbyNode} from 'gatsby'
import TSConfigPathsPlugin from 'tsconfig-paths-webpack-plugin'

/** Gatsby Node settings */
export const node: GatsbyNode = {
  onCreateWebpackConfig({actions, getConfig}) {
    const {extensions} = getConfig().resolve
    actions.setWebpackConfig({
      resolve: {
        plugins: [
          new TSConfigPathsPlugin({extensions}),
        ],
      },
    })
  },
}
