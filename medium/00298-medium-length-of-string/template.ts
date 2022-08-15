type LengthOfString<
  S extends string,
  Arr extends any[] = []
> = S extends `${infer First}${infer Rest}`
  ? LengthOfString<Rest, [...Arr, First]>
  : Arr['length']

// 借助空数组暂存从字符串中获取到的字符，最后返回暂存数组的长度
