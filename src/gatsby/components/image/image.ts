import Image from 'gatsby-image'
import styled from 'styled-components'

interface Props {
  $maxWidth?: number
}

/**
 * Render fluid sharp image.
 * @return React component
 */
export const SharpFluidImage = styled(Image)`
  margin: 0 auto;
  ${({$maxWidth = NaN}: Props) =>
    Number.isNaN($maxWidth) ? '' : `max-width: ${$maxWidth}px`};
`

/**
 * Render non sharp image.
 * @return React component
 */
export const NonSharpImage = styled.img`
  width: 100%;
`
