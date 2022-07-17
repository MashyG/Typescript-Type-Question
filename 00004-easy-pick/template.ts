// 原题： type MyPick<T, K> = any

// 解决：
export type MyPick<T, K extends keyof T> = {
  [P in K]: T[P]
}

/**
 * @知识点
 * 遍历：【P in K] => ts 文档（mapped）
 * 约束 K 于 Todo 内：K extends keyof T => ts 文档（keyof: lookup; extends: constraints）
 * 赋值：T[P] => ts 文档（indexed）
 */
