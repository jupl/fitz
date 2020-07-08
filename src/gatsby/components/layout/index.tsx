import React, {ReactNode} from 'react'
import {Normalize} from 'styled-normalize'
import {Container} from '_/common/components/container'
import {Header} from '_/common/components/header'
import {useGatsbyMetadata} from '../../hooks/metadata'

interface Props {
  children: ReactNode
}

/**
 * Render page payout.
 * @return React component
 */
export const GatsbyLayout = ({children}: Props) => {
  const year = new Date(Date.now()).getFullYear()
  const {title} = useGatsbyMetadata()
  return (
    <>
      <Normalize />
      <Header title={title} />
      <Container>{children}</Container>
      <Container as="footer">
        &copy; {year}, Built with <a href="https://www.gatsbyjs.org">Gatsby</a>
      </Container>
    </>
  )
}
