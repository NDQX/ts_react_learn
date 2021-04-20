import { createStore } from './createStore';
import { reducerType } from './createStore'
import combineReducer from './combineReducer'
import applyMiddleware, { logger, errorHalder} from './applyMiddleware'
// redux
// 1. createStore 创建
// 2. reducer 初始化/修改 state
// 3. getState 获取状态值
// 4. dispatch 提交
// 5. subscribe 变更订阅 

export const reducer1: reducerType = (state = {count: 0}, { type , payload = 1 }) => {
  switch (type) {
    case 'ADD':
      return {...state, count: state.count + payload}
    case 'MINUS':
      return {...state, count: state.count - payload}
    default:
      return state 
  }
}

export const info: reducerType = (state = {name: '张'}, { type, name }) => {
  switch (type) {
    case 'wang':
      return {...state, name: 'wang' }
    case 'li':
      return {...state, name: 'li' }
    default:
      return state 
  }
}

// const store = createStore(combineReducer({count: reducer1, info}))
const store = createStore(
  combineReducer({count: reducer1, info}),
  applyMiddleware(logger, errorHalder)
)

export default store