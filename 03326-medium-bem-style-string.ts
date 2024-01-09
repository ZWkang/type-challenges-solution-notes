// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<BEM<'btn', ['price'], []>, 'btn__price'>>,
  Expect<Equal<BEM<'btn', ['price'], ['warning', 'success']>, 'btn__price--warning' | 'btn__price--success'>>,
  Expect<Equal<BEM<'btn', [], ['small', 'medium', 'large']>, 'btn--small' | 'btn--medium' | 'btn--large'>>,
]


// ============= Your Code Here =============
type BEM<B extends string, E extends string[], M extends string[], Result extends string = B> =
  E extends []
  ? M extends []
  ? Result
  : `${Result}--${M[number]}`
  : BEM<B, [], M, `${Result}__${E[number]}`>


const bool = isBemType(['btn', ['price'], ['warning', 'success']], 'btn__price--warning' as const);

const aaa: typeof bool = false;