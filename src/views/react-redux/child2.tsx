import React, { Component } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { createActionCountAdd } from '../../store/actions/action'

// 如果指定了 ownProps mapStateToProps会重新调用注意性能
function mapStateToProps (state, ownProps) {
  return {
    count: state.reducer1.count
  }
}

function Child2 (props) {
  const count = useSelector((state: any) => state.reducer1.count)
  const dispatch = useDispatch()
  const add = () => {
    dispatch(createActionCountAdd())
    // dispatch({type: 'ADD'})
  }
  return (
    <div>
      { count }
      <button onClick={add}>add</button>
    </div>
  )
}

export default Child2
