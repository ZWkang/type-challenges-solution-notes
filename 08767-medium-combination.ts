// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<Combination<['foo', 'bar', 'baz']>,
  'foo' | 'bar' | 'baz' | 'foo bar' | 'foo bar baz' | 'foo baz' | 'foo baz bar' | 'bar foo' | 'bar foo baz' | 'bar baz' | 'bar baz foo' | 'baz foo' | 'baz foo bar' | 'baz bar' | 'baz bar foo'>>,

  Expect<Equal<NumberCombine<[0,1]>, [0] | [1] | [0, 1]>>
]


// ============= Your Code Here =============
type Combination<T extends string[], Union = T[number], U = Union> = 
  U extends infer I extends string
    ? I | `${I} ${Combination<[], Exclude<Union, I>>}`
    : never

type NumberCombine<T extends number[], Union = T[number], U = Union> = 
  U extends infer I extends number
  // ? I | `${I} ${Combination<[], Exclude<Union, I>>}`
  ? [I] | [I, ...NumberCombine<[I], Exclude<Union, I>>]
  : never

type Permutation<T, K=T> =
  [T] extends [never]
    ? []
    : K extends K
      ? [K, ...Permutation<Exclude<T, K>>]
      : never

type Permuted = Permutation<1 | 2>  // ['a', 'b'] | ['b' | 'a']

type zzz = NumberCombine<[1,2]>