
import React from 'react'
import store from './store'
import { observer, inject, Provider} from 'mobx-react'
// Provider

const ReRenderCom = React.memo(() => {
  console.log('1')
  return <div>reRender</div>
})

const Text = ({stateA}) => {
  return (
  <>
    { stateA }
    <ReRenderCom></ReRenderCom>
  </>
  )
}

interface BtnProps {
  state?: any
}

@inject('state')
@observer
class Btn extends React.Component<BtnProps> {
  private changeState = () => {
    store.changeStateB()
  }

  render () {
    console.log('this.props', this.props)
    const { stateA, stateB } = this.props.state
    return (
      <button onClick={this.changeState}>{ `stateA: ${stateA}--stateB: ${stateB}` }</button>
    )
  }
}

@observer
class MobxPage extends React.Component {
  private changeA = () => {
    store.changeStateA()  
  }

  render () {
    return (
      <div>
        <h1>mobx</h1>
        <div>state: { store.stateA }</div>
        <div>computedState: { store.computedByStateA }</div>
        <button onClick={this.changeA}>changeStateA</button>
        <Text stateA={ store.stateA }></Text>

        <Provider state={ store }>
          <Btn></Btn>
        </Provider>
      </div>
    )
  }
}

export default MobxPage