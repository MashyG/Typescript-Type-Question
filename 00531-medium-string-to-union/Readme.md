
# 解题过程

> 描述: 实现一个将接收到的String参数转换为一个字母Union的类型

## 分析

1. 首先将字符串转化为数组
2. 其次遍历数组为 union 类型

```ts
// 字符串可以通过遍历和 infer 变量的方式取出每一项
// 例子 🌰
type str = '123'
type str1 = str extends `${infer C}${infer R}` ? C | R : never // '1' | '23'

// 1. 字符串转化为数组
type String2Array<
  T extends string,
  U extends any[] = []
> = T extends `${infer C}${infer R}` ? String2Array<R, [...U, C]> : U
// 此时，取 R 递归遍历出所有的字符串为数组

// 2. 遍历数组为 union 类型
// String2Array<T, []>[number]

// 总结
// 由第一步可得出，直接取 C 并切递归 R，即可得到答案，无需第二步！！
type StringToUnion<T extends string> = T extends `${infer C}${infer R}`
  ? C | StringToUnion<R>
  : never
```
