import { createStore } from './createStore';
import { reducerType } from './createStore'
// redux
// 1. createStore 创建
// 2. reducer 初始化/修改 state
// 3. getState 获取状态值
// 4. dispatch 提交
// 5. subscribe 变更订阅 

export const reducer1: reducerType = (state = 0, { type , payload = 1 }) => {
  switch (type) {
    case 'ADD':
      return state + payload
    case 'MINUS':
      return state - payload
    default:
      return state 
  }
}

const store = createStore(reducer1)

export default store