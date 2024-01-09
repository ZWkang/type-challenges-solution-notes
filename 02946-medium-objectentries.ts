// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'
import { ExpectFalse, NotEqual } from './test-utils'

interface Model {
  name: string
  age: number
  locations: string[] | null
}

type ModelEntries = ['name', string] | ['age', number] | ['locations', string[] | null]

type cases = [
  Expect<Equal<ObjectEntries<Model>, ModelEntries>>,
  Expect<Equal<ObjectEntries<Partial<Model>>, ModelEntries>>,
  Expect<Equal<ObjectEntries<{ key?: undefined }>, ['key', undefined]>>,
  Expect<Equal<ObjectEntries<{ key: undefined }>, ['key', undefined]>>,
]


// 数组转联合类型用 [number] 作为下标
// 对象则是用 [keyof T] 作为下标
// ============= Your Code Here =============
type ObjectEntries<T> = ObjectToUnion<{
  [key in keyof T]-?: [key, RemoveUndefined<T[key]>]
}>


type ignoreUndefined<T> = T extends undefined ? never : T
type ObjectToUnion<T> = T[keyof T];

type RemoveUndefined<T> = [T] extends [undefined] ? T : Exclude<T, undefined>;