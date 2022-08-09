import { MyPick } from '../../easy/00004-easy-pick/template'
import { MyExclude } from '../../easy/00043-easy-exclude/template'

export type MyOmit<T, K extends keyof T> = MyPick<T, MyExclude<keyof T, K>>
