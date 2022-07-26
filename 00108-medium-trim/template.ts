type Trim<S extends string> = S extends `${sp}${infer R}`
  ? Trim<R>
  : S extends `${infer L}${sp}`
  ? Trim<L>
  : S
