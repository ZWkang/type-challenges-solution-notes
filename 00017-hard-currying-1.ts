// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

const curried1 = Currying((a: string, b: number, c: boolean) => true)
const curried2 = Currying((a: string, b: number, c: boolean, d: boolean, e: boolean, f: string, g: boolean) => true)

type cases = [
  Expect<Equal<
    typeof curried1, (a: string) => (b: number) => (c: boolean) => true
  >>,
  Expect<Equal<
    typeof curried2, (a: string) => (b: number) => (c: boolean) => (d: boolean) => (e: boolean) => (f: string) => (g: boolean) => true
  >>,
]


type MakCurringFn<T extends any[] = [], Result = true> = T extends [...infer R, infer U]
  ? MakCurringFn<R, (a: U) => Result>
  : Result

// ============= Your Code Here =============
declare function Currying<T extends (...arg: any) => void>(fn: T): MakCurringFn<Parameters<T>>