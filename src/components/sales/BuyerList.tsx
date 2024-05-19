import { Table } from "antd";
import { useGetAllTradingPartnerQuery } from "../../redux/features/buyer/tradingPartnerApi";
import AddHeader from "../ui/AddHeader";

const BuyerList = () => {
    const { data } = useGetAllTradingPartnerQuery({ type: "buyer", select: "name email phoneNumber" });
    const buyerData = data?.data;
    const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Email',
          dataIndex: 'email',
          key: 'email',
        },
        {
          title: 'Phone',
          dataIndex: 'phoneNumber',
          key: 'phoneNumber',
        },
      ];
    return (
        <div style={{padding: "20px"}}>
            <AddHeader text="Buyer List" />
            <Table dataSource={buyerData} columns={columns} style={{padding: ''}} />;
        </div>
    )
}

export default BuyerList