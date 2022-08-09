type AnyOf<T extends readonly any[]> = T extends [infer R, ...infer U]
  ? R extends 0 | '' | [] | false | Record<string, never>
    ? AnyOf<U>
    : true
  : false

// Record<string, never> => {}
