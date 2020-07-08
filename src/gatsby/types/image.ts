import {graphql} from 'gatsby'
import * as IO from 'io-ts'

const FixedImage = IO.intersection([
  IO.type({
    height: IO.number,
    src: IO.string,
    srcSet: IO.string,
    width: IO.number,
  }),
  IO.partial({
    base64: IO.string,
    media: IO.string,
    srcSetWebp: IO.string,
    srcWebp: IO.string,
    tracedSVG: IO.string,
  }),
])

const FluidImage = IO.intersection([
  IO.type({
    aspectRatio: IO.number,
    presentationWidth: IO.number,
    sizes: IO.string,
    src: IO.string,
    srcSet: IO.string,
  }),
  IO.partial({
    base64: IO.string,
    media: IO.string,
    srcSetWebp: IO.string,
    srcWebp: IO.string,
    tracedSVG: IO.string,
  }),
])

/**
 * Gatsby image runtime type.
 */
export const GatsbyImage = IO.intersection(
  [
    IO.type({
      url: IO.string,
    }),
    IO.partial({
      childImageSharp: IO.union([
        IO.type({
          fixed: FixedImage,
        }),
        IO.type({
          fluid: FluidImage,
        }),
      ]),
    }),
  ],
  'GatsbyImage',
)

/**
 * Gatsby image type.
 */
export interface GatsbyImage extends IO.TypeOf<typeof GatsbyImage> {}

/**
 * Gatsby image fragment.
 */
export const fragment = graphql`
  fragment GatsbyImage on File {
    url: publicURL
  }

  fragment GatsbyImageFixed on ImageSharpFixed {
    ...GatsbyImageSharpFixed
  }

  fragment GatsbyImageFluid on ImageSharpFluid {
    ...GatsbyImageSharpFluid
    presentationWidth
  }
`
