// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type Foo = {
  name: string
  age: string
}
type Bar = {
  name: string
  age: string
  gender: number
}
type Coo = {
  name: string
  gender: number
}

type cases = [
  Expect<Equal<Diff<Foo, Bar>, { gender: number }>>,
  Expect<Equal<Diff<Bar, Foo>, { gender: number }>>,
  Expect<Equal<Diff<Foo, Coo>, { age: string; gender: number }>>,
  Expect<Equal<Diff<Coo, Foo>, { age: string; gender: number }>>,
]

// 1. 先缩小范围，缩小到 keyof O & keyof O1, 获得所有 Diff 的 key
// 2. 再类似于 Merge，把 Diff 的 key 对应的 value 取出来，放到新的对象里
// ============= Your Code Here =============
type Diff<O, O1> = {
  [key in DiffKey<O, O1>]-?: key extends keyof O1 ? O1[key]: key extends keyof O ? O[key]: never
};

type DiffKey<O, O1> = keyof Omit<O1 & O, (keyof O & keyof O1)>