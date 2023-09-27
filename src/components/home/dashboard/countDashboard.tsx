import RedCircle from '../../../assets/images/Icone (2).png'
import GreenCircle from '../../../assets/images/Icone (1).png'
import BlueCircle from '../../../assets/images/Icone.png'
import RegisterUsers from '../../../assets/images/register-users.png'
import {
  BoxDashboard,
  CardDashboard,
  CountDashboardFatherDiv,
  IconeDashboard
} from '@/assets/styles/home/dashboard/dasboard'

export const CountDashboard = () => {
  return (
    <>
      <div style={{ width: '100vh' }}>
        <CountDashboardFatherDiv>
          <div>Médicos</div>
          <BoxDashboard>
            <CardDashboard>
              <div style={{ display: 'flex' }}>
                <img src={BlueCircle} />
                <img src={RegisterUsers} />
              </div>
              <div>
                <p>Total</p>
                <p>800</p>
              </div>
            </CardDashboard>
            <CardDashboard>
              <IconeDashboard>
                <img src={GreenCircle} />
                <img src={RegisterUsers} />
              </IconeDashboard>
              <div>
                <p>Total</p>
                <p>800</p>
              </div>
            </CardDashboard>
            <CardDashboard>
              <div>
                <img src={RedCircle} />
                <img src={RegisterUsers} />
              </div>
              <div>
                <p>Total</p>
                <p>800</p>
              </div>
            </CardDashboard>
          </BoxDashboard>
        </CountDashboardFatherDiv>

        <CountDashboardFatherDiv>
          <div>Contratantes</div>
          <BoxDashboard>
            <CardDashboard>
              <div style={{ display: 'flex' }}>
                <img src={BlueCircle} />
                <img src={RegisterUsers} />
              </div>
              <div>
                <p>Total</p>
                <p>800</p>
              </div>
            </CardDashboard>
            <CardDashboard>
              <IconeDashboard>
                <img src={GreenCircle} />
                <img src={RegisterUsers} />
              </IconeDashboard>
              <div>
                <p>Total</p>
                <p>800</p>
              </div>
            </CardDashboard>
            <CardDashboard>
              <div>
                <img src={RedCircle} />
                <img src={RegisterUsers} />
              </div>
              <div>
                <p>Total</p>
                <p>800</p>
              </div>
            </CardDashboard>
          </BoxDashboard>
        </CountDashboardFatherDiv>
      </div>
    </>
  )
}
