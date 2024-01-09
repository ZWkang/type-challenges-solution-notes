// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<TupleToNestedObject<['a'], string>, { a: string }>>,
  Expect<Equal<TupleToNestedObject<['a', 'b'], number>, { a: { b: number } }>>,
  Expect<Equal<TupleToNestedObject<['a', 'b', 'c'], boolean>, { a: { b: { c: boolean } } }>>,
  Expect<Equal<TupleToNestedObject<[], boolean>, boolean>>,
]


// ============= Your Code Here =============
type TupleToNestedObject<T = [], U = any> = 
    T extends readonly [infer F extends PropertyKey, ...infer R]
      ? R['length'] extends 0
        ? Record<F, U>
        : Record<F, TupleToNestedObject<R, U>>
      : U;

type gg = TupleToNestedObject<['a'], number>



const to = ['a', 'b', 'c'] as const;
type typeTo = typeof to;

type zzz = TupleToNestedObject<typeTo, boolean>;