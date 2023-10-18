import { DivForTable } from '@/assets/styles/home/dashboard/tableDashboard'
import {
  DivForTabs,
  DivMainTitle,
  HeaderOnTable,
  MainTitle,
  Search,
  TabForSearchFilter
} from '@/assets/styles/home/stylesForMainTables/universalStylesForMain'
import SearchIcon from '../../assets/images/search.png'
import { GreenButtonForAdd } from '@/assets/styles/home/stylesForMainTables/universalStylesForMain'
import { Link, useParams } from 'react-router-dom'
import { useState } from 'react'
import { FaqContratantes } from '@/components/faq/faqcontratantes'
import { Medicosfaq } from '@/components/faq/faqTable'

export const FaqMain = () => {
  const [pagina, setPagina] = useState(0)
  const [elementosPorPagina, setElementosPorPagina] = useState(4)
  const [currentTab, setCurrentTab] = useState<'MEDICO' | 'CONTRATANTE'>(
    'MEDICO'
  )
  const { type } = useParams()
  const [searchTerm, setSearchTerm] = useState('')
  console.log(searchTerm)
  console.log(pagina)

  return (
    <>
      <div>
        <DivMainTitle>
          <MainTitle>FAQ</MainTitle>
        </DivMainTitle>
        <DivForTabs>
          <TabForSearchFilter
            //isActive={currentTab === 'CONTRATANTE'}
            type="button"
            value={currentTab}
            onClick={() => setCurrentTab('MEDICO')}
          >
            <p>Medico</p>
          </TabForSearchFilter>
          <TabForSearchFilter
            //isActive={currentTab === 'CONTRATANTE'}
            type="button"
            value={currentTab}
            onClick={() => setCurrentTab('CONTRATANTE')}
          >
            <p>Contratante</p>
          </TabForSearchFilter>
        </DivForTabs>
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
              <Link to={`/faq-criar/${currentTab}`}>Novo FAQ </Link>
            </GreenButtonForAdd>
          </HeaderOnTable>
          {currentTab === 'MEDICO' ? (
            <Medicosfaq
              searchTerm={searchTerm}
              pagina={pagina}
              elementosPorPagina={elementosPorPagina}
              setPagina={setPagina}
              setElementosPorPagina={setElementosPorPagina}
            />
          ) : (
            currentTab === 'CONTRATANTE' && (
              <FaqContratantes
                searchTerm={searchTerm}
                pagina={pagina}
                elementosPorPagina={elementosPorPagina}
                setPagina={setPagina}
                setElementosPorPagina={setElementosPorPagina}
              />
            )
          )}
          <button onClick={() => setPagina(pagina - 1)} disabled={pagina === 0}>
            Anterior
          </button>
          <button onClick={() => setPagina(pagina + 1)}>Siguiente</button>
        </DivForTable>
      </div>
    </>
  )
}
