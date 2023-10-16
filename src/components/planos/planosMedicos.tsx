import { ReactNode, useEffect, useState } from 'react'
import { TableComponent } from '../table/table'
import EditButton from '../../assets/images/edit.png'
import DeleteButton from '../../assets/images/delete.png'
import VisualizerButton from '../../assets/images/visualize.png'

import { useNavigate, useParams } from 'react-router-dom'
import { GetPlans } from '@/config/planosServices'
import { EditButtonUniversal } from '@/assets/styles/home/stylesForMainTables/universalStylesForMain'

type PlansTypo = {
  planTitle: string
  enabled: ReactNode
  actions: ReactNode
}

export const MedicosPlans = () => {
  const [plans, setPlans] = useState<PlansTypo[]>([])

  const tableColumns = ['Nome', 'Situação', 'Ações']

  const navigate = useNavigate()

  useEffect(() => {
    const fetchPlans = async () => {
      const result = await GetPlans()

      console.log(result.content)
      const plansFormatted = result?.content.reduce(
        (accumulator, currentValue) => {
          const plansTable = {
            planTitle: currentValue.planTitle ? currentValue.planTitle : '-',

            enabled: (
              <div>
                <input type="checkbox" checked={currentValue.enabled} />
                <label>{currentValue.enabled ? 'Ativo' : 'Inativo'} </label>
              </div>
            ),
            actions: (
              <div>
                <EditButtonUniversal
                  onClick={() =>
                    navigate(`planos/visualizar/${currentValue.id}`)
                  }
                >
                  <img src={VisualizerButton} />
                </EditButtonUniversal>
                <EditButtonUniversal
                  onClick={() => navigate(`planos/editar/${currentValue.id}`)}
                >
                  <img src={EditButton} />
                </EditButtonUniversal>
                <EditButtonUniversal onClick={() => {}}>
                  <img src={DeleteButton} />
                </EditButtonUniversal>
              </div>
            )
          }
          console.log(plans)
          return [...accumulator, plansTable]
        },
        [] as PlansTypo[]
      )

      setPlans(plansFormatted ?? [])
    }

    fetchPlans()
  }, [navigate])

  return (
    <>
      <TableComponent HeadColumns={tableColumns} BodyRow={plans} />
    </>
  )
}
