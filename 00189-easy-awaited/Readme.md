## 解题过程

### `Promise<ExampleType>`，请你返回 `ExampleType` 类型

注意：<br>
1. 限制 `Promise` 类型
2. 输出 `Promise` 的类型

```js
// type MyAwaited<T extends Promise<unknown>> = any  // 限制 `Promise` 类型

type MyAwaited<T> = T extends Promise<infer X> ? X : never // 输出 `Promise` 的类型

// 若自定义变量 X 为 Promise 时，需要对 X 递归地执行 MyAwaited，否则直接返回 X
type MyAwaited<T extends Promise<unknown>> = T extends Promise<infer X>
  ? X extends Promise<unknown>
    ? MyAwaited<X>
    : X
  : never

```