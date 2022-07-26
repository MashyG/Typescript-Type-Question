type TrimRight<S extends string> = S extends `${infer L}${sp}`
  ? TrimRight<L>
  : S
