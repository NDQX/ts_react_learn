import { Component } from 'react'
import { message } from 'antd'
import PartA from './partA'
import PartB from './partB'
import PartC from './partC'

interface Props {
  title?: String | Number,
  propCb?: Function,
  onEvent1: Function
}

export default class Left extends Component<Props> {
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
    message.success('子调用props方法')
    this.props.propCb && this.props.propCb()
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
      <div className='left'>
        <h2>{this.props.title}</h2>
        <div>
          <button onClick={this.btnClick}>子调父</button>
        </div>
        <PartA ></PartA>
        <PartB>
          <span>PartB 插槽</span>
        </PartB>
        <PartC></PartC>
      </div>
    )
  }
}