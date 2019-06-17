import React from 'react'
import {Layout} from '~/common/components/layout'
import {SEO} from '~/common/components/seo'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
)

// tslint:disable-next-line:no-default-export
export default NotFoundPage
