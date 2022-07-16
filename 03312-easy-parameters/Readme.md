## 解题过程

### 实现内置的 Parameters 类型，而不是直接使用它

```ts
// 🌰
const foo = (arg1: string, arg2: number): void => {}
type FunctionParamsType = MyParameters<foo> // [arg1: string, arg2: number]
```


```js
function getParameters(args) {
  return [...args]
}
```
