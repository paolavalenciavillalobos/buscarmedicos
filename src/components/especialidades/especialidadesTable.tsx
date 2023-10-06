import {
  DivForTable,
  DivForTitleOnTable,
  Table,
  TitleForTableDashboard
} from '@/assets/styles/home/dashboard/tableDashboard'

import { useEffect, useState } from 'react'
import { TableComponent } from '@/components/table/table'
import { GetSpecialties } from '@/config/specialities'

export const EspecialidadesTable = () => {
  const HeadColumns = ['Nome especialidade', 'Situação', 'Ações']

  const [userData, setUserData] = useState<Array<UserData>>([])
  const [userDataProcessed, setUserDataProcessed] = useState<
    Array<DataTempItem>
  >([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await GetSpecialties()
        console.log(userData)
        if (userData) {
          setUserData(userData.content)
          let dataTemp: DataTempItem[] = []
          userData.content.forEach((item: UserData) => {
            dataTemp.push({
              specialty:
                item.specialties.length > 0 ? item.specialties[0].name : ''
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
          <p>Ver tudo</p>
        </DivForTitleOnTable>
        <TableComponent HeadColumns={HeadColumns} BodyRow={userDataProcessed} />
      </DivForTable>
    </>
  )
}
