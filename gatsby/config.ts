import {GatsbyConfig} from 'gatsby'
import {resolve} from 'path'
import {DEFAULT_LANGUAGE} from '~/common/context'

const PAGES_PATH = resolve('src/gatsby/pages')

/** Gatsby configuration */
export const config: GatsbyConfig = {
  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    {
      options: {
        langKeyDefault: DEFAULT_LANGUAGE,
        pagesPaths: [PAGES_PATH],
      },
      resolve: 'gatsby-plugin-i18n',
    },
    {
      options: {
        path: PAGES_PATH,
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
