// import { Router } from 'react-router'
import About from '../views/about'
import View2 from '../views/view2'
import View3 from '../views/view3'
const routes = [
  { path: '/', component: About },
  { path: '/about', component: View2 },
  { path: '/other', component: View3 }
]
export default routes