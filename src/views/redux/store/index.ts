import { createStore, applyMiddleware } from 'redux'
// import thunk from 'redux-chunk'
// import logger from 'redux-logger'
// redux
// 1. createStore 创建
// 2. reducer 初始化/修改 state
// 3. getState 获取状态值
// 4. dispatch 提交
// 5. subscribe 变更订阅 

export const reducer1 = (state = 0, { type , payload = 1 }) => {
  switch (type) {
    case 'ADD':
      return state + payload
    case 'MINUS':
      return state - payload
    default:
      return state 
  }
}

// const store = createStore(reducer1, applyMiddleware(thunk, logger))
const store = createStore(reducer1)

export default store