import { DivForTable } from '@/assets/styles/home/dashboard/tableDashboard'
import {
  DivMainTitle,
  HeaderOnTable,
  MainTitle,
  Search
} from '@/assets/styles/home/stylesForMainTables/universalStylesForMain'
import SearchIcon from '../../assets/images/search.png'
import { GreenButtonForAdd } from '@/assets/styles/home/stylesForMainTables/universalStylesForMain'
import { SpecialtiesTable } from '@/components/especialidades/especialidadesTable'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export const EspecialidadesMain = () => {
  const [pagina, setPagina] = useState(0)
  const [elementosPorPagina, setElementosPorPagina] = useState(3)
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
              <Link to={'/especialidades-criar'}>nova especialidade</Link>
            </GreenButtonForAdd>
          </HeaderOnTable>
          <SpecialtiesTable
            searchTerm={searchTerm}
            pagina={pagina}
            elementosPorPagina={elementosPorPagina}
            setPagina={setPagina}
            setElementosPorPagina={setElementosPorPagina}
          />
          <button onClick={() => setPagina(pagina - 1)} disabled={pagina === 0}>
            Anterior
          </button>
          <button onClick={() => setPagina(pagina + 1)}>Siguiente</button>
        </DivForTable>
      </div>
    </>
  )
}
