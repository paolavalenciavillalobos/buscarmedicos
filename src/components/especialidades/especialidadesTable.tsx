import {
  DivForTable,
  DivForTitleOnTable,
  Table,
  TitleForTableDashboard
} from '@/assets/styles/home/dashboard/tableDashboard'

import { useEffect, useState } from 'react'
import { TableComponent } from '@/components/table/table'
import { GetSpecialties } from '@/config/specialities'
import { Link } from 'react-router-dom'

export const EspecialidadesTable = () => {
  const HeadColumns = ['Nome especialidade', 'Situação']

  const [userData, setUserData] = useState<Array<UserData>>([])
  const [userDataProcessed, setUserDataProcessed] = useState<
    Array<DataTempItem>
  >([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await GetSpecialties()
        console.log(userData)
        if (Array.isArray(userData)) {
          // Verifica si userData es un array antes de acceder a su contenido
          setUserData(userData)
          let dataTemp: DataTempItem[] = []
          userData.forEach((item: UserData) => {
            dataTemp.push({
              name: item.name,
              enabled: item.enabled,
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
      <DivForTable>
        <DivForTitleOnTable>
          <TitleForTableDashboard>
            Últimos usuários cadastrados
          </TitleForTableDashboard>
          <p>Ver tudo</p>
        </DivForTitleOnTable>
        <TableComponent
          HeadColumns={HeadColumns}
          BodyRow={userDataProcessed}
          renderAdditionalColumn={item => (
            <Link to={`/especialidades/${item.id}`} className="edit-button">
              Editar
            </Link>
          )}
        />
      </DivForTable>
    </>
  )
}
