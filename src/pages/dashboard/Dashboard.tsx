import { Divider } from "antd"
import SalesOrder from "../../components/dashboard/SalesOrder"
import SalesSummary from "../../components/layout/SalesSummary"
import SalesHistoryChart from "../../components/dashboard/SalesHistoryChart"

const Dashboard = () => {
  return (
    <div>
      <SalesSummary />
      <Divider />
      <SalesHistoryChart />
      <SalesOrder />
    </div>
  )
}

export default Dashboard