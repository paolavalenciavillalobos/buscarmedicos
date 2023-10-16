import {
  DivForTable,
  Table
} from '@/assets/styles/home/dashboard/tableDashboard'
import {
  DivForTabs,
  DivMainTitle,
  EditButtonUniversal,
  GreenButtonForAdd,
  HeaderOnTable,
  MainTitle,
  MenuSelectFilter,
  Search,
  TabForSearchFilter
} from '@/assets/styles/home/stylesForMainTables/universalStylesForMain'
import SearchIcon from '../../assets/images/search.png'
import AddButton from '../../assets/images/add.png'
import EditButton from '../../assets/images/edit.png'
import DeleteButton from '../../assets/images/delete.png'
import VisualizerButton from '../../assets/images/visualize.png'
import { MedicosPlans } from '@/components/planos/planosMedicos'

export const PlanosMain = () => {
  return (
    <>
      <div>
        <DivMainTitle>
          <MainTitle>Planos</MainTitle>
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
            <GreenButtonForAdd>
              <img src={AddButton} />
              Novo Plano
            </GreenButtonForAdd>
          </HeaderOnTable>

          <MedicosPlans />
        </DivForTable>
      </div>
    </>
  )
}
