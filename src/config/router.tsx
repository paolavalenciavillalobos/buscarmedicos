import { BrowserRouter, Route, Routes } from 'react-router-dom'
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
import { EditPlans } from '@/components/planos/editPlans'
import { CreatePlans } from '@/components/planos/CreatePlans'
import { Usuario } from '@/components/user/usuario'
import { ViewSpecialties } from '@/components/especialidades/viewSpecialties'
import { ViewFaq } from '@/components/faq/viewFaq'

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<BaseLayout />}>
          <Route index element={<DashboardMenu />} />
          <Route path="/usuario" element={<Usuario />} />
          <Route path="/usuario/admin" element={<EditPlans />} />
          <Route path="/usuarios" element={<UsuariosMain isActive={false} />} />
          <Route path="/planos" element={<PlanosMain />} />
          <Route path="/planos/editar/:id" element={<EditPlans />} />
          <Route path="/planos/criar" element={<CreatePlans />} />
          <Route path="/especialidades" element={<EspecialidadesMain />} />
          <Route
            path="/especialidades-criar"
            element={<SpecialtiesCreatePage />}
          />
          <Route
            path="/especialidades/edit/:id"
            element={<EditSpecialties />}
          />
          <Route
            path="/especialidades/visualizar/:id"
            element={<ViewSpecialties />}
          />
          <Route path="/notificacoes" element={<NotificationsMain />} />
          <Route path="/notificacoes-criar" element={<CreateNotifications />} />
          <Route path="/notificacoes/:id" element={<EditNotifications />} />
          <Route path="/faq" element={<FaqMain />} />
          <Route path="/faq-criar/:type" element={<CreateFaqs />} />
          <Route path="/faq/edit/:id" element={<EditQuestions />} />
          <Route path="/faq/view/:id" element={<ViewFaq />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
