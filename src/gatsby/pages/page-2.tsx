import {Link} from 'gatsby'
import React from 'react'
import {GatsbyLayout} from '../components/layout'
import {GatsbySEO} from '../components/seo'

// tslint:disable-next-line:no-default-export
export default () => (
  <GatsbyLayout>
    <GatsbySEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </GatsbyLayout>
)
