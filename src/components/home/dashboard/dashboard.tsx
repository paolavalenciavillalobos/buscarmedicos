import OfficeIcon from '../../../assets/images/office-icon.png'
import Calendar from '../../../assets/images/calendar.png'
import { GreenDiv } from '@/assets/styles/home/dashboard/dasboard'

export const DashboardMenu = () => {
  return (
    <>
      <GreenDiv>
        <div>
          <img src={OfficeIcon} />
        </div>
        <div>
          <p>
            <img src={Calendar} />
            Hora
          </p>
          <p>Seja bem-vindo Nome!</p>
          <p>text</p>
        </div>
      </GreenDiv>
    </>
  )
}
