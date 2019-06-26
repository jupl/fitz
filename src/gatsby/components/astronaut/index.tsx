import {graphql, useStaticQuery} from 'gatsby'
import GatsbyImage from 'gatsby-image'
import React from 'react'

/**
 * Render optimized image
 * @return React component
 */
export const GatsbyAstronaut = () => {
  const {placeholderImage} = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "gatsby-astronaut.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return <GatsbyImage fluid={placeholderImage.childImageSharp.fluid} />
}
