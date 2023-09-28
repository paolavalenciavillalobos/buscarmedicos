import OfficeIcon from '../../../assets/images/office-icon.png'
import Calendar from '../../../assets/images/calendar.png'
import {
  DivForImage,
  ElipseDiv,
  GreenDiv,
  HeaderCalendarWelcome,
  SpanCalendar,
  SubtitleWelcome,
  WelcomeText
} from '@/assets/styles/home/dashboard/dasboard'
import Elipse from '../../../assets/images/Ellipse 149.png'

export const WelcomeDashboard = () => {
  return (
    <>
      <GreenDiv>
        <ElipseDiv>
          <DivForImage>
            <img src={Elipse} style={{ width: '100%', height: '70%' }} />
            <img src={OfficeIcon} style={{ width: '100%', height: '70%' }} />
          </DivForImage>
        </ElipseDiv>
        <HeaderCalendarWelcome>
          <SpanCalendar>
            <img src={Calendar} />
            Hora
          </SpanCalendar>
          <WelcomeText>Seja bem-vinda!</WelcomeText>
          <SubtitleWelcome>
            Neste painel você poderá administrar seu site de forma simples e
            prática.
          </SubtitleWelcome>
        </HeaderCalendarWelcome>
      </GreenDiv>
    </>
  )
}
