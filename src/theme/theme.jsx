import { createTheme } from '@mui/material/styles'

export const getTheme = (darkMode) =>
  createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: {
        main: '#1976d2'
      }
    },
    typography: {
      h5: {
        fontWeight: 600
      }
    }
  })
