## 解题过程

### 实现一个通用MyReadonly2<T, K>，它带有两种类型的参数T和K

```ts
// 🌰
interface Todo {
  title: string
  description: string
  completed: boolean
}

const todo: MyReadonly2<Todo, 'title' | 'description'> = {
  title: "Hey",
  description: "foobar",
  completed: false,
}

todo.title = "Hello" // Error: cannot reassign a readonly property
todo.description = "barFoo" // Error: cannot reassign a readonly property
todo.completed = true // OK
```

```ts
// 1. 首先取出除了 K 的 T 类型，直接转化为非只读类型
const notKType = [key in MyExclude<keyof T, K>]: T[key]
// 2. 将 含有 K de T 类型转化为制度类型
const kType = { readonly [key in K]: T[key] }
// 3. 取 1 和 2 的并集
const readonly2 = notKType & kType
```
