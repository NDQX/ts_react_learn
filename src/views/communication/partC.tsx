import { Component } from 'react'
import { connect } from 'react-redux'
import { createAction1 } from '../../store/actions/action'
import { message } from 'antd'

interface Props1 {
  param1: any,
  createAction1: Function
}

class PartC extends Component<Props1> {

  state = {
    a: 1
  }

  btnClick = () => {
    message.success('触发action')
    this.props.createAction1(2)
  }

  componentDidMount () {
  }

  render () {
    return (
      <div className='partC'>
        <h5>PartC--<strong style={{fontSize: '20px'}}>使用react-reduct</strong></h5>
        <p>connext 连接</p>
        <p>--redux: { this.props.param1 }</p>
        <button onClick={this.btnClick}>孙按钮3</button>
      </div>
    )
  }
}

function mapState (state: any) {
  return {
    param1: state.reducer1.param1
  }
}

// function mapDispatch (dispatch: Function) {
//   return {
//     createAction1: (a: any) => dispatch(createAction1(a))
//   }
// }
// const A2: any = connect(mapState, mapDispatch)(A1)
// const A2: any = connect(mapState, { createAction1 })(PartA)
export default connect(mapState, { createAction1 })(PartC)