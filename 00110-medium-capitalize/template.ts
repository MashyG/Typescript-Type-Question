type MyCapitalize<S extends string> = S extends `${infer H}${infer other}`
  ? `${Uppercase<H>}${other}`
  : ''
