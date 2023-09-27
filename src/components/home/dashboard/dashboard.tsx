import { CountDashboard } from './countDashboard'
import { TableDashboard } from './tableDashboard'
import { WelcomeDashboard } from './welcomeDashboard'
import { MomDiv } from '@/assets/styles/home/dashboard/dasboard'

export const DashboardMenu = () => {
  return (
    <>
      <MomDiv>
        <WelcomeDashboard />
        <CountDashboard />
      </MomDiv>
      <TableDashboard />
    </>
  )
}
