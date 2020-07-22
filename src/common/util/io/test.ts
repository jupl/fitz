test('decode', async () => {
  const IO = await import('io-ts')
  const {decode} = await import('.')
  expect(decode(IO.number, 1)).toBe(1)
})

test('decode with fallback', async () => {
  const IO = await import('io-ts')
  const {decode} = await import('.')
  expect(decode(IO.number, 'a', 1)).toBe(1)
})

test('decode with error', async () => {
  const IO = await import('io-ts')
  const {decode} = await import('.')
  expect(() => decode(IO.number, 'a')).toThrow(
    'Expecting number but instead got: "a"',
  )
})
