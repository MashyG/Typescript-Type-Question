import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Pop<[3, 2, 1]>, [3, 2]>>,
  Expect<Equal<Pop<['a', 'b', 'c', 'd']>, ['a', 'b', 'c']>>,

  Expect<Equal<Shift<['a', 'b', 'c', 'd']>, ['b', 'c', 'd']>>,
  Expect<Equal<PushType<['a', 'b', 'c'], 'd'>, ['a', 'b', 'c', 'd']>>,
  Expect<Equal<unShift<['a', 'b', 'c'], 'd'>, ['d', 'a', 'b', 'c']>>
]
