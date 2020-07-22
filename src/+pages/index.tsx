import {Link} from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import {GatsbyImage} from '~/gatsby/components/image'
import {GatsbyLayout} from '~/gatsby/components/layout'
import {GatsbySEO} from '~/gatsby/components/seo'
import {useGatsbyAstronaut} from '~/gatsby/hooks/astronaut'

const Image = styled(GatsbyImage)`
  margin-block-end: 1rem;
  margin-block-start: 1rem;
`

const IndexPage = () => {
  const astronaut = useGatsbyAstronaut()
  return (
    <GatsbyLayout>
      <GatsbySEO />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <Image data={astronaut} />
      <Link to="/page-2">Go to page 2</Link>
    </GatsbyLayout>
  )
}

/**
 * Index page.
 */
// eslint-disable-next-line import/no-default-export
export default IndexPage
