import { Divider } from "antd"
import FlowerList from "../../components/inventory/FlowerList"
import InventoryHeader from "../../components/inventory/InventoryHeader"
import { useState } from "react";
import DiscountBox from "../../components/inventory/DiscountBox";

const Inventory = () => {
  const [filter, setFilter] = useState({});
  return (
    <div>
      <InventoryHeader filter={filter} setFilter={setFilter}/>
      {/* <Divider /> */}
      <DiscountBox />
      <FlowerList filter={filter} setFilter={setFilter} />
      <Divider />
    </div>
  )
}

export default Inventory;