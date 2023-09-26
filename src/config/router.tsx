import {
  BrowserRouter,
  Route,
  Routes,
  createBrowserRouter
} from 'react-router-dom'
import BaseLayout from '@/pages/home/baselayout'
import Login from '@/pages/login/login'
import { DashboardMenu } from '@/components/home/dashboard/dashboard'

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/LOGIN" element={<Login />} />
        <Route path="/" element={<BaseLayout />}>
          <Route index element={<DashboardMenu />} />
          <Route path="/logout" element={<h1>SAIR</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
