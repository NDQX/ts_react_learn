import React, { Component } from 'react';
import { TmpContext } from './context';

class child extends Component {

  static contextType: React.Context<{}> = TmpContext

  render() {
    const { context } = this
    return (
      <div>
        { JSON.stringify(context) }

        <TmpContext.Consumer>
          {
            (value) => (
              JSON.stringify(value)
            )
          }
        </TmpContext.Consumer>
      </div>
    );
  }
}




export default child;
