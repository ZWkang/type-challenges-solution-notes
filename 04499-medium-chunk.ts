// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<Chunk<[], 1>, []>>,
  Expect<Equal<Chunk<[1, 2, 3], 1>, [[1], [2], [3]]>>,
  Expect<Equal<Chunk<[1, 2, 3], 2>, [[1, 2], [3]]>>,
  Expect<Equal<Chunk<[1, 2, 3, 4], 2>, [[1, 2], [3, 4]]>>,
  Expect<Equal<Chunk<[1, 2, 3, 4], 5>, [[1, 2, 3, 4]]>>,
  Expect<Equal<Chunk<[1, true, 2, false], 2>, [[1, true], [2, false]]>>,
]


// ============= Your Code Here =============
type Chunk<T, U, Template extends any[] = [], Save extends any[] = []> = 
  T extends []
    ? Save extends []
      ? Template extends []
        ? []
        : [...Save, Template]
      : [...Save, Template]
    : Template['length'] extends U
      ? Chunk<T, U, [], [...Save, Template]>
      : T extends [infer R, ...infer UU]
        ? Chunk<UU, U, [...Template, R], Save>
        : Chunk<[], U, Template, Save>;