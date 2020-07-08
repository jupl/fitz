import {graphql} from 'gatsby'
import * as IO from 'io-ts'

/**
 * Gatsby metadata runtime type.
 */
export const GatsbyMetadata = IO.type(
  {
    author: IO.string,
    description: IO.string,
    title: IO.string,
  },
  'GatsbyMetadata',
)

/**
 * Gatsby metadata type.
 */
export interface GatsbyMetadata extends IO.TypeOf<typeof GatsbyMetadata> {}

/**
 * Gatsby metadata fragment.
 */
export const fragment = graphql`
  fragment GatsbyMetadata on SiteSiteMetadata {
    author
    description
    title
  }
`
