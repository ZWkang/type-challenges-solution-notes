// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<Format<'abc'>, string>>,
  Expect<Equal<Format<'a%sbc'>, (s1: string) => string>>,
  Expect<Equal<Format<'a%dbc'>, (d1: number) => string>>,
  Expect<Equal<Format<'a%dbc%s'>, (d1: number) => (s1: string) => string>>,
]


// ============= Your Code Here =============
type Format<T extends string> = buildFn<getStrMarker<T>>;

type buildFn<T, Result extends string | Function = string> = T extends [...infer Rest, infer R]
  ? buildFn<Rest, (s1: 's' extends R ? string : number) => Result>
  : Result

type getStrMarker<T, Result extends any[] = []> = T extends `${string}%${infer U extends 's' | 'd'}${infer Rest}`
  ? getStrMarker<Rest, [...Result, U]>
  : Result;