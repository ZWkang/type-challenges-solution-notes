// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<IndexOf<[1, 2, 3], 2>, 1>>,
  Expect<Equal<IndexOf<[2, 6, 3, 8, 4, 1, 7, 3, 9], 3>, 2>>,
  Expect<Equal<IndexOf<[0, 0, 0], 2>, -1>>,
  Expect<Equal<IndexOf<[string, 1, number, 'a'], number>, 2>>,
  Expect<Equal<IndexOf<[string, 1, number, 'a', any], any>, 4>>,
]


// ============= Your Code Here =============
type buildArr<T extends number = 0, Arr extends any[] = []> = Arr['length'] extends T ? Arr : buildArr<T, [...Arr, 0]>

type AddOne<T extends number = 0> = [0, ...buildArr<T>]['length'] 

type IndexOf<T, U, Result extends number = 0> = T extends [infer R, ...infer Rest]
  ? Equal<R, U> extends true
    ? Result
    : IndexOf<Rest, U, AddOne<Result>>
  : -1;
    
type ddd = IndexOf<[1, 2, 3], 2>