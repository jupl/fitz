import * as IO from 'io-ts'
import test from 'ava'

test('decode', async t => {
  const {decode} = await import('.')
  t.is(decode(IO.number, 1), 1)
})

test('decode with fallback', async t => {
  const {decode} = await import('.')
  t.is(decode(IO.number, 'a', 1), 1)
})

test('decode with error', async t => {
  const {decode} = await import('.')
  const e = t.throws(() => decode(IO.number, 'a'))
  t.is(e.message, 'Expecting number but instead got: "a"')
})
