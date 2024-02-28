import { Divider } from "antd"
import SalesOrder from "../../components/dashboard/SalesOrder"
import SalesSummary from "../../components/layout/SalesSummary"
import SalesHistoryChart from "../../components/dashboard/SalesHistoryChart"
import DashboardHeader from "../../components/dashboard/DashboardHeader"

const Dashboard = () => {
  return (
    <div>
      <DashboardHeader />
      <Divider />
      {/* <SalesSummary /> */}
      <Divider />
      {/* <SalesHistoryChart /> */}
      <SalesOrder />
    </div>
  )
}

export default Dashboard