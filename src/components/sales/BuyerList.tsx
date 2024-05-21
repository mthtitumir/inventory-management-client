import { Table } from "antd";
import { useGetAllTradingPartnerQuery } from "../../redux/features/buyer/tradingPartnerApi";
import AddHeader from "../ui/AddHeader";

const BuyerList = () => {
  const { data, isLoading } = useGetAllTradingPartnerQuery({
    type: "buyer",
    select: "name email phoneNumber",
  });
  const buyerData = data?.data;
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Phone",
      dataIndex: "phoneNumber",
      key: "phoneNumber",
    },
  ];
  return (
    <>
      <AddHeader key={"123"} text="Buyer List" children={<></>} />
      <Table
        dataSource={buyerData}
        columns={columns}
        style={{ padding: "0 20px", marginTop: "20px" }}
        loading={isLoading && !data}
      />
      ;
    </>
  );
};

export default BuyerList;
