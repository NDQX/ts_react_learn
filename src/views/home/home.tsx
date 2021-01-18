import { Switch, Route, Link } from 'react-router-dom'
import { Component } from 'react'
import Fn from './fn'
import Home2 from './class2'
import { Button } from 'antd'

export default class Home extends Component {

  state = {}

  btnClick = () => {
    this.setState({
      a: 1
    })
  }

  render () {
    return (
      <div>
        homePage <br></br>
        ------------------------ <br></br>
        <Link to='/home/home1'>/home1</Link>---- <Link to='/home/home2'>/home2</Link>
        ------------------------ <br></br>
        <Button type="primary" onClick={this.btnClick}>Button</Button>
        <Switch>
          <Route path='/home/home1' >
            <Fn name='home1'></Fn>
          </Route>
          <Route path='/home/home2' component={Home2}></Route>
        </Switch>
      </div>
    )
  }
}