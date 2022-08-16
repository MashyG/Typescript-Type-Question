type LengthOfString2<
  S extends string,
  Arr extends any[] = []
> = S extends `${infer First}${infer Rest}`
  ? LengthOfString<Rest, [...Arr, First]>
  : Arr['length']

// 与（、medium/00298-medium-length-of-string/template.ts）一致
