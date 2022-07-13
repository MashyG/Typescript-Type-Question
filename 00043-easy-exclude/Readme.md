## 解题过程

### 从联合类型T中排除U的类型成员，来构造一个新的类型

```js
// 假设 T 和 U 是个数组
const T = ['a', 'b', 'c']
const U = ['a']
function exclude(T, U) {
  const result = []
  T.forEach(t => {
    if (!U.includes(t)) {
      result.push(t)
    }
  })
  return result
}
exclude(T, U) // ['b', 'c']
```

## 知识点

1. extends
