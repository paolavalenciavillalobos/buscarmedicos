import { ReactNode, useEffect, useState } from 'react'
import { TableComponent } from '../table/table'
import EditButton from '../../assets/images/edit.png'
import DeleteButton from '../../assets/images/delete.png'
import VisualizerButton from '../../assets/images/visualize.png'

import { useNavigate } from 'react-router-dom'
import { EditButtonUniversal } from '@/assets/styles/home/stylesForMainTables/universalStylesForMain'
import { GetQuestions } from '@/config/faqServices'

type FaqTypo = {
  id?: number
  title: string
  enabled?: ReactNode
  actions: ReactNode
}

export const Medicosfaq = () => {
  const [faq, setFaq] = useState<FaqTypo[]>([])

  const tableColumns = ['Nome', 'Ações']

  const navigate = useNavigate()

  useEffect(() => {
    const fetchFaq = async () => {
      const result = await GetQuestions()

      console.log(result.content)
      const faqFormatted = result?.content.reduce(
        (accumulator, currentValue) => {
          const faqTable = {
            title: currentValue.title ? currentValue.title : '-',

            /*enabled: (
              <div>
                <input type="checkbox" checked={currentValue.enabled} />
                <label>{currentValue.enabled ? 'Ativo' : 'Inativo'} </label>
              </div>
            ),*/
            actions: (
              <div>
                <EditButtonUniversal
                  onClick={() => navigate(`faq/visualizar/${currentValue.id}`)}
                >
                  <img src={VisualizerButton} />
                </EditButtonUniversal>
                <EditButtonUniversal
                  onClick={() => navigate(`faq/edit/${currentValue.id}`)}
                >
                  <img src={EditButton} />
                </EditButtonUniversal>
                <EditButtonUniversal onClick={() => {}}>
                  <img src={DeleteButton} />
                </EditButtonUniversal>
              </div>
            )
          }
          console.log(faq)
          return [...accumulator, faqTable]
        },
        [] as FaqTypo[]
      )

      setFaq(faqFormatted ?? [])
    }

    fetchFaq()
  }, [navigate])

  return (
    <>
      <TableComponent HeadColumns={tableColumns} BodyRow={faq} />
    </>
  )
}
