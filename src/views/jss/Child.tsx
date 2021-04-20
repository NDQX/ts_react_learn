import React from 'react'
import injectSheet from 'react-jss'
import { layoutStyles } from './jss'


@(injectSheet(layoutStyles) as any)
class Child extends React.Component<any> {
  render () {

    const { classes } = this.props
    return (
      <div className={classes.layout}
        style={{height: '100px', border: '1px solid red'}}>
          Child
      </div>
    )
  }
}

export default Child

