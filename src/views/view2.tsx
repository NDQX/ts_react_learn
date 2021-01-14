import { useReducer, createContext } from 'react'
import B2 from './b2'

export const V2Context = createContext(({ count: 0 } as any))

function reducer(state: any, action: any) {
  switch (action.type) {
    case 'add':
      return {count: state.count + 1}
  }
}

export default function V2 () {
  const [ state, countDispatch ]: any = useReducer(reducer, {count: 0})
  return (
    <div>
      v2

      <V2Context.Provider value={{state, countDispatch }}>
        <B2></B2>
      </V2Context.Provider>
    </div>
  )
}