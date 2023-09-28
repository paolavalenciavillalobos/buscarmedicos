import {
  DivForTable,
  DivForTitleOnTable,
  Table,
  TitleForTableDashboard
} from '@/assets/styles/home/dashboard/tableDashboard'
import { Link } from 'react-router-dom'

export const TableDashboard = () => {
  return (
    <>
      <DivForTable>
        <DivForTitleOnTable>
          <TitleForTableDashboard>
            Últimos usuários cadastrados
          </TitleForTableDashboard>
          <p>Ver tudo</p>
        </DivForTitleOnTable>
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
    </>
  )
}
