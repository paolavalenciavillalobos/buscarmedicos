import { ReactNode, useEffect, useState } from 'react'
import { TableComponent } from '../table/table'
import EditButton from '../../assets/images/edit.png'
import DeleteButton from '../../assets/images/delete.png'
import VisualizerButton from '../../assets/images/visualize.png'

import { useNavigate } from 'react-router-dom'
import { EditButtonUniversal } from '@/assets/styles/home/stylesForMainTables/universalStylesForMain'
import { DeleteFaq, GetQuestions } from '@/config/faqServices'
import Modal from '../modal/modal'

type FaqTypo = {
  id?: number
  title: string
  enabled?: ReactNode
  actions: ReactNode
}

export const FaqContratantes = ({
  searchTerm,
  pagina,
  elementosPorPagina,
  setPagina,
  type
}: TableDashboardProps) => {
  const [faq, setFaq] = useState<FaqTypo[]>([])

  const tableColumns = ['Nome', 'Ações']
  const [idToDelete, setIdToDelete] = useState<number>(undefined)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const handleDelete = async id => {
    try {
      await DeleteFaq(id)
      setFaq(prevfaq => prevfaq.filter(i => i.id !== id))
      setIdToDelete(undefined) // Restablece idToDelete a undefined
    } catch (error) {
      console.error('Error deleting specialty:', error)
    }
  }

  const navigate = useNavigate()

  const fetchFaq = async () => {
    const result = await GetQuestions(
      searchTerm,
      pagina,
      elementosPorPagina,
      type
    )

    console.log(result.content)
    const faqFormatted = result?.content.reduce((accumulator, currentValue) => {
      const faqTable = {
        title: currentValue.title ? currentValue.title : '-',
        actions: (
          <div>
            <EditButtonUniversal
              onClick={() => navigate(`view/${currentValue.id}`)}
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
      console.log(faq)
      return [...accumulator, faqTable]
    }, [])

    setFaq(faqFormatted ?? [])
  }

  useEffect(() => {
    setPagina?.(0)
  }, [searchTerm])

  useEffect(() => {
    fetchFaq()
  }, [navigate, searchTerm, pagina, elementosPorPagina])

  return (
    <>
      <TableComponent HeadColumns={tableColumns} BodyRow={faq} />
      <div className="screen">
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <p>Contenido del modal.</p>
          <button
            onClick={() => {
              handleDelete(idToDelete)
              fetchFaq()
              closeModal()
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
