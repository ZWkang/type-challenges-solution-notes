// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<GetRequired<{ foo: number; bar?: string }>, { foo: number }>>,
  Expect<Equal<GetRequired<{ foo: undefined; bar?: undefined }>, { foo: undefined }>>,
]


// ============= Your Code Here =============
// 因为如果是 Pick出来的对象是符合空的话，证明该字段为partial的。
type GetRequired<T> = {
  [K in keyof T as {} extends Pick<T, K> ? never : K]: T[K] 
}
