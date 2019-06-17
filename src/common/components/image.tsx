import {graphql, useStaticQuery} from 'gatsby'
import GatsbyImage from 'gatsby-image'
import React from 'react'

const QUERY = graphql`
  query {
    placeholderImage: file(relativePath: { eq: "gatsby-astronaut.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

/**
 * Render optimized image
 * @return React component
 */
export const Image = () => {
  const {placeholderImage} = useStaticQuery(QUERY)
  return <GatsbyImage fluid={placeholderImage.childImageSharp.fluid} />
}
