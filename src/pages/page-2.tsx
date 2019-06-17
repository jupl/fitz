import {Link} from 'gatsby'
import React from 'react'
import {Layout} from '~/common/components/layout'
import {SEO} from '~/common/components/seo'

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

// tslint:disable-next-line:no-default-export
export default SecondPage
