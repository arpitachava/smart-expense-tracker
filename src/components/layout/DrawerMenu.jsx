import {
  Drawer,
  List,
  ListItem,
  ListItemText
} from '@mui/material'
import { Link } from 'react-router-dom'

const DrawerMenu = ({ open, onClose }) => {
  return (
    <Drawer open={open} onClose={onClose}>
      <List sx={{ width: 250 }}>
        <ListItem button component={Link} to="/" onClick={onClose}>
          <ListItemText primary="Dashboard" />
        </ListItem>

        <ListItem button component={Link} to="/transactions" onClick={onClose}>
          <ListItemText primary="Transactions" />
        </ListItem>

        <ListItem button component={Link} to="/reports" onClick={onClose}>
          <ListItemText primary="Reports" />
        </ListItem>

        <ListItem button component={Link} to="/settings" onClick={onClose}>
          <ListItemText primary="Settings" />
        </ListItem>
      </List>
    </Drawer>
  )
}

export default DrawerMenu
