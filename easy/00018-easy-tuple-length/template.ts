type Length<T extends readonly any[]> = T['length']

// type tupleArr = [string, number]
// const strAndNum1: tupleArr = ['1', 4] // 正确
// const strAndNum2: tupleArr = [1, 4] // 错误
// type strAndNumLength = tupleArr['length']
// const jsArr = ['123', 4]
// const jsArrLength = jsArr.length
