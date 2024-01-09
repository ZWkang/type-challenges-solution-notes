// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<FlipArguments<() => boolean>, () => boolean>>,
  Expect<Equal<FlipArguments<(foo: string) => number>, (foo: string) => number>>,
  Expect<Equal<FlipArguments<(arg0: string, arg1: number, arg2: boolean) => void>, (arg0: boolean, arg1: number, arg2: string) => void>>,
]

type Reverse<T> = T extends [infer R, ...infer Rest] ? [...Reverse<Rest>, R] : T;
// ============= Your Code Here =============
type FlipArguments<T extends (...rest: any) => void> = 
  T extends (...rest: infer P) => infer S ? (...rest: Reverse<P>) => S : never;