## 解题过程

### 在类型系统里实现 JavaScript 的 Array.includes 方法，这个类型接受两个参数，返回的类型要么是 true 要么是 false

注意
1. 遍历
2. 模块的导出与导入

```js
// 递归实现
function myIncludes(arr, target) {
  function run(list, t) {
    if (!list.length) return false
    const [first, ...rest] = list
    if (first === t) {
      return true
    } else {
      return run(rest, t)
    }
  }
  return run(arr, target)
}
```
