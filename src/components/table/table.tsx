import { Table } from '@/assets/styles/home/dashboard/tableDashboard'
import { ReactNode } from 'react'

type TableRow = Record<string, string | number | Array<string> | ReactNode>

type TableProps = {
  HeadColumns: string[]
  BodyRow: TableRow[]
}

export const TableComponent = ({ HeadColumns, BodyRow }: TableProps) => {
  return (
    <>
      <Table>
        <thead>
          <tr>
            {HeadColumns.map((columnText, index) => (
              <th key={`${index}-th`}>{columnText}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {BodyRow.map((information, index) => (
            <tr key={`${index}-tr`}>
              {Object.values(information).map((cell, index) => (
                <td key={`${index}-td`}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  )
}
