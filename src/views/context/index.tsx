import React, { Component } from 'react'
import { TmpContext } from './context'
import Child from './child';
import Child2 from './child2';

class context extends Component {
  
  state = {
    a: 1
  }

  render() {
    return (
      <TmpContext.Provider value={this.state}>
        <div>
          <Child></Child>
          <Child2></Child2>
        </div>
      </TmpContext.Provider>
    );
  }
}

export default context;

