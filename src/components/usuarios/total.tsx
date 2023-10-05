import { GetLastUsers } from '@/config/servicies'
import { useEffect, useState } from 'react'
import { TableComponent } from '@/components/table/table'

export const TableDashboard = () => {
  const HeadColumns = [
    'Usuário',
    'E-mail',
    'WhatsApp',
    'Especialidade',
    'Cidade',
    'Estado',
    'Tipo de usuário'
  ]

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
      <TableComponent
        HeadColumns={HeadColumns}
        BodyRow={userData.map(user => ({
          firstname: `${user.firstName} ${user.lastName}`,
          email: `${user.email}`,
          phone: `${user.phone}`
        }))}
      />
    </>
  )
}
