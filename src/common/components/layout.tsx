import {graphql, useStaticQuery} from 'gatsby'
import React, {ReactNode} from 'react'
import styled from 'styled-components'
import {Normalize} from 'styled-normalize'
import {Header} from './header'

interface Props {
  children: ReactNode
}

const QUERY = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`

const Body = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0 1.0875rem 1.45rem;
  padding-top: 0;
`

/**
 * Render page payout
 * @return React component
 */
export const Layout = ({children}: Props) => {
  const year = new Date().getFullYear()
  const {site} = useStaticQuery(QUERY)
  return (
    <>
      <Normalize />
      <Header siteTitle={site.siteMetadata.title} />
      <Body>
        {children}
        <footer>
          © {year}, Built with <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </Body>
    </>
  )
}
