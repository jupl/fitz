import test from 'ava'
import React from 'react'
import {create} from 'react-test-renderer'

test('render', async t => {
  const {Header} = await import('.')
  const component = create(<Header title="Title" />)
  t.snapshot(component.toJSON())
})
