import test from 'ava'
import React from 'react'
import {create} from 'react-test-renderer'

test('render with fixed Sharp image', async t => {
  const {GatsbyImage} = await import('.')
  const data = {
    childImageSharp: {
      fixed: {
        height: 100,
        src: '/some/url',
        srcSet: '/some/url 100w, /another/url 200w',
        width: 100,
      },
    },
    url: '/some/url',
  }
  const component = create(<GatsbyImage data={data} />)
  t.snapshot(component.toJSON())
})

test('render with fluid Sharp image', async t => {
  const {GatsbyImage} = await import('.')
  const data = {
    childImageSharp: {
      fluid: {
        aspectRatio: 1,
        presentationWidth: 100,
        sizes: '(max-width: 50px) 50vw, 100px',
        src: '/some/url',
        srcSet: '/some/url 100w, /another/url 200w',
      },
    },
    url: '/some/url',
  }
  const component = create(<GatsbyImage data={data} />)
  t.snapshot(component.toJSON())
})

test('render with no Sharp image', async t => {
  const {GatsbyImage} = await import('.')
  const data = {
    url: '/some/url',
  }
  const component = create(<GatsbyImage data={data} />)
  t.snapshot(component.toJSON())
})
