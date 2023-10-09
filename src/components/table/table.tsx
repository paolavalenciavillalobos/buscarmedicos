import { Table } from '@/assets/styles/home/dashboard/tableDashboard'
import { ReactNode } from 'react'

type TableRow = Record<string, string | number | Array<string> | ReactNode>

type TableProps = {
  HeadColumns: string[]
  BodyRow: TableRow[]
  renderAdditionalColumn?: (item: TableRow) => ReactNode
}

export const TableComponent = ({
  HeadColumns,
  BodyRow,
  renderAdditionalColumn
}: TableProps) => {
  return (
    <>
      <Table>
        <thead>
          <tr>
            {HeadColumns.map((columnText, index) => (
              <th key={`${index}-th`}>{columnText}</th>
            ))}
            {renderAdditionalColumn && <th>Acciones</th>}
          </tr>
        </thead>
        <tbody>
          {BodyRow.map((information, index) => (
            <tr key={`${index}-tr`}>
              {Object.values(information).map((cell, index) => (
                <td key={`${index}-td`}>{cell}</td>
              ))}
              {renderAdditionalColumn && (
                <td>{renderAdditionalColumn(information, index)}</td>
              )}
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  )
}
