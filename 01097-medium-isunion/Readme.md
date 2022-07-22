## 解题过程

> 描述：实现一个 type IsUnion，它接受一个输入类型T并返回是否T解析为联合类型

## 分析过程

> 思路： 定义相同于 T 的 F，遍历 F，若遍历的每一项与 T 一致，则说明 T 不是联合类型，否则是联合类型

```ts
// T：string | number
//  T extends F
// 此时 T 为 F 中遍历的各项
// (F extends T ? true : false)
type f = string | number
type t = string
type flag = f extends t ? true : false // false
// 若 flag 为 false，返回 true（即联合类型）；否则不是。

// T：string
// (F extends T ? true : false)
type f = string
type t = string
type flag = f extends t ? true : false // true
```
