import { GetLastUsersCONTRATANTE } from '@/config/usersServicies'
import { useEffect, useState } from 'react'
import { TableComponent } from '@/components/table/table'

export const ContratantesUsers = ({
  searchTerm,
  pagina,
  elementosPorPagina,
  setPagina
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

  const fetchData = async () => {
    try {
      const userData = await GetLastUsersCONTRATANTE(
        searchTerm,
        pagina,
        elementosPorPagina
      )
      console.log(
        'search:',
        searchTerm,
        'page:',
        pagina,
        'size:',
        elementosPorPagina,
        'data:',
        userData
      )

      if (userData) {
        setUserData(userData.content)
        let dataTemp: DataTempItem[] = []
        userData.content.forEach((item: UserData) => {
          dataTemp.push({
            user: `${item.firstName} ${item.lastName}`,
            email: item.email,
            whatsapp: item.phone,
            specialty:
              item.specialties.length > 0 ? item.specialties[0].name : '-',
            city:
              item?.address?.city.length > 0 ? item.specialties[0].name : '-',
            uf:
              item?.address?.state.length > 0 ? item.specialties[0].name : '-',
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

  useEffect(() => {
    setPagina?.(0)
  }, [searchTerm])

  useEffect(() => {
    fetchData()
  }, [searchTerm, pagina, elementosPorPagina])

  return (
    <>
      <TableComponent HeadColumns={HeadColumns} BodyRow={userDataProcessed} />
    </>
  )
}
