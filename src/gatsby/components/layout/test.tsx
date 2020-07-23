import {afterAll, beforeAll, expect, jest, test} from '@jest/globals'
import {create} from 'react-test-renderer'

void beforeAll(async () => {
  const hooks = await import('../../hooks/metadata')
  jest.spyOn(hooks, 'useGatsbyMetadata').mockReturnValue({
    author: 'Author',
    description: 'Description',
    title: 'Title',
  })
  jest.spyOn(Date, 'now').mockReturnValue(1594385918516)
})

void afterAll(async () => {
  const hooks = await import('../../hooks/metadata')
  jest.spyOn(hooks, 'useGatsbyMetadata').mockRestore()
  jest.spyOn(Date, 'now').mockRestore()
})

test('render', async () => {
  const React = await import('react')
  const {GatsbyLayout} = await import('.')
  const component = create(<GatsbyLayout>Hello</GatsbyLayout>)
  expect(component.toJSON()).toMatchSnapshot()
})
