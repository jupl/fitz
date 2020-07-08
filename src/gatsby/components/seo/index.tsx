import React, {HTMLAttributes, useMemo} from 'react'
import {Helmet} from 'react-helmet'
import {useGatsbyMetadata} from '../../hooks/metadata'

type Meta = HTMLAttributes<HTMLMetaElement>

interface Props {
  description?: string
  meta?: Meta[]
  title?: string
}

const DEFAULT_META: Meta[] = []

/**
 * Render SEO-specific metadata.
 * @return React component
 */
export const GatsbySEO = ({
  description: pageDescription,
  title: pageTitle,
  meta: pageMeta = DEFAULT_META,
}: Props) => {
  const {author, ...metadata} = useGatsbyMetadata()
  const description = pageDescription ?? metadata.description
  const title = pageTitle ?? metadata.title
  const meta = useMemo<Meta[]>(
    () => [
      {
        content: description,
        name: 'description',
      },
      {
        content: title,
        property: 'og:title',
      },
      {
        content: description,
        property: 'og:description',
      },
      {
        content: 'website',
        property: 'og:type',
      },
      {
        content: 'summary',
        name: 'twitter:card',
      },
      {
        content: author,
        name: 'twitter:creator',
      },
      {
        content: title,
        name: 'twitter:title',
      },
      {
        content: description,
        name: 'twitter:description',
      },
      ...pageMeta,
    ],
    [author, description, pageMeta, title],
  )
  return (
    <Helmet
      defaultTitle={metadata.title}
      meta={meta}
      title={pageTitle}
      titleTemplate={`%s | ${metadata.title}`}
    />
  )
}
