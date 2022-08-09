// T[number]
// type TupleToUnion<T extends any[]> = T[number]

// 递归
type TupleToUnion<T extends readonly any[]> = T extends [infer R, ...infer args]
  ? R | TupleToUnion<args>
  : never
