import { reducerType } from './createStore'

// use combineReducer({ user, info })
interface reducersType {
  [key: string]: reducerType
}

const combineReducer = (reducers: reducersType) => {
  const reducerKeys = Object.keys(reducers)

  return function (state, action) {
    const newState = {} // 全局state
    for (let i = 0, l = reducerKeys.length; i < l; i++) {
      const key = reducerKeys[i]
      const reducer = reducers[key]
      const previousStateInKey = state[key] // 局部state
      const nextStateInKey = reducer(previousStateInKey, action)
      newState[key] = nextStateInKey // 赋值新state
    }
    return newState
  }
}


export default combineReducer