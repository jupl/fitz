import React from 'react'

// https://www.gatsbyjs.org/docs/unit-testing/

type LinkProps<T> = import('gatsby').GatsbyLinkProps<T>

const gatsby: typeof import('gatsby') = jest.requireActual('gatsby')

const Link = <T extends Record<string, unknown>>({
  activeClassName: _activeClassName,
  activeStyle: _activeStyle,
  getProps: _getProps,
  innerRef: _innerRef,
  partiallyActive: _partiallyActive,
  ref: _ref,
  replace: _replace,
  to,
  ...rest
}: LinkProps<T>) => <a {...rest} href={to} />

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
module.exports = {
  ...gatsby,
  Link,
  StaticQuery: jest.fn(),
  graphql: jest.fn(),
  useStaticQuery: jest.fn(),
}
