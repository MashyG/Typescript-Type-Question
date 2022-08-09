type MyParameters<T extends (...args: any[]) => any> = T extends (
  ...newArgs: infer X
) => any
  ? X
  : never
