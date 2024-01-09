// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

interface Model {
  name: string
  count: number
  isReadonly: boolean
  isEnable: boolean
}

type cases = [
  Expect<Equal<PickByType<Model, boolean>, { isReadonly: boolean; isEnable: boolean }>>,
  Expect<Equal<PickByType<Model, string>, { name: string }>>,
  Expect<Equal<PickByType<Model, number>, { count: number }>>,
]


// ============= Your Code Here =============
type PickByType<T, U> = {
  [key in keyof T as (U extends T[key] ? key: never )]: T[key]
}

// type PickDiffKeys<T, U> = 

// ============= Test Cases =============
type dddd = PickByType<Model, boolean>
