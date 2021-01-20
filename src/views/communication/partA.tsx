import { Component } from 'react'
import { connect } from 'react-redux'
import { createAction1 } from '../../store/actions/action'

interface Props1 {
  param1: any,
  createAction1: Function
}

class PartA extends Component<Props1> {
  // constructor (props: Props1) {
  //   super(props)
  // }

  // static contextType = UserContext

  state = {
    a: 1
  }

  btnClick = () => {
    this.props.createAction1(2)
  }

  componentDidMount () {
  }

  render () {
    return (
      <div className='partA'>
        <h5>PartA--使用react-reduct--{ this.props.param1 }</h5>
        <button onClick={this.btnClick}>孙按钮1</button>
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
export default connect(mapState, { createAction1 })(PartA)