
interface actionType {
  type: string,
  [key: string]: any
}

export interface reducerType {
  (state: any, action: actionType): any
}

class S_redux {
  constructor (reducer: reducerType) {
    this.reducer = reducer
  }

  reducer = undefined // 可能多个 []
  state = undefined // 可能多个 {}
  subscribers = []

  getState = () => {
    return this.state
  }

  subscribe = (f) => {
    this.subscribers.push(f)
  }

  dispatch = (action: actionType) => {
    this.state = this.reducer(this.state, action)
    this.subscribers.forEach(cb => cb())
  }
}

const createStore = (reducer: reducerType) => {
  
  return new S_redux(reducer) 
}

export {createStore}