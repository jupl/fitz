import Image from 'gatsby-image'
import styled from 'styled-components'

interface Props {
  $maxWidth: number
}

/**
 * Render fluid sharp image.
 * @param props Component properties
 * @param props.$maxWidth Max width of image
 * @return React component
 */
export const SharpFluidImage = styled(Image)`
  margin: 0 auto;
  max-width: ${({$maxWidth}: Props) => $maxWidth}px;
`

/**
 * Render non sharp image.
 * @return React component
 */
export const NonSharpImage = styled.img`
  width: 100%;
`
