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
import { FaqMedicos, Medicosfaq } from '@/components/faq/faqTable'

export const FaqMain = () => {
  return (
    <>
      <div>
        <DivMainTitle>
          <MainTitle>FAQ</MainTitle>
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
              <Link to={'/faq-criar'}>Novo FAQ </Link>
            </GreenButtonForAdd>
          </HeaderOnTable>
          <Medicosfaq />
        </DivForTable>
      </div>
    </>
  )
}
