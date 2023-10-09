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
import { CreateFaqs } from '@/components/faq/createFaq'
import { EditSpecialties } from '@/components/especialidades/editSpecialties'
import { CreateNotifications } from '@/components/notificationsComponents/createNotifications'
import { EditNotifications } from '@/components/notificationsComponents/editNotifications'
import { EditQuestions } from '@/components/faq/editFaq'

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
          <Route path="/especialidades/:id" element={<EditSpecialties />} />
          <Route path="/notificacoes" element={<NotificationsMain />} />
          <Route path="/notificacoes-criar" element={<CreateNotifications />} />
          <Route path="/notificacoes/:id" element={<EditNotifications />} />
          <Route path="/faq" element={<FaqMain />} />
          <Route path="/faq-criar" element={<CreateFaqs />} />
          <Route path="/faq/:id" element={<EditQuestions />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
