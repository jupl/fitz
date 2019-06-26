import {graphql, useStaticQuery} from 'gatsby'
import React, {ReactNode} from 'react'
import styled from 'styled-components'
import {Normalize} from 'styled-normalize'
import {Header} from '~/common/components/header'

interface Props {
  children: ReactNode
}

/**
 * Render page payout
 * @return React component
 */
export const GatsbyLayout = ({children}: Props) => {
  const year = new Date().getFullYear()
  const {site} = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
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

const Body = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0 1.0875rem 1.45rem;
  padding-top: 0;
`
