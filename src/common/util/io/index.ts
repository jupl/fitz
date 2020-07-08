import {isRight} from 'fp-ts/es6/Either'
import * as IO from 'io-ts'
import {reporter} from 'io-ts-reporters'

/**
 * Decode wrapped with memoization.
 * @param type IO type
 * @param value Value to attempt to decode
 * @param fallback Optional fallback value to avoid error thrown
 * @return Successful value
 */
export const decode = <A>(
  type: IO.Decoder<unknown, A>,
  value: unknown,
  fallback?: A,
) => {
  const validation = type.decode(value)
  if (!isRight(validation)) {
    if (fallback === undefined) {
      throw new Error(reporter(validation).join('\n'))
    }
    return fallback
  }
  return validation.right
}
