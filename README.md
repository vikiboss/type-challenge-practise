## Type Challenge Practise

> a practise collection that is worth my attention from [type-challenges](https://github.com/type-challenges/type-challenges)

- [TupleToObject](tuple-to-object.ts): usage of `T[number]`
- [Equal](euqal.ts): judge by the **strict rules** of `function parameters`
- [Include](include.ts): usage of **Recursion** and `Equal`
- [Omit](omit.ts): use `as` to rewrite object key
- [Readonly](readonly.ts): use `{} & {}` to combine object
- [DeepReadonly](deep-readonly.ts): determine whether `T` is an object by `keyof T extends never`
- [PromiseAll](promise-all.ts): see [variadic-tuple-types](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-0.html#variadic-tuple-types)
- [LookUp](look-up.ts): `U extends { type: T } ? U : never`
- [Permutation](permutation.ts): `T extends T` and `[T] extends [never]` (`Equal` is recommended)
- [LengthOfString](length-of-string.ts): get `string`'s length indirectly by turning it into an `array`.
- [AppendToObject](append-to-object.ts): `{ [K in keyof T | U]: any }`
- [KebabCase](kebab-case.ts): `Uncapitalize` and `Capitalize`
- [Diff](diff.ts): difference between `O1 & O2` and `O1 | O2` (`O1` and `O2` are plain objects)
- [AnyOf](anyof.ts): use `{ [key: string]: never }` to implement a plain and empty object