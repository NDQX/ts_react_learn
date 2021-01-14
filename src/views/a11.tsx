import { Component } from 'react'
import { connect } from 'react-redux'
// import { AboutContext } from './about'
import { createAction1 } from '../store/actions/action'

interface Props1 {
  param1: any,
  createAction1: Function
}

class A1 extends Component<Props1> {
  // constructor (props: Props1) {
  //   super(props)
  // }

  // static contextType = AboutContext

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
      <div style={{width: '100px', height: '100px', border: '1px solid red' }}>
        A11-----{ this.props.param1 }
        <button onClick={this.btnClick}>a11btn</button>
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
const A2: any = connect(mapState, { createAction1 })(A1)
export default A2