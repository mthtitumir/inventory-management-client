import { Divider } from "antd"
import FlowerList from "../../components/inventory/FlowerList"
import InventoryHeader from "../../components/inventory/InventoryHeader"

const Inventory = () => {
  return (
    <div>
      <InventoryHeader />
      <Divider />
      <FlowerList />
      <Divider />
      {/* <TestTable /> */}
    </div>
  )
}

export default Inventory;