type ToUnion<T> = T extends any[] ? T[number] : T

type Without<
  T extends any[],
  F,
  U = ToUnion<F>,
  R extends any[] = []
> = T extends [infer First, ...infer Rest]
  ? First extends U
    ? Without<Rest, F, U, [...R]>
    : Without<Rest, F, U, [...R, First]>
  : R
