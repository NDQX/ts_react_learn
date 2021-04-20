import React, { Component } from 'react';
import store from './store'
import s_store from './s_store'

// function compose (...args: any) {
//   const l = args.length
//   let count = l - 1
  
//   return function f (...realArgs) {
//     const res = args[count](...realArgs)
//     if (count) {
//       count -= 1
//       return f(res)
//     } else {
//       return res
//     }
//   }
// }

// function compose2 (...args2) {
//   return args2.reduce( (ret, cur) => (...args) => ret(cur(...args)) )
// }

// const f1 = a => a
// const f2 = a => a + 1
// const f3 = a => a * a 
// console.log(compose(f3, f2, f1)(1), 'val')
// console.log(compose(f3, compose(f2, f1))(1), 'vall')

class ReduxPage extends Component {

  componentDidMount () {
    store.subscribe(() => {
      this.forceUpdate()
    })
    s_store.subscribe(() => {
      this.forceUpdate()
    })
  }
  
  add = () => {
    store.dispatch({type: 'ADD', payload: 100})
  }

  addAsync = () => {
    // store.dispatch((dispatch) => {
    //   setTimeout(() => {
    //     dispatch({type: 'ADD', payload: 100})
    //   }, 1000)
    // })  
  }

  add2 = () => {
    s_store.dispatch({type: 'ADD', payload: 100})
  } 

  render() {
    return (
      <div>
        {store.getState()}
        <p>
          <button onClick={this.add}>add</button>
          <button onClick={this.addAsync}>asyncDispatch</button>
        </p>
        <h5>redux</h5>
        <p>1. createStore 创建</p>
        <p>2. reducer 初始化/修改 state</p>
        <p>3. getState 获取状态值</p>
        <p>4. dispatch 提交</p>
        <p>5. subscribe 变更订阅 </p>

        <h4>自实现 简版redux</h4>
        {JSON.stringify(s_store.getState())}
        <p><button onClick={this.add2}>add2</button></p>
      </div>
      
    );
  }
}

export default ReduxPage;
