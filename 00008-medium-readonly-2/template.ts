import { MyExclude } from '../00043-easy-exclude/template'

export type MyReadonly2<T, K extends keyof T = keyof T> = {
  [key in MyExclude<keyof T, K>]: T[key]
} &
  { readonly [key in K]: T[key] }
