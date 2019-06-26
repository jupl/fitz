import React from 'react'
import styled from 'styled-components'
import {GatsbyAstronaut} from '../components/astronaut'
import {GatsbyLayout} from '../components/layout'
import {Link} from '../components/link'
import {GatsbySEO} from '../components/seo'

// tslint:disable-next-line:no-default-export
export default () => (
  <GatsbyLayout>
    <GatsbySEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <ImageContainer>
      <GatsbyAstronaut />
    </ImageContainer>
    <Link to="/page-2">Go to page 2</Link>
  </GatsbyLayout>
)

const ImageContainer = styled.div`
  max-width: 300px;
  margin-bottom: 1.45rem;
`
