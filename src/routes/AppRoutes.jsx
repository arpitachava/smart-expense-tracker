import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import Transactions from '../pages/Transactions'
import Reports from '../pages/Reports'
import Settings from '../pages/Settings'
import AppBarLayout from '../components/layout/AppBarLayout'

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <AppBarLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </AppBarLayout>
    </BrowserRouter>
  )
}

export default AppRoutes
