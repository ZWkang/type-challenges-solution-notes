// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<LengthOfString<''>, 0>>,
  Expect<Equal<LengthOfString<'kumiko'>, 6>>,
  Expect<Equal<LengthOfString<'reina'>, 5>>,
  Expect<Equal<LengthOfString<'Sound! Euphonium'>, 16>>,
]


// 1. str 打平后转化为数组，然后计算其长度
// ============= Your Code Here =============
type LengthOfString<S extends string, Arr extends any[] = []> = S extends '' 
  ? Arr['length'] 
  : S extends `${infer R}${infer ZZ}`
    ? LengthOfString<ZZ, [0, ...Arr]>
    : [...Arr, 0]['length']