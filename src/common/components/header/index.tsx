import React from 'react'
import styled from 'styled-components'
import {Link as GatsbyLink} from 'gatsby'
import {Container} from '../container'

interface Props {
  title: string
}

const Background = styled.header`
  background: rebeccapurple;
  color: white;
  position: sticky;
  top: 0;
  z-index: 1000;
`

const Link = styled(GatsbyLink)`
  color: inherit;
  text-decoration: none;
`

/**
 * Render website header.
 * @return React component
 */
export const Header = ({title}: Props) => (
  <Background>
    <Container>
      <h1>
        <Link to="/">{title}</Link>
      </h1>
    </Container>
  </Background>
)
