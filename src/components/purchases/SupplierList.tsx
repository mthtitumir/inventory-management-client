import { Table } from "antd";
import { useGetAllTradingPartnerQuery } from "../../redux/features/buyer/tradingPartnerApi";
import AddHeader from "../ui/AddHeader";

const SupplierList = () => {
  const { data, isLoading } = useGetAllTradingPartnerQuery({
    type: "supplier",
    select: "name email phoneNumber",
  });
  const supplierData = data?.data;
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
      <AddHeader text="Supplier List" children={<></>} />
      <Table
        style={{ padding: "0 20px", marginTop: "20px" }}
        dataSource={supplierData}
        columns={columns}
        loading={isLoading}
      />
      ;
    </>
  );
};

export default SupplierList;
