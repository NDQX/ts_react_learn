import { Switch, Route, Link } from 'react-router-dom'
import Home1 from './home1'
import Home2 from './home2'

export default function Home () {
  return (
    <div>
      homePage <br></br>
      ------------------------ <br></br>
      <Link to='/home/home1'>/home1</Link>---- <Link to='/home/home2'>/home2</Link>
      ------------------------ <br></br>
      <Switch>
        <Route path='/home/home1' component={Home1}></Route>
        <Route path='/home/home2' component={Home2}></Route>
      </Switch>
    </div>
  )
}