import {
  Typography,
  List,
  ListItem,
  ListItemText,
  Switch,
  Box,
  Link as MuiLink
} from '@mui/material'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import { useDispatch, useSelector } from 'react-redux'
import { toggleTheme } from '../features/ui/uiSlice'

import PageContainer from '../components/layout/PageContainer'

const Settings = () => {
  const dispatch = useDispatch()
  const darkMode = useSelector((state) => state.ui.darkMode)

  return (
    <PageContainer>
      <Typography variant="h5" gutterBottom>
        Settings
      </Typography>

      <List>
        {/* Theme Toggle */}
        <ListItem
          secondaryAction={
            <Switch
              checked={darkMode}
              onChange={() => dispatch(toggleTheme())}
            />
          }
        >
          <DarkModeIcon sx={{ mr: 2 }} />
          <ListItemText
            primary="Dark Mode"
            secondary="Enable dark theme"
          />
        </ListItem>

        {/* Help Link */}
        <ListItem>
          <HelpOutlineIcon sx={{ mr: 2 }} />
          <ListItemText
            primary="Help & Documentation"
            secondary={
              <MuiLink
                href="https://mui.com/"
                target="_blank"
                underline="hover"
              >
                Visit Material UI Docs
              </MuiLink>
            }
          />
        </ListItem>
      </List>

      <Box sx={{ mt: 3 }}>
        <Typography variant="body2" color="text.secondary">
          Smart Expense Tracker © 2026
        </Typography>
      </Box>
    </PageContainer>
  )
}

export default Settings
