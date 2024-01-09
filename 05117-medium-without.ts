// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<Without<[1, 2], 1>, [2]>>,
  Expect<Equal<Without<[1, 2, 4, 1, 5], [1, 2]>, [4, 5]>>,
  Expect<Equal<Without<[2, 3, 2, 3, 2, 3, 2, 3], [2, 3]>, []>>,
]


// ============= Your Code Here =============
type Without<T, U, Mixin = (U extends any[] ? U[number]: U), Result extends unknown[] = []> = T extends [infer R, ...infer Rest]
  ? R extends Mixin
    ? Without<Rest, U, Mixin, Result>
    : Without<Rest, U, Mixin, [...Result, R]>
  : Result;