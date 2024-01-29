import { Divider } from "antd"
import FlowerList from "../../components/inventory/FlowerList"
import InventoryHeader from "../../components/inventory/InventoryHeader"
import { useState } from "react";

const Inventory = () => {
  const [filter, setFilter] = useState({});
  return (
    <div>
      <InventoryHeader filter={filter} setFilter={setFilter}/>
      <Divider />
      <FlowerList filter={filter} setFilter={setFilter} />
      <Divider />
      {/* <TestTable /> */}
    </div>
  )
}

export default Inventory;