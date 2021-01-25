import { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Menu } from 'antd'
import menus from './menu'
import './layout.scss'

// const { SubMenu } = Menu 

const withRouter1: Function = withRouter

// interface P {
//   history?: any
// }
@withRouter1
export default class Layout extends Component<P> {
  state = {
    collapsed: false
  }

  goTo = ({ key }: any) => {
    // console.log(this.props)
    // this.props.history.push(key)
    // browserHistory.push(key)
    this.props.history.push(key)
  }

  render () {
    return (
      <div className='layout'>
        <div className='sideMenu'>
          <Menu
            mode="inline" theme="dark"
            inlineCollapsed={this.state.collapsed}
            onClick={ this.goTo }>
              {
                menus.map((item) => {
                  return (
                    <Menu.Item key={item.path} >
                      { item.menuName }
                    </Menu.Item>
                  )
                })
              }
          </Menu>
        </div>
        <main className='main'>
          { this.props.children }
        </main>
      </div>
    )
  }
}