import React, {ReactNode} from 'react'
import {Normalize} from 'styled-normalize'
import {Container} from '~/common/components/container'
import {Header} from '~/common/components/header'
import {useGatsbyMetadata} from '../../hooks/metadata'

interface Props {
  children: ReactNode
}

/**
 * Render page payout.
 * @param props Component properties
 * @param props.children Children components
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
