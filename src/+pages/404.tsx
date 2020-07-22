import React from 'react'
import {GatsbyLayout} from '~/gatsby/components/layout'
import {GatsbySEO} from '~/gatsby/components/seo'

const HTTP404Page = () => (
  <GatsbyLayout>
    <GatsbySEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </GatsbyLayout>
)

/**
 * HTTP 404 page.
 */
// eslint-disable-next-line import/no-default-export
export default HTTP404Page
