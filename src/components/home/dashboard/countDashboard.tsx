import RedCircle from '../../../assets/images/Icone (2).png'
import GreenCircle from '../../../assets/images/Icone (1).png'
import BlueCircle from '../../../assets/images/Icone.png'
import EveryUser from '../../../assets/images/every-user.png'
import PeopleSearchOne from '../../../assets/images/people-search-one.png'
import YellowIcon from '../../../assets/images/Icone (3).png'
import {
  BoxDashboard,
  CardDashboard,
  CountDashboardFatherDiv,
  IconeDashboard,
  NumTitle,
  TitleForCard,
  TotalNumDiv,
  TotalTitle
} from '@/assets/styles/home/dashboard/dasboard'

export const CountDashboard = () => {
  return (
    <>
      <div style={{ width: '100%', height: '100%' }}>
        <CountDashboardFatherDiv
          style={{ marginTop: '0%', marginBottom: '1.5%' }}
        >
          <TitleForCard>Médicos</TitleForCard>
          <BoxDashboard>
            <CardDashboard>
              <IconeDashboard>
                <img src={BlueCircle} className="circle" />
                <img src={EveryUser} className="icon" />
              </IconeDashboard>
              <TotalNumDiv>
                <TotalTitle>Total</TotalTitle>
                <NumTitle>800</NumTitle>
              </TotalNumDiv>
            </CardDashboard>
            <CardDashboard>
              <IconeDashboard>
                <img src={GreenCircle} className="circle" />
                <img src={EveryUser} className="icon" />
              </IconeDashboard>
              <TotalNumDiv>
                <TotalTitle>Total</TotalTitle>
                <NumTitle>800</NumTitle>
              </TotalNumDiv>
            </CardDashboard>
            <CardDashboard>
              <IconeDashboard>
                <img src={RedCircle} className="circle" />
                <img src={EveryUser} className="icon" />
              </IconeDashboard>
              <TotalNumDiv>
                <TotalTitle>Total</TotalTitle>
                <NumTitle>800</NumTitle>
              </TotalNumDiv>
            </CardDashboard>
          </BoxDashboard>
        </CountDashboardFatherDiv>

        <CountDashboardFatherDiv
          style={{ marginTop: '1.5%', marginBottom: '0%' }}
        >
          <TitleForCard>Contratantes</TitleForCard>
          <BoxDashboard>
            <CardDashboard>
              <IconeDashboard>
                <img src={YellowIcon} className="circle" />
                <img src={PeopleSearchOne} className="icon" />
              </IconeDashboard>
              <TotalNumDiv>
                <TotalTitle>Total</TotalTitle>
                <NumTitle>800</NumTitle>
              </TotalNumDiv>
            </CardDashboard>
            <CardDashboard>
              <IconeDashboard>
                <img src={GreenCircle} className="circle" />
                <img src={PeopleSearchOne} className="icon" />
              </IconeDashboard>
              <TotalNumDiv>
                <TotalTitle>Total</TotalTitle>
                <NumTitle>800</NumTitle>
              </TotalNumDiv>
            </CardDashboard>
            <CardDashboard>
              <IconeDashboard>
                <img src={RedCircle} className="circle" />
                <img src={PeopleSearchOne} className="icon" />
              </IconeDashboard>
              <TotalNumDiv>
                <TotalTitle>Total</TotalTitle>
                <NumTitle>800</NumTitle>
              </TotalNumDiv>
            </CardDashboard>
          </BoxDashboard>
        </CountDashboardFatherDiv>
      </div>
    </>
  )
}
