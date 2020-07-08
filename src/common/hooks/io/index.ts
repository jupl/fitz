import * as IO from 'io-ts'
import {useMemo} from 'react'
import {decode} from '../../util/io'

/**
 * Decode wrapped with memoization.
 * @param type IO type
 * @param value Value to attempt to decode
 * @param fallback Optional fallback value to avoid error thrown
 * @return Successful value
 */
export const useDecode: typeof decode = (type, value, fallback) =>
  useMemo(() => decode(type, value, fallback), [type, value, fallback])

/**
 * Encode wrapped with memoization.
 * @param type IO type
 * @param value Value to encode
 * @return Successful value
 */
export const useEncode = <A, O>(type: IO.Encoder<A, O>, value: A) =>
  useMemo(() => type.encode(value), [type, value])
