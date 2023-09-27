import OfficeIcon from '../../../assets/images/office-icon.png'
import Calendar from '../../../assets/images/calendar.png'
import {
  ElipseDiv,
  GreenDiv,
  HeaderCalendarWelcome
} from '@/assets/styles/home/dashboard/dasboard'
import Elipse from '../../../assets/images/Ellipse 149.png'

export const WelcomeDashboard = () => {
  return (
    <>
      <GreenDiv>
        <ElipseDiv>
          <div>
            <img src={Elipse} style={{ width: '12%', position: 'absolute' }} />
            <img
              src={OfficeIcon}
              style={{
                width: '42%',
                position: 'relative'
              }}
            />
          </div>
        </ElipseDiv>
        <HeaderCalendarWelcome>
          <span id="spanCalendar">
            <img src={Calendar} />
            Hora
          </span>
          <h3 id="WelcomeText">Seja bem-vindo Nome!</h3>
          <p id="subtitleWelcome">
            Neste painel você poderá administrar seu site de forma simples e
            prática.
          </p>
        </HeaderCalendarWelcome>
      </GreenDiv>
    </>
  )
}
