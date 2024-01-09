// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'
import { ExpectFalse, NotEqual } from './test-utils'

type cases = [
  Expect<Equal<StartsWith<'abc', 'ac'>, false>>,
  Expect<Equal<StartsWith<'abc', 'ab'>, true>>,
  Expect<Equal<StartsWith<'abc', 'abcd'>, false>>,
]


// 逐字累加分解，然后判断分解后的值是否与原先一致
// ============= Your Code Here =============
type StartsWith<T extends string, U extends string, appendingStr extends string = ''> = 
  U extends appendingStr
    ? true
    : T extends `${infer R}${infer UU}`
      ? StartsWith<UU, U, `${appendingStr}${R}`>
      : false;
