
interface actionType {
  type: string | symbol,
  [key: string]: any
}

export interface reducerType {
  (state: any, action: actionType): any
}

class S_redux {
  constructor (reducer: reducerType) {
    this.reducer = reducer
    this.dispatch({type: Symbol()}) // 获取case default 的state 
  }

  reducer = undefined // 
  state: any = {} // 
  subscribers = []

  getState = () => {
    return this.state
  }

  subscribe = (f) => {
    this.subscribers.push(f)
  }

  dispatch = (action: actionType) => {
    console.log('dispatch', this.state)
    this.state = this.reducer(this.state, action)
    this.subscribers.forEach(cb => cb())
  }
}

const createStore = (reducer: reducerType, middleFn?) => {
  
  if (middleFn) {
    const store = new S_redux(reducer)
    return middleFn(store)
  }
  const store = new S_redux(reducer)
  return store
}

export {createStore}