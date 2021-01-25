import routes from '../../route/route'

const menus = routes.filter((item) => {
  return !item.isOutLayout
})

export default menus