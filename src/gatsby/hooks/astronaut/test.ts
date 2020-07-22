import {renderHook} from '@testing-library/react-hooks'

beforeAll(async () => {
  const gatsby = await import('gatsby')
  jest
    .spyOn(gatsby, 'useStaticQuery')
    .mockReturnValue({astronaut: {url: 'astronaut.svg'}})
})

afterAll(async () => {
  const gatsby = await import('gatsby')
  jest.spyOn(gatsby, 'useStaticQuery').mockRestore()
})

test('hook', async () => {
  const {useGatsbyAstronaut} = await import('.')
  const {result} = renderHook(() => useGatsbyAstronaut())
  expect(result.current).toMatchSnapshot()
})
