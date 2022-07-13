## 解题过程
### 取数组第一位元素，取不到则返回 never

```js
function getArrayFirstValue(arr) {
  if (!arr instanceof Array) return

  const [first] = arr
  return first ? first : 'never'
}
```

## 知识点

1. extends 类型判断
2. 获取 tuple 的 length 属性: indexed
3. extends union 判断规则
4. infer 的使用
