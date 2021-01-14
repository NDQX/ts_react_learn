import { Component } from 'react'
import A11 from './a11'
import A12 from './a12'

interface Props {
  propA?: String | Number,
  propB?: Function,
  onEvent1: Function
}

export default class a extends Component<Props> {
  // constructor (props: Props) {
  //   super(props)
  // }

  state = {
    a: 1
  }

  aCb = () => {
    console.log('aInstance', this)
  }

  btnClick = () => {
    this.props.propB && this.props.propB()
  }

  btnClick2 = () => {
    console.log(this)
  }

  btnClick3 = () => {
    this.props.onEvent1('子数据调用父')
  }

  componentDidMount () {
    this.setState({
      a: 2
    }, () => {
      console.log('2', this.state.a) // 2
    })
    console.log('1', this.state.a) // 1
  }

  render () {
    return (
      <div>
        {this.props.propA}
        <button onClick={this.btnClick}>btn</button>
        <button ref='BTN' onClick={this.btnClick2}>btn2</button>
        <button onClick={this.btnClick3}>btn3</button>
        <A11 >
          
        </A11>
        <A12>
          <span>A12 插槽</span>
        </A12>
      </div>
    )
  }
}