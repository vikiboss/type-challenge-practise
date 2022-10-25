// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<MyEqual<true, false>, false>>,
  Expect<Equal<MyEqual<true, 1>, false>>,
  Expect<Equal<MyEqual<{ name: "name" }, { name: "name" }>, true>>,
  Expect<Equal<MyEqual<{ name: "name" }, { readonly name: "name" }>, false>>,
  Expect<Equal<MyEqual<() => {}, () => {}>, true>>,
  Expect<Equal<MyEqual<<T>() => T, () => {}>, false>>,
  Expect<Equal<MyEqual<<T>() => T, <T>() => T>, true>>,
  Expect<Equal<MyEqual<() => void, () => void>, true>>,
  Expect<Equal<MyEqual<[123, 123], [123]>, false>>,
  Expect<Equal<MyEqual<1 | 2 | 3, 1>, false>>,
  Expect<Equal<MyEqual<1 | 2 | 3, 1 | 2>, false>>,
  Expect<Equal<MyEqual<1, 1 | 2 | 3>, false>>,
  Expect<Equal<MyEqual<1 | 2, 1 | 2 | 3>, false>>,
  Expect<Equal<MyEqual<1 | 2 | 3, 1 | 2 | 3>, true>>,
  Expect<Equal<MyEqual<[123, 123], [123, "123"]>, false>>,
  Expect<Equal<MyEqual<Set<string>, Set<number>>, false>>,
  Expect<Equal<MyEqual<Record<string, unknown>, Record<string, unknown>>, true>>,
  Expect<Equal<MyEqual<Record<string, unknown>, Record<string, any>>, false>>
]


// ============= Your Code Here =============
type MyEqual<X, Y> =
  (<T>() => T extends X ? 1 : 0) extends
  (<T>() => T extends Y ? 1 : 0) ? true : false