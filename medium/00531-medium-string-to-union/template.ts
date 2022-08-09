// type String2Array<
//   T extends string,
//   U extends any[] = []
// > = T extends `${infer C}${infer R}` ? String2Array<R, [...U, C]> : U

// type StringToUnion<T extends string> = String2Array<T, []>[number]

type StringToUnion<T extends string> = T extends `${infer C}${infer R}`
  ? C | StringToUnion<R>
  : never
