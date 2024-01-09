// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'
import { ExpectFalse, NotEqual } from './test-utils'

type cases = [
  Expect<Equal<LastIndexOf<[1, 2, 3, 2, 1], 2>, 3>>,
  Expect<Equal<LastIndexOf<[2, 6, 3, 8, 4, 1, 7, 3, 9], 3>, 7>>,
  Expect<Equal<LastIndexOf<[0, 0, 0], 2>, -1>>,
  Expect<Equal<LastIndexOf<[string, 2, number, 'a', number, 1], number>, 4>>,
  Expect<Equal<LastIndexOf<[string, any, 1, number, 'a', any, 1], any>, 5>>,
]

type AddOne<T extends number = 0, Arr extends any[] = []> = T extends Arr['length'] ? [...Arr, 0]['length'] : AddOne<T, [...Arr, 0]>

type Reverse<T extends any[]> = T extends [infer F, ...infer R] ? [...Reverse<R>, F] : [];

type buildArr<T extends number, Arr extends any[] = []> = T extends Arr['length'] ? Arr : buildArr<T, [...Arr, 0]>

type Dec<T extends number, Arr extends any[] = []>  = buildArr<T> extends [...infer R, infer F] ? R['length'] : never;




// ============= Your Code Here =============
type LastIndexOf<T extends any[], U> =  T extends [...infer F, infer R] 
  ? Equal<R, U> extends true
    ? F['length']
    : LastIndexOf<F, U>
      : -1;