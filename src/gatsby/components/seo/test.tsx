import {create} from 'react-test-renderer'

beforeAll(async () => {
  const hooks = await import('../../hooks/metadata')
  jest.spyOn(hooks, 'useGatsbyMetadata').mockReturnValue({
    author: 'Author',
    description: 'Description',
    title: 'Title',
  })
})

afterAll(async () => {
  const hooks = await import('../../hooks/metadata')
  jest.spyOn(hooks, 'useGatsbyMetadata').mockRestore()
})

test('render', async () => {
  const React = await import('react')
  const {Helmet} = await import('react-helmet')
  const {GatsbySEO} = await import('.')
  create(<GatsbySEO />)
  expect(Helmet.peek()).toMatchSnapshot()
})
