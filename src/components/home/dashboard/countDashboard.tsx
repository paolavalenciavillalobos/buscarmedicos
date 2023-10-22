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
import { GetUsersDashboard } from '@/config/usersServicies'
import { useState, useEffect } from 'react'

export const CountDashboard = () => {
  const [doctorData, setDoctorData] = useState({
    total: 0,
    available: 0,
    unavailable: 0
  })

  const [contractorData, setContractorData] = useState({
    total: 0,
    available: 0,
    unavailable: 0
  })

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await GetUsersDashboard()
        if (userData) {
          setDoctorData(userData.doctor)
          setContractorData(userData.contractor)
        }
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [])

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
                <NumTitle>{doctorData.total}</NumTitle>
              </TotalNumDiv>
            </CardDashboard>
            <CardDashboard>
              <IconeDashboard>
                <img src={GreenCircle} className="circle" />
                <img src={EveryUser} className="icon" />
              </IconeDashboard>
              <TotalNumDiv>
                <TotalTitle>Total</TotalTitle>
                <NumTitle>{doctorData.available}</NumTitle>
              </TotalNumDiv>
            </CardDashboard>
            <CardDashboard>
              <IconeDashboard>
                <img src={RedCircle} className="circle" />
                <img src={EveryUser} className="icon" />
              </IconeDashboard>
              <TotalNumDiv>
                <TotalTitle>Total</TotalTitle>
                <NumTitle>{doctorData.unavailable}</NumTitle>
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
                <NumTitle>{contractorData.total}</NumTitle>
              </TotalNumDiv>
            </CardDashboard>
            <CardDashboard>
              <IconeDashboard>
                <img src={GreenCircle} className="circle" />
                <img src={PeopleSearchOne} className="icon" />
              </IconeDashboard>
              <TotalNumDiv>
                <TotalTitle>Total</TotalTitle>
                <NumTitle>{contractorData.available}</NumTitle>
              </TotalNumDiv>
            </CardDashboard>
            <CardDashboard>
              <IconeDashboard>
                <img src={RedCircle} className="circle" />
                <img src={PeopleSearchOne} className="icon" />
              </IconeDashboard>
              <TotalNumDiv>
                <TotalTitle>Total</TotalTitle>
                <NumTitle>{contractorData.unavailable}</NumTitle>
              </TotalNumDiv>
            </CardDashboard>
          </BoxDashboard>
        </CountDashboardFatherDiv>
      </div>
    </>
  )
}
