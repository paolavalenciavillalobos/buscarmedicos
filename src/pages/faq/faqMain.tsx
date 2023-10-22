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
import { Pagination } from '@mui/material'
import AddButton from '../../assets/images/add.png'

interface Props {
  isActive: boolean
}

export const FaqMain = ({ isActive }: Props) => {
  const [pagina, setPagina] = useState(0)
  const [elementosPorPagina, setElementosPorPagina] = useState(4)
  const [currentTab, setCurrentTab] = useState<'MEDICO' | 'CONTRATANTE'>(
    'MEDICO'
  )
  const [isActiveMedico, setIsActiveMedico] = useState(false)
  const [isActiveContratante, setIsActiveContratante] = useState(false)

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
            isActive={isActiveMedico}
            type="button"
            value={currentTab}
            onClick={() => {
              setCurrentTab('MEDICO')

              setIsActiveMedico(true)
              setIsActiveContratante(false)
            }}
          >
            <p>Medico</p>
          </TabForSearchFilter>
          <TabForSearchFilter
            isActive={isActiveContratante}
            type="button"
            value={currentTab}
            onClick={() => {
              setCurrentTab('CONTRATANTE')

              setIsActiveMedico(false)
              setIsActiveContratante(true)
            }}
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
              <img src={AddButton} />
              <Link to={`/faq-criar/${currentTab}`}>Novo FAQ </Link>
            </GreenButtonForAdd>
          </HeaderOnTable>
          {currentTab === 'MEDICO' ? (
            <Medicosfaq
              searchTerm={searchTerm}
              pagina={pagina}
              elementosPorPagina={elementosPorPagina}
              setPagina={setPagina}
              type={currentTab}
            />
          ) : (
            currentTab === 'CONTRATANTE' && (
              <FaqContratantes
                searchTerm={searchTerm}
                pagina={pagina}
                elementosPorPagina={elementosPorPagina}
                setPagina={setPagina}
                type={currentTab}
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
