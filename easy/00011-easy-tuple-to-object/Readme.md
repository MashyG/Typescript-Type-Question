## 解题过程

### tuple 转化为 对象

- 注意：tuple 内只是 string，number，symbol，非数组，对象

```js
const arr = ['tesla', 'model 3', 'model X', 'model Y']
function tuple2Object(arr) {
  let obj = {}
  arr.forEach(element => {
    if (element instanceof Array) {
      obj = {
        ...obj,
        [element]: element
      }
    }
  })
  return obj
}
tuple2Object(arr) // {tesla: 'tesla', model 3: 'model 3', model X: 'model X', model Y: 'model Y'}
```

## 知识点

1. extends 类型判断
2. 获取 tuple 的 length 属性: indexed
3. extends union 判断规则
4. infer 的使用
