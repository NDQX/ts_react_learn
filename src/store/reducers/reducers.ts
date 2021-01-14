
import { SHOW } from '../actions/actionTypes'
const state1 = {
  param1: 0
}
function reducer1 (state = state1, action: any) {
  switch (action.type) {
    case SHOW:
      return {...state, param1: state.param1 + 1}
      default:
      return state
  }
}

export default reducer1