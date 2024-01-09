// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<Fill<[], 0>, []>>,
  Expect<Equal<Fill<[], 0, 0, 3>, []>>,
  Expect<Equal<Fill<[1, 2, 3], 0, 0, 0>, [1, 2, 3]>>,
  Expect<Equal<Fill<[1, 2, 3], 0, 2, 2>, [1, 2, 3]>>,
  Expect<Equal<Fill<[1, 2, 3], 0>, [0, 0, 0]>>,
  Expect<Equal<Fill<[1, 2, 3], true>, [true, true, true]>>,
  Expect<Equal<Fill<[1, 2, 3], true, 0, 1>, [true, 2, 3]>>,
  Expect<Equal<Fill<[1, 2, 3], true, 1, 3>, [1, true, true]>>,
  Expect<Equal<Fill<[1, 2, 3], true, 10, 0>, [1, 2, 3]>>,
  Expect<Equal<Fill<[1, 2, 3], true, 0, 10>, [true, true, true]>>,
]


type buildArr<T extends number = 0, Arr extends any[] = []> = Arr['length'] extends T ? Arr : buildArr<T, [...Arr, 0]>

type AddOne<T extends number = 0> = [0, ...buildArr<T>]['length']

// type dddd = 大于<3, 2>


type zzz = AddOne<3>

// ============= Your Code Here =============
type Fill<
  T extends unknown[],
  N,
  Start extends number = 0,
  End extends number = T['length'],
  CalcStep extends number = 0,
  Result extends unknown[] = [],
  Flag extends boolean = false
> = T extends [infer A, ...infer B]
  ? Start extends CalcStep
    ? End extends CalcStep
      ? Fill<B, N, Start, End, AddOne<CalcStep>, [...Result, N], true>



// type ddd = Fill<[1,2,3,4], true, 1, 2>;

