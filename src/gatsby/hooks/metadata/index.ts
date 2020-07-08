import {graphql, useStaticQuery} from 'gatsby'
import * as IO from 'io-ts'
import {useDecode} from '_/common/hooks/io'
import {GatsbyMetadata} from '../../types/metadata'

const Query = IO.type({
  site: IO.type({
    metadata: GatsbyMetadata,
  }),
})

/**
 * Gatsby metdata query.
 */
export const query = graphql`
  query {
    site {
      metadata: siteMetadata {
        ...GatsbyMetadata
      }
    }
  }
`

/**
 * Get Gatsby metadata.
 * @return Gatsby metadata
 */
export const useGatsbyMetadata = () => {
  const result = useStaticQuery(query)
  return useDecode(Query, result).site.metadata
}
