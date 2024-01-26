import { Divider } from "antd"
import SalesOrder from "../../components/dashboard/SalesOrder"
import StockChart from "../../components/dashboard/StockChart"
import SalesSummary from "../../components/layout/SalesSummary"

const Dashboard = () => {
  return (
    <div>
      <SalesSummary />
      <Divider />
      <StockChart />
      <Divider />
      <SalesOrder />
    </div>
  )
}

export default Dashboard