import {graphql, useStaticQuery} from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'

type Meta = JSX.IntrinsicElements['meta']

interface Props {
  description?: string
  lang?: string,
  meta?: Meta[]
  title: string,
}

const QUERY = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`

/**
 * Render SEO-specific metadata
 * @return React component
 */
export const SEO = ({
  description,
  title,
  lang = 'en',
  meta = [],
}: Props) => {
  const {site} = useStaticQuery(QUERY)
  const metaDescription = description !== undefined
    ? description
    : site.siteMetadata.description
  const mergedMeta: Meta[] = [
    {
      content: metaDescription,
      name: `description`,
    },
    {
      content: title,
      property: `og:title`,
    },
    {
      content: metaDescription,
      property: `og:description`,
    },
    {
      content: `website`,
      property: `og:type`,
    },
    {
      content: `summary`,
      name: `twitter:card`,
    },
    {
      content: site.siteMetadata.author,
      name: `twitter:creator`,
    },
    {
      content: title,
      name: `twitter:title`,
    },
    {
      content: metaDescription,
      name: `twitter:description`,
    },
    ...meta,
  ]
  return (
    <Helmet
      htmlAttributes={{lang}}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={mergedMeta}
    />
  )
}
