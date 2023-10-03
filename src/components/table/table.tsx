import { Table } from '@/assets/styles/home/dashboard/tableDashboard'
import { ReactNode } from 'react'

type TableRow = Record<string, string | number | ReactNode>

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
            {HeadColumns.map(columnText => (
              <th>{columnText}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {BodyRow.map(information => (
            <tr>
              {Object.values(information).map(cell => (
                <td>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  )
}
