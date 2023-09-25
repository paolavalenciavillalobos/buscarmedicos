import {
  BrowserRouter,
  Route,
  Routes,
  createBrowserRouter
} from 'react-router-dom'
import BaseLayout from '@/pages/home/baselayout'
import Login from '@/pages/login/login'

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/LOGIN" element={<Login />} />
        <Route path="/" element={<BaseLayout />}>
          <Route index element={<h1>page2</h1>} />
          <Route path="/logout" element={<h1>SAIR</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
