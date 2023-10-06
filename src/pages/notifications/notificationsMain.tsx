import { DivForTable } from '@/assets/styles/home/dashboard/tableDashboard'
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
import { NotificationsMedicos } from '@/components/notificationsComponents/notificationsMedicos'

interface Props {
  isActive: boolean
}

export const NotificationsMain = () => {
  return (
    <>
      <div>
        <DivMainTitle>
          <MainTitle>Notifications</MainTitle>
        </DivMainTitle>
        <DivForTabs>
          <TabForSearchFilter isActive={true}>
            <p>Medicos</p>
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
          </HeaderOnTable>
          <NotificationsMedicos />
        </DivForTable>
      </div>
    </>
  )
}
