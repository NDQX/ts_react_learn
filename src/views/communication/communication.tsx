import React, { Component } from 'react'
import { Button, message } from 'antd'
import './user.scss'
import Left from './left'

export const UserContext: any = React.createContext(null)

interface stateConstructor {
  list: number[],
  leftTitle: String | Number,
  stateCb: Function
}

export default class communication extends Component<{}, stateConstructor> {
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

  event1 (val:any) {
    alert(val)
  }

  render () {
    return (
        <UserContext.Provider value={this.state}>
          <div className='user' >
            <div className="title">组件通信</div>
            <div>
              <Button onClick={this.doClick} type='primary'>爷-调用子</Button>
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