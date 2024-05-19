import { Table } from "antd";
import moment from "moment";
import { useGetAllSalesQuery } from "../../redux/features/sales/salesApi";
import Spinner from "../ui/Spinner";

const SalesTable = () => {
  const { data, isLoading } = useGetAllSalesQuery({});
  console.log(data);

  const columns = [
    {
      title: 'Buyer',
      dataIndex: ['buyer', 'name'],
      key: 'buyer',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'Discount',
      dataIndex: 'discountUsingCode',
      key: 'discountUsingCode',
    },
    {
      title: 'Sale Amount',
      dataIndex: 'total',
      key: 'total',
    },
    {
      title: 'Sales Made',
      dataIndex: 'dateOfSale',
      key: 'dateOfSale',
      render: (dateOfSale: string) => moment(dateOfSale).fromNow(),
    },
  ];
  if (isLoading || !data) {
    return <Spinner />
  }
  return (
    <div>
      <Table dataSource={data?.data} columns={columns} />
    </div>
  )
}

export default SalesTable