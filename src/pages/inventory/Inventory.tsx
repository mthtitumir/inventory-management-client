import { Divider } from "antd"
import FlowerList from "../../components/inventory/FlowerList"
import InventoryHeader from "../../components/inventory/InventoryHeader"
import { useState } from "react";
// import { useGetAllTradingPartnerQuery, useGetSingleTradingPartnerQuery } from "../../redux/features/buyer/tradingPartnerApi";

const Inventory = () => {
  const [filter, setFilter] = useState({});
  // const {data} = useGetAllTradingPartnerQuery({type: "supplier"});
  // const {data: singleData} = useGetSingleTradingPartnerQuery("65d6b09d0f64d30b7a89bd47");
  // // console.log({data, singleData});
    
  return (
    <div>
      <InventoryHeader filter={filter} setFilter={setFilter}/>
      <Divider />
      <FlowerList filter={filter} setFilter={setFilter} />
      <Divider />
    </div>
  )
}

export default Inventory;