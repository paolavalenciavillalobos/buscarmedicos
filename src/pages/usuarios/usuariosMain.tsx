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

interface Props {
  isActive: boolean
}

export const UsuariosMain = ({ isActive }: Props) => {
  return (
    <>
      <div>
        <DivMainTitle>
          <MainTitle>Usuários Cadastrados| Todos</MainTitle>
        </DivMainTitle>
        <DivForTabs>
          <TabForSearchFilter isActive={true}>
            <p>Todos</p>
            <div>100</div>
          </TabForSearchFilter>
          <TabForSearchFilter isActive={false}>
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
            <MenuSelectFilter>Estado</MenuSelectFilter>
            <MenuSelectFilter>Estado</MenuSelectFilter>
            <MenuSelectFilter>Estado</MenuSelectFilter>
          </HeaderOnTable>
          <MedicosUsers />
        </DivForTable>
      </div>
    </>
  )
}
