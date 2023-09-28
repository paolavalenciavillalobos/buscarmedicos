import {
  DivForTable,
  DivForTitleOnTable,
  Table,
  TitleForTableDashboard
} from '@/assets/styles/home/dashboard/tableDashboard'
import {
  DivMainTitle,
  HeaderOnTable,
  MainTitle,
  MenuSelectFilter,
  Search
} from '@/assets/styles/home/stylesForMainTables/universalStylesForMain'
import SearchIcon from '../../assets/images/search.png'

export const UsuariosMain = () => {
  return (
    <>
      <div>
        <DivMainTitle>
          <MainTitle>Usuários Cadastrados| Todos</MainTitle>
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
            <MenuSelectFilter>Estado</MenuSelectFilter>
            <MenuSelectFilter>Estado</MenuSelectFilter>
            <MenuSelectFilter>Estado</MenuSelectFilter>
          </HeaderOnTable>
          <Table>
            <thead>
              <tr>
                <th>Columna 1</th>
                <th>Columna 2</th>
                <th>Columna 3</th>
                <th>Columna 4</th>
                <th>Columna 5</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Fila 1, Columna 1</td>
                <td>Fila 1, Columna 2</td>
                <td>Fila 1, Columna 3</td>
                <td>Fila 1, Columna 4</td>
                <td>Fila 1, Columna 5</td>
              </tr>
              <tr>
                <td>Fila 2, Columna 1</td>
                <td>Fila 2, Columna 2</td>
                <td>Fila 2, Columna 3</td>
                <td>Fila 2, Columna 4</td>
                <td>Fila 2, Columna 5</td>
              </tr>
              <tr>
                <td>Fila 3, Columna 1</td>
                <td>Fila 3, Columna 2</td>
                <td>Fila 3, Columna 3</td>
                <td>Fila 3, Columna 4</td>
                <td>Fila 3, Columna 5</td>
              </tr>
              <tr>
                <td>Fila 4, Columna 1</td>
                <td>Fila 4, Columna 2</td>
                <td>Fila 4, Columna 3</td>
                <td>Fila 4, Columna 4</td>
                <td>Fila 4, Columna 5</td>
              </tr>
            </tbody>
          </Table>
        </DivForTable>
      </div>
    </>
  )
}
