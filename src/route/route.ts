// import { Router } from 'react-router'
import User from '../views/user/user'
import Home from '../views/home/home'
import View3 from '../views/view3'

interface SingleRoute {
  path: string,
  component: any,
  children?: SingleRoute[]
}
export type RouteConfigType = SingleRoute[]

const routes: RouteConfigType = [
  { path: '/', component: Home, children: [] },
  { path: '/user', component: User },
  { path: '/other', component: View3 }
]
export default routes