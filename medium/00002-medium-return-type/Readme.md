## 解题过程

### 获取函数返回类型

```ts
// 🌰
const fn = (v: boolean) => {
  if (v)
    return 1
  else
    return 2
}

type a = MyReturnType<typeof fn> // 应推导出 "1 | 2"
```

```js
function returnType(args) {
  return typeOf args
}
```
