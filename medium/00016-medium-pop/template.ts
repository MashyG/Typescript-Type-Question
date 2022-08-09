type Pop<T extends any[]> = T extends [...infer rest, any] ? rest : never

type Shift<T extends any[]> = T extends [any, ...infer rest] ? rest : never

type PushType<T extends any[], V> = [...T, V]

type unShift<T extends any[], V> = [V, ...T]
