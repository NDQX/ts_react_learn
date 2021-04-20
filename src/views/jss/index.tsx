import React from 'react'
import { tabStyles } from './jss'
import { createUseStyles, ThemeProvider } from 'react-jss'
// ThemeProvider
import themeStore from './theme'
import { observer } from 'mobx-react'
import Child from './Child'
import FnChild from './FnChild'

const useTabStyle = createUseStyles(tabStyles, {name: 'prefixClass'})

const Tab = () => {
  const tabClass = useTabStyle()
  return (
    <div className={tabClass.tab}>
      <span>
        <span>1</span>
      </span>
      <span></span>
      <span></span>
    </div>
  )
}



@observer
class JssPage extends React.Component {
  render () {
    return (
      <div>
        <h1>css in js</h1>
        <h2>配合mobx 使用时 observer 顶层写一次 </h2>
        <h2>子组件注入style时 使用functionStyle 方式</h2>
        { themeStore.theme.primaryColor } <br/>
        <button onClick={() => themeStore.changeTheme()}>改变主题</button>
        <Tab></Tab>
        
        <ThemeProvider theme={themeStore.theme}>
          <Child></Child>
          <FnChild></FnChild>
        </ThemeProvider>
        
      </div>
    )
  }
}

export default JssPage