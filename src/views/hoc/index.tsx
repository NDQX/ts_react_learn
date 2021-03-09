import React, { Component } from 'react';

type CmpType = React.FunctionComponent<{}> | React.ComponentClass

const giveBorder: any = (Cmp: CmpType) => (props: any) => {
  return (
    <div style={{border: '1px solid red'}}>
      <Cmp {...props}></Cmp>
    </div>
  )
}
// 由下向上
@giveBorder
@giveBorder
class Inner extends Component {
  render() {
    return (
      <div>
        inner
      </div>
    );
  }
}

// export default giveBorder(Inner);
export default giveBorder(Inner);
