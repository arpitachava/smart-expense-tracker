import { AppBar, Toolbar, Typography, IconButton } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import DrawerMenu from './DrawerMenu'
import { useState } from 'react'

const AppBarLayout = ({ children }) => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton color="inherit" onClick={() => setOpen(true)}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">Expense Tracker</Typography>
        </Toolbar>
      </AppBar>

      <DrawerMenu open={open} onClose={() => setOpen(false)} />
      {children}
    </>
  )
}

export default AppBarLayout
