// import { Router } from 'react-router'
import CommunicationContext from '../views/communication/communication'
import Home from '../views/home/home'
import Login from '../views/login/login'
import Ref from '../views/refUse/refUse'
import Context from '../views/context/index'
import Hoc from '../views/hoc/index'
import Form from '../views/form/index'
import ReduxPage from '../views/redux/index'

interface SingleRoute {
  path: string,
  component: any,
  children?: SingleRoute[],
  isOutLayout?: boolean | undefined,
  menuName?: string,
  meta?: {
    name?: string,
    showNav?: boolean
  }
}
export type RouteConfigType = SingleRoute[]

const routes: RouteConfigType = [
  { path: '/login', component: Login, isOutLayout: true, menuName: '登陆' },
  { path: '/home', component: Home, children: [], menuName: '首页' },
  { path: '/CommunicationContext', component: CommunicationContext, menuName: '组件通信' },
  { path: '/ref', component: Ref, menuName: 'ref' },
  { path: '/context', component: Context, menuName: 'context' },
  { path: '/hoc', component: Hoc, menuName: 'hoc' },
  { path: '/form', component: Form, menuName: 'form' },
  { path: '/redux', component: ReduxPage, menuName: 'redux' }
]
export default routes