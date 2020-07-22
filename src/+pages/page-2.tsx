import {Link} from 'gatsby'
import React from 'react'
import {GatsbyLayout} from '~/gatsby/components/layout'
import {GatsbySEO} from '~/gatsby/components/seo'

const SecondPage = () => (
  <GatsbyLayout>
    <GatsbySEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </GatsbyLayout>
)

/**
 * Second page.
 */
// eslint-disable-next-line import/no-default-export
export default SecondPage
