import React, { Component } from 'react'
import { Button, message } from 'antd'
import './user.scss'
import Left from './left'
import { UserContext } from '../../utils/context'
import { connect } from 'react-redux'
interface stateType {
  list: number[],
  leftTitle: String | Number,
  stateCb: Function
}

function mapStateToProps1 (state: any) {
  console.log(state, 'state')
  return { param1: state.reducer1.param1 }
}
@(connect(mapStateToProps1) as any)
export default class Communication extends Component<any, stateType> {
  constructor (props: any) {
    super(props)
    this.state = { 
      list: [1, 2], 
      leftTitle: 'left',
      stateCb: () => {
        console.log('父方法')
      }
    }
    this.LeftRef = React.createRef()
  }

  LeftRef: any = null

  doClick = () => {
    message.success('通过ref调用子组件方法')
    this.LeftRef.current.aCb()
  }

  doClick2 = () => {
    this.setState({
      leftTitle: this.state.leftTitle + 'h'
    })
  }

  event1 (val:any) {
    alert(val)
  }

  render () {
    return (
        <UserContext.Provider value={this.state}>
          <div className='user' >
            <div className="title">组件通信</div>
            <div>爷状态： { JSON.stringify(this.state) }</div>
            <div>爷recucx: param1: --{ this.props.param1 }</div>
            <div>
              <Button onClick={this.doClick} type='primary'>爷-调用子</Button>
              <Button onClick={this.doClick2}>改state</Button>
            </div>
            <Left 
              ref={this.LeftRef}
              title={this.state.leftTitle}
              propCb={this.state.stateCb}
              onEvent1={this.event1} >
            </Left>
          </div>
        </UserContext.Provider>
    )
  }
  
}