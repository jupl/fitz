import {create} from 'react-test-renderer'

test('render', async () => {
  const React = await import('react')
  const {Header} = await import('.')
  const component = create(<Header title="Title" />)
  expect(component.toJSON()).toMatchSnapshot()
})
