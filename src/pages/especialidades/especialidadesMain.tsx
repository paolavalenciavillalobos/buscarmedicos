import { DivForTable } from '@/assets/styles/home/dashboard/tableDashboard'
import {
  DivMainTitle,
  HeaderOnTable,
  MainTitle,
  Search
} from '@/assets/styles/home/stylesForMainTables/universalStylesForMain'
import SearchIcon from '../../assets/images/search.png'
import { GreenButtonForAdd } from '@/assets/styles/home/stylesForMainTables/universalStylesForMain'
import { EspecialidadesTable } from '@/components/especialidades/especialidadesTable'
import { Link } from 'react-router-dom'

export const EspecialidadesMain = () => {
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
              />
              <img src={SearchIcon} alt="search" />
            </Search>
            <GreenButtonForAdd>
              <Link to={'/especialidades-criar'}>nova especialidade</Link>
            </GreenButtonForAdd>
          </HeaderOnTable>
          <EspecialidadesTable />
        </DivForTable>
      </div>
    </>
  )
}
