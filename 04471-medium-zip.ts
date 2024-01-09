// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<Zip<[], []>, []>>,
  Expect<Equal<Zip<[1, 2], [true, false]>, [[1, true], [2, false]]>>,
  Expect<Equal<Zip<[1, 2, 3], ['1', '2']>, [[1, '1'], [2, '2']]>>,
  Expect<Equal<Zip<[], [1, 2, 3]>, []>>,
  Expect<Equal<Zip<[[1, 2]], [3]>, [[[1, 2], 3]]>>,
]


// ============= Your Code Here =============
type Zip<T, U, Sum extends any[] = []> = T extends [] 
  ? Sum
  : T extends [infer R, ...infer UU]
    ? U extends [infer RR, ...infer UUU]
      ? Zip<UU, UUU, [...Sum, [R, RR]]>
      : Sum
    : Sum;