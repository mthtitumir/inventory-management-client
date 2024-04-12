import { Button, Flex } from "antd";
import { useGetAllCartQuery } from "../../redux/features/cart/cartApi";
import AddHeader from "../ui/AddHeader";
import './cart.css'

const Carts = () => {
  const { data: cartsData, isLoading: cartsLoading } = useGetAllCartQuery({});
  const carts = cartsData?.data;
  console.log({ carts, cartsLoading });

  return (
    <div>
      <AddHeader text="All Carts" />
      <div style={{ padding: "10px" }}>
        {
          carts && carts.length > 0 && carts?.map(({ buyer, items }) => <div>
            <h2 className="buyer-name" style={{ fontWeight: "500" }}>Buyer: {buyer.name}</h2>
            <table id="single-cart">
              <tr>
                <th>Image</th>
                <th>Product</th>
                <th>Price</th>
                <th>Color</th>
                <th>Size</th>
                <th>Quantity</th>
              </tr>
              {
                items?.map((item) => <tr>
                  <td><img style={{width: "40px"}} src={item.product.image}/></td>
                  <td>{item.product.name}</td>
                  <td>{item.product.price}</td>
                  <td>{item.product.color}</td>
                  <td>{item.product.size}</td>
                  <td>{item.quantity}</td>
                </tr>)
              }
            </table>
            <Flex justify="end" gap={10} style={{padding: "10px 0"}}>
              <Button type="primary" danger>
                Delete Cart
              </Button>
              <Button type="primary">
                Checkout
              </Button>
            </Flex>
          </div>)
        }
      </div>
    </div>
  )
}

export default Carts