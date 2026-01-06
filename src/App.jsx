import { ThemeProvider, CssBaseline } from '@mui/material'
import { useSelector } from 'react-redux'
import { getTheme } from './theme/theme'
import AppRoutes from './routes/AppRoutes'

function App() {
  const darkMode = useSelector((state) => state.ui.darkMode)
  const theme = getTheme(darkMode)

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppRoutes />
    </ThemeProvider>
  )
}

export default App
