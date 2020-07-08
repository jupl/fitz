import test from 'ava'
import React from 'react'
import {replace, func} from 'testdouble'

type LinkProps<T> = import('gatsby').GatsbyLinkProps<T>

const Link = <T extends {}>({
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

replace(global, '__PATH_PREFIX__', '')
replace(global, '___loader', {
  enqueue: func('___loader.enqueue'),
})

test.before(async () => {
  const gatsby = await import('gatsby')
  replace(gatsby.Link, 'render', Link)
  replace(gatsby, 'StaticQuery')
  replace(gatsby, 'graphql')
  replace(gatsby, 'useStaticQuery')
})
