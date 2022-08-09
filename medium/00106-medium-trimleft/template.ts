type sp = ' ' | '\n' | '\t'

type TrimLeft<S extends string> = S extends `${sp}${infer R}` ? TrimLeft<R> : S
