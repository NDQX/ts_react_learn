
// shouldComponent -- 性能优化
import { Component } from 'react'
export default class Class2 extends Component {

  static getDerivedStateFromProps () {
    console.log('class2 __ getDerivedStateFromProps')
    return {}
  }

  shouldComponentUpdate (nextProps: any, nextState: any) {
    console.log('class2 __ shouldComponentUpdate')
    // return true
    return this.props === nextProps && this.state === nextState
  }
  
  componentDidUpdate () {
    console.log('class2 __ componentDidUpdate')
  }

  render () {
    console.log('Class2组件__render')
    return (
      <div>
        使用shouldComponentUpdate 优化class组件render ----- home2
      </div>
    )
  }
}