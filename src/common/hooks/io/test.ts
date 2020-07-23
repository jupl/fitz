import {expect, test} from '@jest/globals'
import {renderHook} from '@testing-library/react-hooks'

test('useDecode hook', async () => {
  const IO = await import('io-ts')
  const {useDecode} = await import('.')
  const {result} = renderHook(() => useDecode(IO.number, 1))
  expect(result.current).toMatchSnapshot()
})

test('useEncode hook', async () => {
  const IO = await import('io-ts')
  const {useEncode} = await import('.')
  const {result} = renderHook(() => useEncode(IO.number, 1))
  expect(result.current).toMatchSnapshot()
})
