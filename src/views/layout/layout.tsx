import { Component } from 'react'
import { Menu } from 'antd'

console.log(Menu, 'menu')

export default class Layout extends Component {
  render () {
    return (
      <div>
        { this.props.children }
      </div>
    )
  }
}