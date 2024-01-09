// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  // @ts-expect-error
  Expect<Equal<DropChar<'butter fly!', ''>, 'butterfly!'>>,
  Expect<Equal<DropChar<'butter fly!', ' '>, 'butterfly!'>>,
  Expect<Equal<DropChar<'butter fly!', '!'>, 'butter fly'>>,
  Expect<Equal<DropChar<'    butter fly!        ', ' '>, 'butterfly!'>>,
  Expect<Equal<DropChar<' b u t t e r f l y ! ', ' '>, 'butterfly!'>>,
  Expect<Equal<DropChar<' b u t t e r f l y ! ', 'b'>, '  u t t e r f l y ! '>>,
  Expect<Equal<DropChar<' b u t t e r f l y ! ', 't'>, ' b u   e r f l y ! '>>,
]


// ============= Your Code Here =============
type DropChar<S, C , Add extends string = ''> = 
  S extends `${infer T}${infer U}`
    ? T extends C
      ? DropChar<U, C, Add>
      : DropChar<U, C, `${Add}${T}`>
    : Add;

  // type zzz = DropChar<'butter fly!', ''>
  // C extends ''
  //   ? DropChar<S, ' ', Add>
  //   : S extends `${infer R}${infer Rest}`
  //     ? R extends C
  //       ? DropChar<Rest, C, `${Add}`>
  //       : DropChar<Rest, C, `${Add}${R}`>
  //     : S extends C
  //       ? `${Add}`
  //       : `${Add}${S}`

        // type DropChar<S, C, K extends string = ""> = S extends `${infer F}${infer R}` ? 
        // F extends C ? DropChar<R, C, K> : DropChar<R, C, `${K}${F}`>
        // : K;