import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Frame from '../../assets/images/Frame.png'
import Remind from '../../assets/images/remind.png'
import Composition from '../../assets/images/composition.png'
import { Logo, Menu, MenuText } from '@/assets/styles/global-styles'

export default function BaseLayout() {
  return (
    <section>
      <Menu>
        <nav>
          <Logo>
            <img src={Frame} alt="Logo" />
          </Logo>
          <ul>
            <MenuText>
              <Link to="/" className="menu-link">
                <img src={Remind} className="menu-icon" />
                Dashboard
              </Link>
            </MenuText>
            <MenuText>
              <Link to="/usuarios" className="menu-link">
                <img src={Composition} className="menu-icon" />
                Usuarios cadastrados
              </Link>
            </MenuText>
            <MenuText>
              <Link to="/planos" className="menu-link">
                Planos
              </Link>
            </MenuText>
            <MenuText>
              <Link to="/especialidades" className="menu-link">
                Especialidades
              </Link>
            </MenuText>
            <MenuText>
              <Link to="/notificacoes" className="menu-link">
                Notificações
              </Link>
            </MenuText>
            <MenuText>
              <Link to="/faq" className="menu-link">
                FAQ
              </Link>
            </MenuText>
          </ul>
        </nav>
      </Menu>
      <article>
        <header></header>
        <Outlet />
      </article>
    </section>
  )
}
