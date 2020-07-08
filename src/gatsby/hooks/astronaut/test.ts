import test from 'ava'
import {when} from 'testdouble'
import {renderHook} from '@testing-library/react-hooks'

test.before(async () => {
  const {useStaticQuery} = await import('gatsby')
  const {query} = await import('.')
  // @ts-ignore
  when(useStaticQuery(query)).thenReturn({astronaut: {url: 'astronaut.svg'}})
})

test('hook', async t => {
  const {useGatsbyAstronaut} = await import('.')
  const {result} = renderHook(() => useGatsbyAstronaut())
  t.snapshot(result.current)
})
