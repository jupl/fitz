import {Link as GatsbyLink} from 'gatsby'
import React from 'react'
import styled from 'styled-components'

interface Props {
  siteTitle?: string
}

/**
 * Render website header
 * @return React component
 */
export const Header = ({siteTitle = ''}: Props) => (
  <Background>
    <Container>
      <Title>
        <Link to="/">{siteTitle}</Link>
      </Title>
    </Container>
  </Background>
)

const Background = styled.div`
  background: rebeccapurple;
  margin-bottom: 1.45rem;
`

const Container = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
`

const Title = styled.h1`
  margin: 0;
`

const Link = styled(GatsbyLink)`
  color: white;
  text-decoration: none;
`
