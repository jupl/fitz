import {GatsbyConfig} from 'gatsby'
import {resolve} from 'path'

/** Gatsby configuration */
export const config: GatsbyConfig = {
  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    {
      options: {
        path: resolve('src/gatsby/pages'),
      },
      resolve: 'gatsby-plugin-page-creator',
    },
    {
      options: {
        name: 'images',
        path: resolve('src/assets/images'),
      },
      resolve: 'gatsby-source-filesystem',
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
  ],
  siteMetadata: {
    author: '@gatsbyjs',
    description: `
      Kick off your next, great Gatsby project with this default starter. This
      barebones starter ships with the main Gatsby configuration files you
      might need.
    `.trim().replace(/\s+/g, ' '),
    title: 'Gatsby Default Starter',
  },
}
