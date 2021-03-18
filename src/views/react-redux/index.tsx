import { Component } from 'react'
import Child1 from './child'
import Child2 from './child2'


class ReactReduxPage extends Component {
  render () {
    return (
      <> 
        <h1>class connect</h1>
        <Child1></Child1>
        <h1>hook use</h1>
        <Child2></Child2>
      </>
    )
  }
}

export default ReactReduxPage