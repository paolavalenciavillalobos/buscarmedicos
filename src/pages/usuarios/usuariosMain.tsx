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
import { useEffect, useState } from 'react'
import { TableDashboard } from '@/components/usuarios/total'
import { ContratantesUsers } from '@/components/usuarios/contratantes'
import { GetUsersCount } from '@/config/servicies'

interface Props {
  isActive: boolean
}

export const UsuariosMain = ({ isActive }: Props) => {
  const [pagina, setPagina] = useState(1)
  const [elementosPorPagina, setElementosPorPagina] = useState(10)
  const [currentTab, setCurrentTab] = useState<
    'TODOS' | 'MEDICO' | 'CONTRATANTE'
  >('TODOS')
  //const [todos, setTodos] = useState(true)
  //const [medicos, setMedicos] = useState(false)
  //const [contratante, setContratante] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  console.log(searchTerm)
  console.log(pagina)

  const [totalNumber, setTotalNumber] = useState({
    total: 0,
    totalDoctors: 0,
    totalContractor: 0
  })

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await GetUsersCount()
        if (userData) {
          setTotalNumber(userData)
        }
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [])

  /*const handleTodosClick = () => {
    console.log('Click en Todos')
    setCurrentTab('TODOS')
  }

  const handleMedicosClick = () => {
    console.log('Click')
    setCurrentTab('MEDICO')
  }*/

  return (
    <>
      <div>
        <DivMainTitle>
          <MainTitle>
            Usuários Cadastrados|{' '}
            {currentTab === 'TODOS' ? 'Todos' : 'Contratante'}
          </MainTitle>
        </DivMainTitle>
        <DivForTabs>
          <TabForSearchFilter
            //isActive={currentTab === 'TODOS'}
            type="button"
            value={currentTab}
            onClick={() => setCurrentTab('TODOS')}
          >
            <p>Todos</p>
            <div>{totalNumber.total}</div>
          </TabForSearchFilter>
          <TabForSearchFilter
            //isActive={currentTab === 'CONTRATANTE'}
            type="button"
            value={currentTab}
            onClick={() => setCurrentTab('MEDICO')}
          >
            <p>Medico</p> <div>{totalNumber.totalDoctors}</div>
          </TabForSearchFilter>
          <TabForSearchFilter
            //isActive={currentTab === 'CONTRATANTE'}
            type="button"
            value={currentTab}
            onClick={() => setCurrentTab('CONTRATANTE')}
          >
            <p>Contratante</p> <div>{totalNumber.totalContractor}</div>
          </TabForSearchFilter>
        </DivForTabs>
        <DivForTable>
          <HeaderOnTable>
            <Search>
              <input
                type="text"
                placeholder="Pesquise uma palavra chave..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
              />
              <img src={SearchIcon} alt="search" />
            </Search>
            <div>Total de usuarios: {totalNumber.total}</div>
          </HeaderOnTable>
          {currentTab === 'TODOS' ? (
            <TableDashboard
              searchTerm={searchTerm}
              pagina={pagina}
              elementosPorPagina={elementosPorPagina}
              setPagina={setPagina}
              setElementosPorPagina={setElementosPorPagina}
            />
          ) : currentTab === 'MEDICO' ? (
            <MedicosUsers searchTerm={searchTerm} />
          ) : (
            currentTab === 'CONTRATANTE' && (
              <ContratantesUsers searchTerm={searchTerm} />
            )
          )}
          <button onClick={() => setPagina(pagina - 1)} disabled={pagina === 1}>
            Anterior
          </button>
          <button onClick={() => setPagina(pagina + 1)}>Siguiente</button>
        </DivForTable>
      </div>
    </>
  )
}
