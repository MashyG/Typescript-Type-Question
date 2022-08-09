// type MyAwaited<T> = T extends Promise<infer X> ? X : never

type MyAwaited<T extends Promise<unknown>> = T extends Promise<infer X>
  ? X extends Promise<unknown>
    ? MyAwaited<X>
    : X
  : never
