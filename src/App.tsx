import GlobalRouteView from './route/globalRoute'
import './App.css'
// import { ThemeProvider } from 'react-jss' // JssProvider
// import themeStore from './views/jss/theme'
// import { observer } from 'mobx-react'

// const generateId = (rule, sheet) => 'some-id'

const App = () => {

  return (
    // <JssProvider generateId={generateId}>
      // <ThemeProvider theme={themeStore.theme}>
        <GlobalRouteView></GlobalRouteView>
      // </ThemeProvider>
    // </JssProvider>
  )
}

export default App;
