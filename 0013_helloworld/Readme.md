``` ts
  type HelloWorld = any
  // 希望 HelloWorld 是一个 string 类型，使得下面成立
  type test = Expect<Equal<HelloWorld, string>>
```