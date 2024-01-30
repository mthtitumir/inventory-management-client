import { useGetAllSalesQuery } from "../../redux/features/sales/salesApi"
import { useAppDispatch } from "../../redux/hooks";
import { setSales } from "../../redux/features/sales/salesSlice";
import SalesTable from "../../components/sales/SalesTable";
import Spinner from "../../components/ui/Spinner";
import SalesOrderHeader from "../../components/sales/SalesOrderHeader";
import { useState } from "react";

const SalesOrders = () => {
  const [filter, setFilter] = useState({});
  const { data, isLoading } = useGetAllSalesQuery(filter);
  const dispatch = useAppDispatch();
  dispatch(setSales(data?.data));

  return (
    <div>
      <SalesOrderHeader filter={filter} setFilter={setFilter} />
      {!data || isLoading ? <Spinner /> : <SalesTable />}
    </div>
  )
}

export default SalesOrders