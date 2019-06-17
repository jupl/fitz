import {Link} from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import {Image} from '~/common/components/image'
import {Layout} from '~/common/components/layout'
import {SEO} from '~/common/components/seo'

const ImageContainer = styled.div`
  max-width: 300px;
  margin-bottom: 1.45rem;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <ImageContainer>
      <Image />
    </ImageContainer>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

// tslint:disable-next-line:no-default-export
export default IndexPage
