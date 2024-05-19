import { Flex } from "antd";
import FlowerList from "../../components/inventory/FlowerList"
import InventoryHeader from "../../components/inventory/InventoryHeader"
import { useState } from "react";

const Inventory = () => {
  const [filter, setFilter] = useState({});
  return (
    <Flex vertical gap={10}>
      <InventoryHeader filter={filter} setFilter={setFilter}/>
      <FlowerList filter={filter} setFilter={setFilter} />
    </Flex>
  )
}

export default Inventory;