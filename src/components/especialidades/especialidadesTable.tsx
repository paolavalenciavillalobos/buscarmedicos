import { ReactNode, useEffect, useState } from 'react'
import { TableComponent } from '../table/table'
import EditButton from '../../assets/images/edit.png'
import DeleteButton from '../../assets/images/delete.png'
import VisualizerButton from '../../assets/images/visualize.png'

import { useNavigate, useParams } from 'react-router-dom'
import { DeleteSpecialties, GetSpecialties } from '@/config/specialities'
import { EditButtonUniversal } from '@/assets/styles/home/stylesForMainTables/universalStylesForMain'
import Modal from './modal'

type SpecialtiesTypo = {
  id?: string
  name: string
  enabled: ReactNode
  actions: ReactNode
}

export const SpecialtiesTable = ({
  searchTerm,
  pagina,
  elementosPorPagina,
  setPagina,
  setElementosPorPagina
}: TableDashboardProps) => {
  const [specialties, setSpecialties] = useState<SpecialtiesTypo[]>([])
  const [idToDelete, setIdToDelete] = useState<number>(undefined)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const tableColumns = ['Nome', 'Situação', 'Ações']

  const navigate = useNavigate()

  const handleDelete = async id => {
    try {
      await DeleteSpecialties(id)
      setSpecialties(prevSpecialties =>
        prevSpecialties.filter(i => i.id !== id)
      )
      setIdToDelete(undefined) // Restablece idToDelete a undefined
    } catch (error) {
      console.error('Error deleting specialty:', error)
    }
  }

  const fetchSpecialties = async () => {
    const result = await GetSpecialties(searchTerm, pagina, elementosPorPagina)

    //console.log(result.content)
    const specialtiesFormatted = result?.content.reduce(
      (accumulator, currentValue) => {
        const id = currentValue.id
        //console.log(id)
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
              <EditButtonUniversal
                onClick={() => {
                  setIdToDelete(currentValue.id)
                  setIsModalOpen(true)
                }}
              >
                <img src={DeleteButton} />
              </EditButtonUniversal>
            </div>
          )
        }
        //console.log(specialties)
        return [...accumulator, specialtiesTable]
      },
      []
    )

    setSpecialties(specialtiesFormatted ?? [])
  }

  useEffect(() => {
    setPagina(0)
  }, [searchTerm])

  useEffect(() => {
    fetchSpecialties()
  }, [navigate, searchTerm, pagina, elementosPorPagina])

  return (
    <>
      <TableComponent HeadColumns={tableColumns} BodyRow={specialties} />
      <div className="screen">
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <p>Contenido del modal.</p>
          <button
            onClick={() => {
              handleDelete(idToDelete)
              closeModal()
              fetchSpecialties()
            }}
          >
            Eliminar
          </button>
          <button onClick={closeModal}>Cerrar Modal</button>
        </Modal>
      </div>
    </>
  )
}
