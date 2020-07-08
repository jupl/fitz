import test from 'ava'
import React from 'react'
import {create} from 'react-test-renderer'
import {replace} from 'testdouble'
import {useFakeTimers} from 'sinon'

test.before(() => {
  replace('../../hooks/metadata', {
    useGatsbyMetadata: () => ({
      author: 'Author',
      description: 'Description',
      title: 'Title',
    }),
  })
  useFakeTimers({
    now: 1594385918516,
  })
})

test('render', async t => {
  const {GatsbyLayout} = await import('.')
  const component = create(<GatsbyLayout>Hello</GatsbyLayout>)
  t.snapshot(component.toJSON())
})
