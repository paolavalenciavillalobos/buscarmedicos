import { GetLastUsers } from '@/config/servicies'
import { useEffect, useState } from 'react'
import { TableComponent } from '@/components/table/table'

interface TableDashboardProps {
  searchTerm: string
  pagina: number
  elementosPorPagina: number
  setPagina: (pagina: number) => void
  setElementosPorPagina: (elementosPorPagina: number) => void
}

export const TableDashboard = ({
  searchTerm,
  pagina,
  elementosPorPagina,
  setPagina,
  setElementosPorPagina
}: TableDashboardProps) => {
  const HeadColumns = [
    'Usuário',
    'E-mail',
    'WhatsApp',
    'Especialidade',
    'Cidade',
    'Estado',
    'Tipo de usuário'
  ]

  const [userData, setUserData] = useState<Array<UserData>>([])
  const [userDataProcessed, setUserDataProcessed] = useState<
    Array<DataTempItem>
  >([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await GetLastUsers(
          searchTerm,
          pagina,
          elementosPorPagina
        )
        if (userData) {
          setUserData(userData.content)
          let dataTemp: DataTempItem[] = []
          userData.content.forEach((item: UserData) => {
            dataTemp.push({
              user: item.lastName,
              email: item.email,
              whatsapp: item.phone,
              specialty:
                item.specialties.length > 0 ? item.specialties[0].name : '-',
              city:
                item?.address?.city.length > 0 ? item.specialties[0].name : '-',
              uf:
                item?.address?.state.length > 0
                  ? item.specialties[0].name
                  : '-',
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
  }, [searchTerm, pagina, elementosPorPagina])

  return (
    <>
      <TableComponent HeadColumns={HeadColumns} BodyRow={userDataProcessed} />
    </>
  )
}
