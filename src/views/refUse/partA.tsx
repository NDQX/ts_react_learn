
import { Component } from "react"


export default class RefUse extends Component<any> {
  state = {
    a: 1
  }

  partCb = () => {
    console.log(1)
    this.setState({
      a: this.state.a + 1
    })
  }

  render () {
    return (
      <div>
        <h3>partA</h3>
        { this.state.a }
      </div>
    )
  }
}