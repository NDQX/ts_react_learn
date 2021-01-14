import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { Button } from 'antd'
import A from './a1'

export const AboutContext: any = React.createContext(null)

interface stateConstructor {
  list: number[],
  stateA: String | Number,
  stateB: Function
}

export default class About extends Component<{}, stateConstructor> {
  constructor (props: any) {
    super(props)
    this.state = { 
      list: [1, 2], 
      stateA: '1',
      stateB: () => {
        console.log(this.state.stateA)
      }
    }
    this.ARef = React.createRef()
  }

  ARef: any = null

  doClick = () => {
    this.setState({
      stateA: this.state.stateA + 'b'
    })
    this.ARef.current.aCb()
  }

  event1 (val:any) {
    alert(val)
  }

  render () {
    let List = this.state.list.map((i: any) => {
      return  <Button key={i}>{ i }</Button>
    })
    return (
      
        <AboutContext.Provider value={this.state}>
          <div>
            v1
            <Button onClick={this.doClick} type='primary'>哈哈哈</Button>
            { List }
            <Route path='/about/hahaha'>
              哈哈哈
            </Route>
            <A 
              ref={this.ARef}
              propA={this.state.stateA}
              propB={this.state.stateB}
              onEvent1={this.event1} >
            </A>
          </div>
        </AboutContext.Provider>
    )
  }
  
}