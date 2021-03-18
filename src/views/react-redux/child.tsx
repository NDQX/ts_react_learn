import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { createActionCountAdd } from '../../store/actions/action'

// 如果指定了 ownProps mapStateToProps会重新调用注意性能
function mapStateToProps (state, ownProps) {
  return {
    count: state.reducer1.count
  }
}

// connect 第二个参数 对象 | 函数

// @(connect as any)(mapStateToProps, { createActionCountAdd })
// @(connect as any)(mapStateToProps, { 
//    add: () => createActionCountAdd()
// })
@(connect as any)(
  mapStateToProps,
  dispatch => {
    // return {
    //   add: () => dispatch(createActionCountAdd())
    //  // add: () => dispatch({type: 'ADD'})
    // }
    return bindActionCreators({
      add: () => createActionCountAdd()
      // add: () => {{type: 'ADD'}}
    }, dispatch)
  }
)
class Child extends Component<any> {

  add = () => {
    // this.props.createActionCountAdd()
    this.props.add()
  }

  render() {
    return (
      <div>
        { JSON.stringify(this.props) }
        { this.props.count }
        <button onClick={this.add}>add</button>
      </div>
    )
  }
}


export default Child;
