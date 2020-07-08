require('dotenv/config')

module.exports = {
  plugins: [
    {
      options: {configDir: 'gatsby', tsNode: true},
      resolve: 'gatsby-plugin-ts-config',
    },
  ],
}
