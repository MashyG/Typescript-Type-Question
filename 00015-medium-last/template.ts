type Last<T extends any[]> = T extends [...(infer rest), infer end]
  ? end
  : never
