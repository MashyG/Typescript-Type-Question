``` ts
interface Todo {
  title: string
  description: string
  completed: boolean
}

type TodoPreview = MyPick<Todo, 'title' | 'completed'>

// MyPick：在Todo中选取出 title 或者 completed

const todo: TodoPreview = {
  title: 'Clean room',
  completed: false,
}
```

# 解题过程:转化为js

``` ts
function MyPick (Todo, keys) {
  let obj = {}
  keys.forEach(key => { // 遍历对比 Todo 中的 key
    if (key in Todo) {  // 约束必须存在于Todo
      obj[key] = Todo[key]  // 赋值于对象
    }
  })
  return obj  // 返回一个对象
}
```

## 注意 - 知识点（Typescript）

[mapped](https://www.typescriptlang.org/docs/handbook/2/mapped-types.html)
[keyof](https://www.typescriptlang.org/docs/handbook/2/keyof-types.html)
[constraints](https://www.typescriptlang.org/docs/handbook/2/generics.html#generic-constraints)
[indexed](https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html)
