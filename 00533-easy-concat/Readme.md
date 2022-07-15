## 解题过程

### 在类型系统里实现 JavaScript 内置的 Array.concat 方法，这个类型接受两个参数，返回的新数组类型应该按照输入参数从左到右的顺序合并为一个新的数组


```js
// 将数组解构出来
function myConcat(arr1, arr2) {
  return [...arr1, ...arr2]
}
```
