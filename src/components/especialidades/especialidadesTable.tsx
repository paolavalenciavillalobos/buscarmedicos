import { ReactNode, useEffect, useState } from 'react'
import { TableComponent } from '../table/table'
import EditButton from '../../assets/images/edit.png'
import DeleteButton from '../../assets/images/delete.png'
import VisualizerButton from '../../assets/images/visualize.png'

import { useNavigate, useParams } from 'react-router-dom'
import { DeleteSpecialties, GetSpecialties } from '@/config/specialities'
import { EditButtonUniversal } from '@/assets/styles/home/stylesForMainTables/universalStylesForMain'

type SpecialtiesTypo = {
  id?: string
  name: string
  enabled: ReactNode
  actions: ReactNode
}

export const SpecialtiesTable = () => {
  const [specialties, setSpecialties] = useState<SpecialtiesTypo[]>([])

  const tableColumns = ['Nome', 'Situação', 'Ações']

  const navigate = useNavigate()

  const handleDelete = async (id: string) => {
    try {
      await DeleteSpecialties(id)
      setSpecialties(prevSpecialties =>
        prevSpecialties.filter(item => item.id !== id)
      )
    } catch (error) {
      console.error('Error deleting specialty:', error)
    }
  }

  useEffect(() => {
    const fetchSpecialties = async () => {
      const result = await GetSpecialties()

      console.log(result.content)
      const specialtiesFormatted = result?.content.reduce(
        (accumulator, currentValue) => {
          const id = currentValue.id
          console.log(id)
          const specialtiesTable = {
            //id: currentValue.id,
            name: currentValue.name ? currentValue.name : '-',

            enabled: (
              <div>
                <input type="checkbox" checked={currentValue.enabled} />
                <label>{currentValue.enabled ? 'Ativo' : 'Inativo'} </label>
              </div>
            ),
            actions: (
              <div>
                <EditButtonUniversal
                  onClick={() => navigate(`visualizar/${currentValue.id}`)}
                >
                  <img src={VisualizerButton} />
                </EditButtonUniversal>
                <EditButtonUniversal
                  onClick={() => navigate(`edit/${currentValue.id}`)}
                >
                  <img src={EditButton} />
                </EditButtonUniversal>
                <EditButtonUniversal onClick={() => handleDelete(id)}>
                  <img src={DeleteButton} />
                </EditButtonUniversal>
              </div>
            )
          }
          console.log(specialties)
          return [...accumulator, specialtiesTable]
        },
        [] as SpecialtiesTypo[]
      )

      setSpecialties(specialtiesFormatted ?? [])
    }

    fetchSpecialties()
  }, [navigate])

  return (
    <>
      <TableComponent HeadColumns={tableColumns} BodyRow={specialties} />
    </>
  )
}
