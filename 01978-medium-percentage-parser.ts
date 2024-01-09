// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type Case0 = ['', '', '']
type Case1 = ['+', '', '']
type Case2 = ['+', '1', '']
type Case3 = ['+', '100', '']
type Case4 = ['+', '100', '%']
type Case5 = ['', '100', '%']
type Case6 = ['-', '100', '%']
type Case7 = ['-', '100', '']
type Case8 = ['-', '1', '']
type Case9 = ['', '', '%']
type Case10 = ['', '1', '']
type Case11 = ['', '100', '']

type cases = [
  Expect<Equal<PercentageParser<''>, Case0>>,
  Expect<Equal<PercentageParser<'+'>, Case1>>,
  Expect<Equal<PercentageParser<'+1'>, Case2>>,
  Expect<Equal<PercentageParser<'+100'>, Case3>>,
  Expect<Equal<PercentageParser<'+100%'>, Case4>>,
  Expect<Equal<PercentageParser<'100%'>, Case5>>,
  Expect<Equal<PercentageParser<'-100%'>, Case6>>,
  Expect<Equal<PercentageParser<'-100'>, Case7>>,
  Expect<Equal<PercentageParser<'-1'>, Case8>>,
  Expect<Equal<PercentageParser<'%'>, Case9>>,
  Expect<Equal<PercentageParser<'1'>, Case10>>,
  Expect<Equal<PercentageParser<'100'>, Case11>>,
]


type numberSymbol = '+' | '-';
type numberPresent = "%";
// ============= Your Code Here =============

// type ddd = PercentageParser<'+100%'>
type testStr<S extends string> = S extends `${infer Z}${infer R}` ? R : never;
type testArr<S extends string[]> = S extends [infer Z, infer R] ? R : never;

type gg = testArr<['z']>



type PercentageParser<A extends string, Result extends any[] = ['', '', '']> = 
  A extends `${infer R}${infer Z}`
    ? R extends numberSymbol | numberPresent
      ? R extends numberSymbol
        ? PercentageParser<Z, [R, Result[1], Result[2]]>
        : R extends numberPresent
          ? PercentageParser<Z, [Result[0], Result[1], R]>
          : PercentageParser<Z, [Result[0], `${Result[1]}${R}`, Result[2]]>
      // ? PercentageParser<Z, [...Result, R]>
      : PercentageParser<Z, [Result[0], `${Result[1]}${R}`, '']>
    : Result


type gsg = PercentageParser<'+100%'>