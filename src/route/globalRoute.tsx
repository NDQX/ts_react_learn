import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import { RouteConfigType } from './route'
import routes from './route'

// const DeepRoute = (props: any) => {
//   return (
//     <>
//       {props.routes.map((item: any) => {
//         return (
//           <Route path={item.path} key={item.path} component={item.component} >
//             <DeepRoute routes={ item.children || [] }></DeepRoute>
//           </Route>
//         )
//       })}
//     </>
//   )
// }


export default function GlobalRoute () {
  return (
    <Router>
      <Switch>
        {routes.map((item) => {
          return <Route path={item.path} key={item.path} component={item.component} />
        })}
      </Switch>
    </Router>
  )
} 