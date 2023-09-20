// ** Type import
import { VerticalNavItemsType } from 'src/@core/layouts/types'

const navigation = (role: string, include: string[] = []): VerticalNavItemsType => {
  if (role === 'super_admin') {
    return [
      {
        title: 'Dashboard',
        icon: 'dashboard',
        path: '/admin/dashboard'
      },
      {
        title: 'Negocios pendientes',
        icon: 'business',
        path: '/negocios-pendientes'
      },
      {
        title: 'Clientes',
        icon: 'user',
        path: '/clientes'
      },
      {
        title: 'Usuarios',
        icon: 'user',
        path: '/usuarios'
      },

      // {
      //   title: 'Planes',
      //   icon: 'dashboard',
      //   path: '/planes/listado'
      // },
      {
        title: 'Configuración',
        icon: 'settings',
        path: '/configuracion'
      }
    ]
  }

  return [
    {
      title: 'Dashboard',
      icon: 'dashboard',
      path: '/dashboard'
    },
    {
      title: 'Explorar negocios',
      icon: 'search',
      path: '/explorar-negocios'
    },
    {
      title: 'Mis negocios',
      icon: 'dashboard',
      path: '/mis-negocios'
    },
    {
      title: 'Comunidad',
      icon: 'community',
      path: '/comunidad',
      ...(!include.includes('community')
        ? {}
        : {
            badgeContent: 'No',
            badgeColor: 'secondary'
          })
    },
    {
      title: 'Formación',
      icon: 'education',
      path: '/formacion',
      ...(!include.includes('education')
        ? {}
        : {
            badgeContent: 'No',
            badgeColor: 'secondary'
          })
    },
    {
      title: 'Servicios',
      icon: 'services',
      path: '/servicios'
    },
    {
      title: 'Mensajes',
      icon: 'messages',
      path: '/mensajes'
    },
    {
      title: 'Favoritos',
      icon: 'favority',
      path: '/favoritos'
    },
    {
      title: 'Notificaciones',
      icon: 'notifications',
      path: '/notificaciones'
    },
    {
      title: 'Configuración',
      icon: 'settings',
      path: '/configuracion'
    }
  ]
}

export default navigation
