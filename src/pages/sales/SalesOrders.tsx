import { useGetAllSalesQuery } from "../../redux/features/sales/salesApi"
import { useAppDispatch } from "../../redux/hooks";
import { setSales } from "../../redux/features/sales/salesSlice";
import SalesTable from "../../components/sales/SalesTable";
import Spinner from "../../components/ui/Spinner";

const SalesOrders = () => {
  const { data, isLoading } = useGetAllSalesQuery(undefined);
  const dispatch = useAppDispatch();
  dispatch(setSales(data?.data));

  return (
    <div>
      {!data || isLoading ? <Spinner /> : <SalesTable />}
    </div>
  )
}

export default SalesOrders