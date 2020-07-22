import Image from 'gatsby-image'
import React from 'react'
import {GatsbyImage as GatsbyImageType} from '../../types/image'
import {NonSharpImage, SharpFluidImage} from './image'

interface Props {
  data: GatsbyImageType
  alt?: string
  className?: string
}

/**
 * Render image from Gatsby data.
 * @param props Component properties
 * @param props.data Gatsby image data
 * @return React component
 */
export const GatsbyImage = ({data, ...props}: Props) => {
  if (!data.childImageSharp) {
    return <NonSharpImage alt="" {...props} src={encodeURI(data.url)} />
  }
  if ('fluid' in data.childImageSharp) {
    return (
      <SharpFluidImage
        {...props}
        $maxWidth={data.childImageSharp.fluid.presentationWidth}
        fluid={data.childImageSharp.fluid}
      />
    )
  }
  return <Image Tag="span" {...props} fixed={data.childImageSharp.fixed} />
}
