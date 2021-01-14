import { Route, Switch, Link } from 'react-router-dom'
import routes from './route/route'
// import About from './views/about'
// import Inbox from './views/view2'
import './App.css'
// import Item from 'antd/lib/list/Item'

function App() {
  return (
    <div id='app'>
      <Link to='/about'>toaboout</Link> <br></br>
      <Link to='/inbox'>inbox</Link>
      <Switch>
        {routes.map((item) => {
          return <Route path={item.path} key={item.path} component={item.component} />
        })}
        {/* <Route path="/about" component={About} />
        <Route path="/inbox" component={Inbox} /> */}
      </Switch>
    </div>
  )
}

export default App;
