import {
  DivForTable,
  DivForTitleOnTable,
  Table,
  TitleForTableDashboard
} from '@/assets/styles/home/dashboard/tableDashboard'
import {
  DivForTabs,
  DivMainTitle,
  HeaderOnTable,
  MainTitle,
  MenuSelectFilter,
  Search,
  TabForSearchFilter
} from '@/assets/styles/home/stylesForMainTables/universalStylesForMain'
import SearchIcon from '../../assets/images/search.png'
import { MedicosUsers } from '@/components/usuarios/medicos'
import { useState } from 'react'
import { TableDashboard } from '@/components/usuarios/total'

interface Props {
  isActive: boolean
}

export const UsuariosMain = ({ isActive }: Props) => {
  const [todos, setTodos] = useState(true)
  const [medicos, setMedicos] = useState(false)
  const [contratante, setContratante] = useState(false)

  const handleTodosClick = () => {
    setTodos(true)
    setMedicos(false)
  }

  const handleMedicosClick = () => {
    setTodos(false)
    setMedicos(true)
  }

  return (
    <>
      <div>
        <DivMainTitle>
          <MainTitle>
            Usuários Cadastrados| {todos ? 'Todos' : 'Contratante'}
          </MainTitle>
        </DivMainTitle>
        <DivForTabs>
          <TabForSearchFilter
            isActive={true}
            type="button"
            checked={todos} // Debería ser 'todos' en lugar de 'true'
            onClick={handleTodosClick}
          >
            <p>Todos</p>
            <div>100</div>
          </TabForSearchFilter>
          <TabForSearchFilter
            isActive={medicos}
            type="button"
            checked={medicos} // Debería ser 'medicos' en lugar de 'true'
            onClick={handleMedicosClick} // Usa la función de manejo de eventos
          >
            <p>Contratante</p> <div>100</div>
          </TabForSearchFilter>
        </DivForTabs>
        <DivForTable>
          <HeaderOnTable>
            <Search>
              <input
                type="text"
                placeholder="  Pesquise uma palavra chave..."
              />
              <img src={SearchIcon} alt="search" />
            </Search>
          </HeaderOnTable>
          {todos === true ? <TableDashboard /> : <MedicosUsers />}
        </DivForTable>
      </div>
    </>
  )
}
