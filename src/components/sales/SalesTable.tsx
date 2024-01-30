import { Table } from "antd";
import { TFlower, TSales } from "../../types";
import moment from "moment";
import { useAppSelector } from "../../redux/hooks";
import { useSales } from "../../redux/features/sales/salesSlice";

const SalesTable = () => {
const dataSource: TSales[] | [] = useAppSelector(useSales);

  const columns = [
    {
      title: 'Buyer',
      dataIndex: 'buyer',
      key: 'buyer',
    },
    {
      title: 'Product',
      dataIndex: 'product',
      key: 'product',
      render: (product: TFlower) => product?.name
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      key: 'quantity',
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
      <Table dataSource={dataSource} columns={columns} />
    </div>
  )
}

export default SalesTable