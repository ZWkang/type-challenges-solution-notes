// ============= Test Cases =============
import type { Equal, Expect, UnionToIntersection } from './test-utils'

type Obj = {
  a: number
  b: string
  c: boolean
  obj: {
    d: number
    e: string
    f: boolean
    obj2: {
      g: number
      h: string
      i: boolean
    }
  }
  obj3: {
    j: number
    k: string
    l: boolean
  }
}

type cases = [
  Expect<Equal<DeepPick<Obj, ''>, unknown >>,
  Expect<Equal<DeepPick<Obj, 'a'>, { a: number }>>,
  Expect<Equal<DeepPick<Obj, 'a' | 'obj.e'>, { a: number } & { obj: { e: string } }>>,
  Expect<Equal<DeepPick<Obj, 'a' | 'obj.e' | 'obj.obj2.i'>, { a: number } & { obj: { e: string } } & { obj: { obj2: { i: boolean } } }>>,
]


// type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (k: infer I) => void ? I  : never;

// ============= Your Code Here =============
type SplitText<T extends string> = T extends `${infer R}.${infer Z}`
  ? [R, ...SplitText<Z>]
  : [T];

type buildPathObject<obj extends Record<string, any>, path extends string[]> = path extends [infer R extends keyof obj, ...infer S extends string[]]
  ? 0 extends S['length']
    ? {
      [key in keyof obj as R]: obj[R]
    }
    : {
      [key in keyof obj as R]: buildPathObject<obj[R], S>
    } 
  : {}

type ddd = DeepPick<Obj, 'a'> & DeepPick<Obj, 'obj.e'>

type DeepPick<obj, str> = str extends string
  ? runExt<obj, TuplifyUnion<str>, unknown>
  : unknown

type runExt<obj, T, Result> = T extends [infer R extends string, ...infer Rest]
  ? runExt<obj, Rest, Result & buildPathObject<obj, SplitText<R>>>
  : Result

type ddsd = DeepPick<Obj, 'a' | 'obj.e'>;

type oo = TuplifyUnion<'a' | 'b'>

type gg = {} & unknown;


// oh boy don't do this
type UnionToIntersection<U> =
  (U extends any ? (k: U) => void : never) extends ((k: infer I) => void) ? I : never
type LastOf<T> =
  UnionToIntersection<T extends any ? () => T : never> extends () => (infer R) ? R : never

// TS4.0+
type Push<T extends any[], V> = [...T, V];

// TS4.1+
type TuplifyUnion<T, L = LastOf<T>, N = [T] extends [never] ? true : false> =
  true extends N ? [] : Push<TuplifyUnion<Exclude<T, L>>, L>

type abc = 'a' | 'b' | 'c';
type t = TuplifyUnion<abc>; // ["a", "b", "c"] 