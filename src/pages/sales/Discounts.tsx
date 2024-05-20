import { Table } from "antd";
import AddHeader from "../../components/ui/AddHeader";
import { useGetAllDiscountsQuery } from "../../redux/features/discount/discountApi";

const Discounts = () => {
  const { data, isLoading } = useGetAllDiscountsQuery({});
  const discountsData = data?.data;
  const columns = [
    {
      title: "Code",
      dataIndex: "code",
      key: "code",
    },
    {
      title: "Min. Value",
      dataIndex: "minOrderValue",
      key: "minOrderValue",
    },
    {
      title: "Min. Quantity",
      dataIndex: "minOrderQuantity",
      key: "minOrderQuantity",
    },
    {
      title: "Limit/Customer",
      dataIndex: "limitPerCustomer",
      key: "limitPerCustomer",
    },
    {
      title: "Amount",
      dataIndex: "amountOff",
      key: "amountOff",
    },
    {
      title: "Percent",
      dataIndex: "percentOff",
      key: "percentOff",
    },
  ];
  return (
    <>
      <AddHeader key={"123"} text="Discounts" />
      <Table
        dataSource={discountsData}
        columns={columns}
        style={{ padding: "0 20px" }}
        loading={isLoading && !data}
        pagination={false}
      />
      ;
    </>
  );
};

export default Discounts;
