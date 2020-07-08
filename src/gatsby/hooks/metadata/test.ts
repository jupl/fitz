import test from 'ava'
import {when} from 'testdouble'
import {renderHook} from '@testing-library/react-hooks'

test.before(async () => {
  const {useStaticQuery} = await import('gatsby')
  const {query} = await import('.')
  // @ts-ignore
  when(useStaticQuery(query)).thenReturn({
    site: {
      metadata: {
        author: 'Author',
        description: 'Description',
        title: 'Title',
      },
    },
  })
})

test('hook', async t => {
  const {useGatsbyMetadata} = await import('.')
  const {result} = renderHook(() => useGatsbyMetadata())
  t.snapshot(result.current)
})
