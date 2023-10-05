import { GetLastUsers } from '@/config/servicies'
import { useEffect, useState } from 'react'
import { TableComponent } from '@/components/table/table'

export const MedicosUsers = () => {
  const HeadColumns = [
    'Usuário',
    'E-mail',
    'WhatsApp',
    'Especialidade',
    'Cidade',
    'Estado',
    'Tipo de usuário'
  ]

  const [medicoData, setMedicoData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await GetLastUsers()
        if (userData && userData.content) {
          // Filtrar solo los médicos
          const medicoData = userData.content.filter(user =>
            user.profiles.some(profile => profile.name === 'MEDICO')
          )

          setMedicoData(medicoData)
          console.log(medicoData)
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
        BodyRow={medicoData.map(user => ({
          firstname: `${user.firstName} ${user.lastName}`,
          email: `${user.email}`,
          phone: `${user.phone}`
        }))}
      />
    </>
  )
}
