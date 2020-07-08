import {GatsbyConfig} from 'gatsby'
import {GatsbyMetadata} from '_/gatsby/types/metadata'

const COLOR = '#663399'

/**
 * Gatsby static data.
 */
export const siteMetadata: GatsbyMetadata = {
  author: 'John Doe',
  description: "Description for John Doe's website.",
  title: "John Doe's Website",
}

/**
 * Gatsby plugins.
 */
export const plugins: GatsbyConfig['plugins'] = [
  'gatsby-plugin-styled-components',
  'gatsby-plugin-react-helmet',
  {
    options: {
      path: 'src/+pages',
    },
    resolve: 'gatsby-plugin-page-creator',
  },
  {
    options: {
      name: 'images',
      path: 'src/assets/images',
    },
    resolve: 'gatsby-source-filesystem',
  },
  'gatsby-plugin-sharp',
  'gatsby-transformer-sharp',
  {
    options: {
      background_color: COLOR,
      display: 'minimal-ui',
      icon: 'src/assets/images/gatsby-icon.png',
      name: siteMetadata.title,
      start_url: '/',
      theme_color: COLOR,
    },
    resolve: 'gatsby-plugin-manifest',
  },
]
