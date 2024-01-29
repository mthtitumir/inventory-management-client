import { Divider } from "antd"
import FlowerList from "../../components/inventory/FlowerList"
import InventoryHeader from "../../components/inventory/InventoryHeader"

const Inventory = () => {
  return (
    <div>
      <InventoryHeader />
      <Divider />
      <FlowerList />
    </div>
  )
}

export default Inventory;