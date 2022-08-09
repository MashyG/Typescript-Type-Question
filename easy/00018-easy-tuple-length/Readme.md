## 解题过程

### 注意：只读，仅数组，并返回数组长度

```js
function getLength(arr) {
  if (!arr instanceof Array) return
  return arr.length
}
```

## 知识点：Tuple

个人理解含义：具体类型的数组

具体例子查看 [template.ts](./template.ts)
```ts
// 🌰
type tupleArr = [string, number]  // 规定 tupleArr 内容必须是字符串和数字，
const strAndNum: tupleArr = ['123', 4] // 正确
const strAndNum: tupleArr = [1, 4] // 错误。1：Type 'number' is not assignable to type 'string'.

// 另外与 js 数组区别
type strAndNumLength = tupleArr ['length'] // 具体的长度(移到变量即可查看)：type strAndNumLength = 2

// 而 js 数组
const jsArr = ['123', 4]
const jsArrLength = jsArr.length  // 非具体长度(移到变量即可查看)：const jsArrLength: number
``