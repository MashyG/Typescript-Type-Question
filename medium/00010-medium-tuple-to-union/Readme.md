## 解题过程

描述：实现泛型TupleToUnion<T>，它返回元组所有值的合集

### 例子 🌰

```ts
type Arr = ['1', '2', '3']

type Test = TupleToUnion<Arr> // expected to be '1' | '2' | '3'
```

### JavaScript

```js
const arr = [1,2,3]

const returnArr = arr[0] | arr[1] | arr[2]
```