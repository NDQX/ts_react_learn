
import { Component } from 'react'
import { UserContext } from '../../utils/context'
import { message } from 'antd'

// interface Props1 {
// }

export default class PartA extends Component {

  static contextType = UserContext

  btnClick =  () => {
    message.success('调用爷组件方法')
    this.context.stateCb()
  }

  componentDidMount () {
  }

  render () {
    return (
      <div className='partA'>
        <h5>PartA---class-Context传值</h5>
        <button onClick={ this.btnClick }>孙按钮1</button>
        <div>
          constext: { JSON.stringify(this.context) }
        </div>
        <div>
          context.consumer----
            <UserContext.Consumer>
              { (value => {
                return JSON.stringify(value)
              })}
          </UserContext.Consumer>
        </div>
      </div>
    )
  }
}