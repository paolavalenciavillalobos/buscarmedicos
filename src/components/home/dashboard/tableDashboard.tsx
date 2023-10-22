import {
  DivForTable,
  DivForTitleOnTable,
  Table,
  TextNav,
  TitleForTableDashboard
} from '@/assets/styles/home/dashboard/tableDashboard'
import { Link } from 'react-router-dom'
import { GetLastUsers, GetLastUsersDashboard } from '@/config/usersServicies'
import { useEffect, useState } from 'react'
import { TableComponent } from '@/components/table/table'

export const TableDashboard = () => {
  const HeadColumns = ['Usuário', 'E-mail', 'WhatsApp', 'Tipo de usuário']

  const [userData, setUserData] = useState<Array<UserData>>([])
  const [userDataProcessed, setUserDataProcessed] = useState<
    Array<DataTempItem>
  >([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await GetLastUsersDashboard()
        if (userData) {
          setUserData(userData.content)
          let dataTemp: DataTempItem[] = []
          userData.content.forEach((item: UserData) => {
            dataTemp.push({
              user: `${item.firstName} ${item.lastName}`,
              email: item.email,
              whatsapp: item.phone,
              userType: item.profiles.length > 0 ? item.profiles[0].name : '-'
            })
          })
          setUserDataProcessed(dataTemp)
          console.log(userData.content)
        }
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [])

  return (
    <>
      <DivForTable>
        <DivForTitleOnTable>
          <TitleForTableDashboard>
            Últimos usuários cadastrados
          </TitleForTableDashboard>
          <TextNav>
            <Link
              to="/usuarios"
              style={{ textDecoration: 'none', color: '#004ce8' }}
            >
              Ver tudo
            </Link>
          </TextNav>
        </DivForTitleOnTable>
        <TableComponent HeadColumns={HeadColumns} BodyRow={userDataProcessed} />
      </DivForTable>
    </>
  )
}
