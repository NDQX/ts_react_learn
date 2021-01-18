import { Route } from 'react-router-dom'
import { RouteConfigType } from './route'

interface RouterViewProps {
  routes: RouteConfigType
}
export default function RouteView (props: RouterViewProps) {
  return (
    <>
      {props.routes.map((item) => {
        return <Route path={item.path} key={item.path} component={item.component} />
      })}
    </>
  )
} 