import React from 'react'
import {GatsbyLayout} from '../components/layout'
import {GatsbySEO} from '../components/seo'

// tslint:disable-next-line:no-default-export
export default () => (
  <GatsbyLayout>
    <GatsbySEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </GatsbyLayout>
)
