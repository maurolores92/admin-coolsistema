import { Avatar, Box, IconButton, List, ListItem, ListItemButton, ListItemText, Typography } from '@mui/material'
import { useState } from 'react'
import { Icon } from '@iconify/react'
import { useAuth } from 'src/hooks/useAuth'
import { constants } from 'src/configs/constants'
import { useRouter } from 'next/router'

const UserMenu = () => {
  const { user, logout } = useAuth()
  const [openMenu, setOpenMenu] = useState<boolean>(false)

  const getName = () => {
    let name = user?.name
    if (user?.lastname) {
      name += ' ' + user?.lastname
    }

    return name
  }
  const toLink = (link: string) => {
    window.location.href = `https://bizzebo.webflow.io/${link}`
  }
  const router = useRouter()

  const handleTicket = () => {
    router.push('/tickets') // Utiliza una ruta absoluta en lugar de './newTicket'
  }

  return (
    <>
      {openMenu && (
        <List
          component='nav'
          aria-label='main mailbox'
          sx={{
            position: 'absolute',
            bottom: '86px',
            width: '100%',
            backgroundColor: '#f9fafb'
          }}
        >
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary='Preguntas frecuentes' onClick={() => toLink('preguntas-frecuentes')} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary='Notificaciones de Tickets' onClick={handleTicket} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary='Centro de ayuda' onClick={() => toLink('contacto-bizzebo')} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary='Cerrar cesión' onClick={logout} />
            </ListItemButton>
          </ListItem>
        </List>
      )}

      <div
        style={{
          position: 'absolute',
          bottom: '0',
          backgroundColor: '#f9fafb',
          width: '100%',
          padding: '12px',
          paddingLeft: '22px',
          display: 'flex',
          justifyContent: 'space-between',
          minHeight: '86px'
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Avatar
            alt={`${user?.name} ${user?.lastname}`}
            src={`${constants.imageUrl}/${user?.image}`}
            sx={{ width: '2.5rem', height: '2.5rem' }}
          />
          <Box sx={{ display: 'flex', ml: 2.5, alignItems: 'flex-start', flexDirection: 'column' }}>
            <Typography sx={{ fontWeight: 700 }}>{getName()}</Typography>
            <Typography variant='body2'>{user?.role.name}</Typography>
          </Box>
        </Box>

        <IconButton
          aria-label='more'
          aria-controls='long-menu'
          aria-haspopup='true'
          onClick={() => setOpenMenu(!openMenu)}
        >
          <Icon icon='tabler:dots-vertical' width={24} color='#45b174' />
        </IconButton>
      </div>
    </>
  )
}
export default UserMenu
