// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<KebabCase<'FooBarBaz'>, 'foo-bar-baz'>>,
  Expect<Equal<KebabCase<'fooBarBaz'>, 'foo-bar-baz'>>,
  Expect<Equal<KebabCase<'foo-bar'>, 'foo-bar'>>,
  Expect<Equal<KebabCase<'foo_bar'>, 'foo_bar'>>,
  Expect<Equal<KebabCase<'Foo-Bar'>, 'foo--bar'>>,
  Expect<Equal<KebabCase<'ABC'>, 'a-b-c'>>,
  Expect<Equal<KebabCase<'-'>, '-'>>,
  Expect<Equal<KebabCase<''>, ''>>,
  Expect<Equal<KebabCase<'😎'>, '😎'>>,
]


// ============= Your Code Here =============

// type enumWord = 'QWERTYUIOPASDFGHJKLZXCVBNM';
// type SplitWord<T extends string> = `${T}` extends `${infer R}${infer T}` ? R | SplitWord<T> : never;
// type eachWord = SplitWord<enumWord>;

// 判断是否为大写字母
type isUpWord<T extends string> = T extends Uppercase<T> ? T extends Lowercase<T> ? false : true : false;

// 使用标示来标示是否为首字母
// 正常的解构计算，如果为大写字母且为首字母的话则返回该字母小写即可
// 如果大写字母且非首字母则返回连字符
type KebabCase<T extends string, isFirstWord extends boolean = true> = 
  T extends `${infer R}${infer S}`
    ? `${isUpWord<R> extends true 
        ? `${isFirstWord extends true 
          ? '' 
          : '-'}${Lowercase<R>}` 
        : R }${KebabCase<S, false>}`
    : T;
