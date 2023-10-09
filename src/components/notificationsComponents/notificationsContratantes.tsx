import {
  DivForTable,
  DivForTitleOnTable,
  Table,
  TitleForTableDashboard
} from '@/assets/styles/home/dashboard/tableDashboard'

import { useEffect, useState } from 'react'
import { TableComponent } from '@/components/table/table'
import { GetNotifications } from '@/config/notificationsServices'
import { Link } from 'react-router-dom'

export const NotificationsContratantes = () => {
  const HeadColumns = ['Titulo', 'Data de envio', 'Ações']

  const [userData, setUserData] = useState<Array<UserData>>([])
  const [userDataProcessed, setUserDataProcessed] = useState<
    Array<DataTempItem>
  >([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await GetNotifications()
        console.log(userData)
        if (Array.isArray(userData)) {
          // Verifica si userData es un array antes de acceder a su contenido
          setUserData(userData)
          let dataTemp: DataTempItem[] = []
          userData.forEach((item: UserData) => {
            dataTemp.push({
              title: item.title,
              sendingDate: item.sendingDate,
              id: item.id
            })
          })
          setUserDataProcessed(dataTemp)
          console.log(userData)
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
        BodyRow={userDataProcessed}
        renderAdditionalColumn={item => (
          <Link to={`/notificacoes/${item.id}`} className="edit-button">
            Editar
          </Link>
        )}
      />
    </>
  )
}
