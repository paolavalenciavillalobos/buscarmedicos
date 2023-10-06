import { DivForTable } from '@/assets/styles/home/dashboard/tableDashboard'
import {
  DivMainTitle,
  HeaderOnTable,
  MainTitle,
  Search
} from '@/assets/styles/home/stylesForMainTables/universalStylesForMain'
import SearchIcon from '../../assets/images/search.png'
import { MedicosUsers } from '@/components/usuarios/medicos'
import { EspecialidadesTable } from '@/components/especialidades/especialidadesTable'

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
          </HeaderOnTable>
          <EspecialidadesTable />
        </DivForTable>
      </div>
    </>
  )
}
