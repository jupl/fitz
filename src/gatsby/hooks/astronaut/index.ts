import {graphql, useStaticQuery} from 'gatsby'
import * as IO from 'io-ts'
import {useDecode} from '_/common/hooks/io'
import {GatsbyImage} from '../../types/image'

const Query = IO.type({
  astronaut: GatsbyImage,
})

/**
 * Gatsby astronaut query.
 */
export const query = graphql`
  query {
    astronaut: file(relativePath: {eq: "gatsby-astronaut.png"}) {
      ...GatsbyImage
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageFluid
        }
      }
    }
  }
`

/**
 * Get astronaut image.
 * @return Astronaut image
 */
export const useGatsbyAstronaut = () => {
  const result = useStaticQuery(query)
  return useDecode(Query, result).astronaut
}
