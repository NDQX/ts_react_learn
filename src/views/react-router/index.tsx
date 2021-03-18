import React, { Component } from 'react';
import { Route, Switch } from 'react-router'
import { Link } from 'react-router-dom';


class index extends Component {
  render() {
    return (
      <div>
        <Link to='/reactRouter/page1'>page1</Link>
        <Switch>
          <Route
            path='/reactRouter/page1'
            // children={ () => <div>route-attr-children</div>}
            component={ () => <div>route-attr-component</div> }
            // render={ () => <div>route-attr-render</div> }
          ></Route>
          <Route
            path='/reactRouter/page2'
            children={ () => <div>route2-attr-children</div>}
          ></Route>
        </Switch>
      </div>
    );
  }
}



export default index;
