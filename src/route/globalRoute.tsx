import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Layout from '../views/layout/layout'
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

const LayoutInnerRoutes = routes.filter(a => !a.isOutLayout)
const LayoutOuterRoutes = routes.filter(a => a.isOutLayout)

export default function GlobalRoute () {
  return (
    <Router>
      <Switch>
        {
          LayoutOuterRoutes.map((item) => {
            return <Route path={item.path} key={item.path} component={item.component} />
          })
        }
        <Layout>
          <Switch>
          {
            LayoutInnerRoutes.map((item) => {
              return <Route path={item.path} key={item.path} component={item.component} />
            })
          }
          </Switch>
        </Layout>
      </Switch>
    </Router>
  )
} 