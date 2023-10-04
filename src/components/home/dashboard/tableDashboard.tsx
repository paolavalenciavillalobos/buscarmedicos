import {
  DivForTable,
  DivForTitleOnTable,
  Table,
  TitleForTableDashboard
} from '@/assets/styles/home/dashboard/tableDashboard'
import { Link } from 'react-router-dom'
import { GetLastUsers } from '@/config/servicies'
import { useEffect, useState } from 'react'
import { TableComponent } from '@/components/table/table'

export const TableDashboard = () => {
  const HeadColumns = ['Usuário', 'E-mail', 'WhatsApp', 'Tipo de usuário']

  const [userData, setUserData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await GetLastUsers()
        if (userData) {
          setUserData(userData.content)
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
          <p>Ver tudo</p>
        </DivForTitleOnTable>
        <TableComponent
          HeadColumns={HeadColumns}
          BodyRow={userData.map(user => ({
            firstname: `${user.firstName} ${user.lastName}`,
            phone: `${user.phone}`,
            email: `${user.email}`
          }))}
        />
      </DivForTable>
    </>
  )
}
