import { Table } from "antd";
import moment from "moment";
import { TSales } from "../../types";
import { useAppSelector } from "../../redux/hooks";
import { useSales } from "../../redux/features/sales/salesSlice";

const SalesTable = () => {
  const dataSource: TSales[] | [] = useAppSelector(useSales);

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
  return (
    <div>
      <Table dataSource={dataSource} columns={columns} loading={!dataSource} />
    </div>
  )
}

export default SalesTable