import { observable, action, computed, makeObservable } from 'mobx'
// makeObservable

class MobxStore {
  // mobx6 用法
  // constructor 内使用 makeObservable(this)
  // 不用写额外@observable @action @computed
  constructor () {
    makeObservable(this)
  }

  @observable public stateA = 'A'
  
  @observable public stateB = 'B'
  
  @computed get computedByStateA () {
    return `----计算A值： ${this.stateA }`
  }

  @action
  public changeStateA()  {
    this.stateA = 'A' + this.stateA
  }

  @action
  public changeStateB()  {
    this.stateB = '+' + this.stateB
    console.log('this.stateB', this.stateB)
  }

}

export default new MobxStore()