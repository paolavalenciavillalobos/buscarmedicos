import { DivForTable } from '@/assets/styles/home/dashboard/tableDashboard'
import {
  DivMainTitle,
  HeaderOnTable,
  MainTitle,
  Search
} from '@/assets/styles/home/stylesForMainTables/universalStylesForMain'
import SearchIcon from '../../assets/images/search.png'
import AddButton from '../../assets/images/add.png'
import { GreenButtonForAdd } from '@/assets/styles/home/stylesForMainTables/universalStylesForMain'
import { SpecialtiesTable } from '@/components/especialidades/especialidadesTable'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { Pagination } from '@mui/material'

export const EspecialidadesMain = () => {
  const [pagina, setPagina] = useState(0)
  const [elementosPorPagina, setElementosPorPagina] = useState(10)
  const [searchTerm, setSearchTerm] = useState('')

  console.log(pagina, 'main')

  return (
    <>
      <div>
        <DivMainTitle>
          <MainTitle>Especialidades</MainTitle>
        </DivMainTitle>
        <DivForTable>
          <HeaderOnTable>
            <Search>
              <input
                type="text"
                placeholder="  Pesquise uma palavra chave..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
              />
              <img src={SearchIcon} alt="search" />
            </Search>
            <GreenButtonForAdd>
              <img src={AddButton} />
              <Link to={'/especialidades-criar'}>nova especialidade</Link>
            </GreenButtonForAdd>
          </HeaderOnTable>
          <SpecialtiesTable
            searchTerm={searchTerm}
            pagina={pagina}
            elementosPorPagina={elementosPorPagina}
            setPagina={setPagina}
          />
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
