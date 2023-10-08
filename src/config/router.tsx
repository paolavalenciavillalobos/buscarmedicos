import {
  BrowserRouter,
  Route,
  Routes,
  createBrowserRouter
} from 'react-router-dom'
import BaseLayout from '@/pages/home/baselayout'
import Login from '@/pages/login/login'
import { DashboardMenu } from '@/components/home/dashboard/dashboard'
import { UsuariosMain } from '@/pages/usuarios/usuariosmain'
import { PlanosMain } from '@/pages/planos/planosMain'
import { EspecialidadesMain } from '@/pages/especialidades/especialidadesMain'
import { NotificationsMain } from '@/pages/notifications/notificationsMain'
import { FaqMain } from '@/pages/faq/faqMain'
import { SpecialtiesCreatePage } from '@/pages/especialidades/specialitiesPages/specialitiesCreate'

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<BaseLayout />}>
          <Route index element={<DashboardMenu />} />
          <Route path="/usuarios" element={<UsuariosMain isActive={false} />} />
          <Route path="/planos" element={<PlanosMain />} />
          <Route path="/especialidades" element={<EspecialidadesMain />} />
          <Route
            path="/especialidades-criar"
            element={<SpecialtiesCreatePage />}
          />
          <Route path="/notificacoes" element={<NotificationsMain />} />
          <Route path="/faq" element={<FaqMain />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
