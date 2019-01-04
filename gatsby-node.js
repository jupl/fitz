const TSConfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

exports.onCreateWebpackConfig = ({actions, getConfig}) => {
  actions.setWebpackConfig({
    resolve: {
      plugins: [
        new TSConfigPathsPlugin({extensions: getConfig().resolve.extensions}),
      ],
    },
  })
}
