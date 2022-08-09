type IsUnion<T, F = T> = (
  T extends F ? (F extends T ? true : false) : never
) extends true
  ? false
  : true
