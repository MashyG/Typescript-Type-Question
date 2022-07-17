```ts
interface Todo {
  title: string
  description: string
  completed: boolean
}
// 移除相关key
type t = MyExclude<keyof Todo, 'description'> // 'title' | 'completed'
// 选取出移除后
type tt = MyPick<Todo, t> // { title: string completed: boolean }
```