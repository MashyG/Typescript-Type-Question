// type StringToUnion<T extends string> = String2Array<T, []>[number]

type StringToUnion<T extends string> = T extends `${infer C}${infer R}`
  ? C | StringToUnion<R>
  : never
