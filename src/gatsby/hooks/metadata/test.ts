import {renderHook} from '@testing-library/react-hooks'

beforeAll(async () => {
  const gatsby = await import('gatsby')
  jest.spyOn(gatsby, 'useStaticQuery').mockReturnValue({
    site: {
      metadata: {
        author: 'Author',
        description: 'Description',
        title: 'Title',
      },
    },
  })
})

afterAll(async () => {
  const gatsby = await import('gatsby')
  jest.spyOn(gatsby, 'useStaticQuery').mockRestore()
})

test('hook', async () => {
  const {useGatsbyMetadata} = await import('.')
  const {result} = renderHook(() => useGatsbyMetadata())
  expect(result.current).toMatchSnapshot()
})
