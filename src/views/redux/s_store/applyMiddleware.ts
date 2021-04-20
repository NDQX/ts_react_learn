

const applyMiddleware = (...middlewares) => {
  return function () {

  }
}

const logger = (store) => (dispatch) => (action) => {
  console.log('preState', store.getState())
  dispatch(action)
  console.log('nextState', store.getState())
}

const errorHalder = (store) => (dispatch) => (action) => {
  try {
    dispatch(action)
  } catch (err) {
    console.error('err', err)
  }
}

export default applyMiddleware
export { logger, errorHalder }