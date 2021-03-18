
import { SHOW, COUNTADD } from '../actions/actionTypes'
const reducer1State1 = {
  param1: 0,
  count: 0
}
function reducer1 (state = reducer1State1, action: any) {
  switch (action.type) {
    case SHOW:
      return {...state, param1: state.param1 + 1}
    case COUNTADD:
      console.log('count', state)
      return {...state, count: state.count + 1}
    default:
      return state
  }
}

export default reducer1