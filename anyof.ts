// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<AnyOf<[1, 'test', true, [1], { name: 'test' }, { 1: 'test' }]>, true>>,
  Expect<Equal<AnyOf<[1, '', false, [], {}]>, true>>,
  Expect<Equal<AnyOf<[0, 'test', false, [], {}]>, true>>,
  Expect<Equal<AnyOf<[0, '', true, [], {}]>, true>>,
  Expect<Equal<AnyOf<[0, '', false, [1], {}]>, true>>,
  Expect<Equal<AnyOf<[0, '', false, [], { name: 'test' }]>, true>>,
  Expect<Equal<AnyOf<[0, '', false, [], { 1: 'test' }]>, true>>,
  Expect<Equal<AnyOf<[0, '', false, [], { name: 'test' }, { 1: 'test' }]>, true>>,
  Expect<Equal<AnyOf<[0, '', false, [], {}]>, false>>,
  Expect<Equal<AnyOf<[]>, false>>,
]


type falsey = 0 | "" | false

// ============= Your Code Here =============
// type AnyOf<T extends readonly any[]> =
//   T extends [infer L, ...infer Rest]
//     ? L extends falsey
//       ? AnyOf<Rest>
//       : Equal<L, {}> extends true
//           ? AnyOf<Rest>
//           : Equal<L, []> extends true
//             ? AnyOf<Rest>
//             : true
//     : false


type AnyOf<T extends any[]> = T[number] extends 0 | '' | false | [] | { [key: string]: never }
  ? false : true;