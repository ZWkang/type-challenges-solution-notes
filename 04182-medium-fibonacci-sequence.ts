// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<Fibonacci<3>, 2>>,
  Expect<Equal<Fibonacci<8>, 21>>,
]


// ============= Your Code Here =============
type buildArr<T extends number = 0, Arr extends any[] = []> = T extends number 
  ? []
  : Arr['length'] extends T ? Arr : buildArr<T, [...Arr, 0]>

type AddOne<T extends number> = [...buildArr<T>, 0]['length'];
type DecOne<T extends number, R extends number[] = []> = buildArr<T> extends [...R, infer Z] ? R['length'] : never;

type Odd<T extends number, S extends number> = [...buildArr<T>, ...buildArr<S>]['length']
type num = 3;

type Fibonacci<T extends number, nowNumber extends number = 0, Result extends number = 0> = 
  nowNumber extends T
    ? Result
    : nowNumber extends number
      ? Fibonacci<T, Odd<nowNumber, num>, Odd<nowNumber, Result>>
      : never

type zzz = AddOne<'s'>
type ggg = Fibonacci<3>
type zzzz = Odd<0, 1> extends number ? true : false;

type yyy = 's' extends number ? true: false 