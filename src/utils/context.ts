import React from 'react'

export const UserContext = React.createContext({})

export const GoodsContext = React.createContext({value: '', dispatch: () => {}})


// // <T> 只是声明一下 不加 Array<T> 会提示T未定义
// // 可以写成其他A test<A>(arr: Array<A>)
// function test<T>(arr: Array<T>) { // T[]
//   return arr
// }

// // 初始值
// function test1<T = string> (arr: Array<T>) {
//   return arr
// }

// // T extends
// interface Sizeable {
//   size: number
// }
// function test2<T extends Sizeable> (arr: Array<T>) {
//   arr.map(i => i.size)
//   return arr
// }
// test2([{size: 1}])

// interface FT {
//   <T>(arg: T): T
// }
// function ff<T>(a: T): T {
//   return a
// }
// const F: FT = ff

// interface FFT<T> {
//   (arg: T): T
// }
