import { makeObservable, action, observable } from 'mobx';

class ThemeStore {
  constructor () {
    makeObservable(this)
  }

  @observable public theme = {primaryColor: 'green'}

  @action
  public changeTheme = () => {
    this.theme = {
      primaryColor: ['green', 'yellow', 'blue'][Math.floor(Math.random() * 3)]
    }
  }

  public registWindowChange = () => {
    (window as any).storeChange = () => {
      this.changeTheme()
    }
  }
}

const store = new ThemeStore()
store.registWindowChange()
export default store