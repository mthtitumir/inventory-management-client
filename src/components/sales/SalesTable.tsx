import { Table } from "antd";
import { TFlower, TSales } from "../../types";
import moment from "moment";
import { useAppSelector } from "../../redux/hooks";
import { useSales } from "../../redux/features/sales/salesSlice";
import { useGetAllSalesQuery } from "../../redux/features/sales/salesApi";

const SalesTable = () => {
const dataSource: TSales[] | [] = useAppSelector(useSales);
const {data, loading} = useGetAllSalesQuery({});
console.log(data);

  const columns = [
    {
      title: 'Buyer',
      dataIndex: ['buyer','name'],
      key: 'buyer',
      // render: (buyer) => buyer?.name || 'N/A',
    },
    // {
    //   title: 'Product',
    //   dataIndex: 'product',
    //   key: 'product',
    //   render: (product: TFlower) => product?.name
    // },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      key: 'quantity',
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
      <Table dataSource={data?.data} columns={columns} />
    </div>
  )
}

export default SalesTable