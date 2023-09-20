/**
 *  Set Home URL based on User Roles
 */
const getHomeRoute = (role: string) => {
  if (role === 'super_admin') return '/negocios-pendientes'
  else return '/dashboard'
}

export default getHomeRoute
