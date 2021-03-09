
import { Component } from 'react'
import { CommunicationContext } from '../../utils/context'
import { message } from 'antd'

// interface Props1 {
// }

export default class PartA extends Component {

  static contextType = CommunicationContext

  btnClick =  () => {
    message.success('context调用爷组件方法')
    this.context.stateCb()
  }

  componentDidMount () {
  }

  render () {
    return (
      <div className='partA'>
        <h5>PartA---<strong style={{fontSize: '20px'}}>class-Context传值</strong> </h5>
        <button onClick={ this.btnClick }>孙按钮1</button>
        <div>
          constext: { JSON.stringify(this.context) }
        </div>
        <div>
          context.consumer----
            <CommunicationContext.Consumer>
              { (value => {
                return JSON.stringify(value)
              })}
          </CommunicationContext.Consumer>
        </div>
      </div>
    )
  }
}