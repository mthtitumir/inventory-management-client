import { useGetAllCartQuery } from "../../redux/features/cart/cartApi";
import AddHeader from "../ui/AddHeader";
import "./cart.css";

const Carts = () => {
  const { data: cartsData, isLoading: cartsLoading } = useGetAllCartQuery({});
  const carts = cartsData?.data;
  console.log({ carts, cartsLoading });

  return (
    <div>
      <AddHeader text="All Carts" children={<></>} />
    </div>
  );
};

export default Carts;
