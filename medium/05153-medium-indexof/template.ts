import { Equal } from '@type-challenges/utils'

export type IndexOf<T, U, I extends any[] = []> = T extends [
  infer F,
  ...infer R
]
  ? Equal<F, U> extends true
    ? I['length']
    : IndexOf<R, U, [...I, 0]>
  : -1
