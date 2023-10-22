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
  TabForSearchFilter,
  TotalNumber
} from '@/assets/styles/home/stylesForMainTables/universalStylesForMain'
import SearchIcon from '../../assets/images/search.png'
import { MedicosUsers } from '@/components/usuarios/medicos'
import { useEffect, useState } from 'react'
import { TableDashboard } from '@/components/usuarios/total'
import { ContratantesUsers } from '@/components/usuarios/contratantes'
import { GetUsersCount } from '@/config/usersServicies'
import PaginationRounded from '@/components/ui/paginacao'
import { Pagination } from '@mui/material'

interface Props {
  isActive: boolean
}

export const UsuariosMain = ({ isActive }: Props) => {
  const [pagina, setPagina] = useState(0)
  //const [elementosPorPagina, setElementosPorPagina] = useState(10)
  const [currentTab, setCurrentTab] = useState<
    'TODOS' | 'MEDICO' | 'CONTRATANTE'
  >('TODOS')
  const [searchTerm, setSearchTerm] = useState('')
  const [isActiveTodos, setIsActiveTodos] = useState(true)
  const [isActiveMedico, setIsActiveMedico] = useState(false)
  const [isActiveContratante, setIsActiveContratante] = useState(false)
  console.log(searchTerm)
  console.log(pagina)

  const elementosPorPagina = 10

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

  return (
    <>
      <div>
        <DivMainTitle>
          <MainTitle>
            Usuários Cadastrados|{' '}
            {currentTab === 'TODOS' ? 'Todos' : currentTab}
          </MainTitle>
        </DivMainTitle>
        <DivForTabs>
          <TabForSearchFilter
            isActive={isActiveTodos}
            type="button"
            value={currentTab}
            onClick={() => {
              setCurrentTab('TODOS')
              setIsActiveTodos(true)
              setIsActiveMedico(false)
              setIsActiveContratante(false)
            }}
          >
            <p>Todos</p>
            <div>{totalNumber.total}</div>
          </TabForSearchFilter>
          <TabForSearchFilter
            isActive={isActiveMedico}
            type="button"
            value={currentTab}
            onClick={() => {
              setCurrentTab('MEDICO')
              setIsActiveTodos(false)
              setIsActiveMedico(true)
              setIsActiveContratante(false)
            }}
          >
            <p>Medico</p> <div>{totalNumber.totalDoctors}</div>
          </TabForSearchFilter>
          <TabForSearchFilter
            isActive={isActiveContratante}
            type="button"
            value={currentTab}
            onClick={() => {
              setCurrentTab('CONTRATANTE')
              setIsActiveTodos(false)
              setIsActiveMedico(false)
              setIsActiveContratante(true)
            }}
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
            <TotalNumber>
              Total de usuarios: <p> {totalNumber.total} </p>
            </TotalNumber>
          </HeaderOnTable>
          {currentTab === 'TODOS' ? (
            <TableDashboard
              searchTerm={searchTerm}
              pagina={pagina}
              elementosPorPagina={elementosPorPagina}
              setPagina={setPagina}
            />
          ) : currentTab === 'MEDICO' ? (
            <MedicosUsers
              searchTerm={searchTerm}
              pagina={pagina}
              elementosPorPagina={elementosPorPagina}
              setPagina={setPagina}
            />
          ) : (
            currentTab === 'CONTRATANTE' && (
              <ContratantesUsers
                searchTerm={searchTerm}
                pagina={pagina}
                elementosPorPagina={elementosPorPagina}
                setPagina={setPagina}
              />
            )
          )}
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Pagination
              count={4}
              page={pagina}
              onChange={(event, value) => setPagina(value)}
              sx={{
                '&.Mui-selected': {
                  backgroundColor: '#046639',
                  color: '#ffffff'
                }
              }}
            />
          </div>
        </DivForTable>
      </div>
    </>
  )
}
