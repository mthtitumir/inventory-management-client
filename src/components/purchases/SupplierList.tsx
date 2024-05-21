import { Table } from "antd";
import { useGetAllTradingPartnerQuery } from "../../redux/features/buyer/tradingPartnerApi";
import AddHeader from "../ui/AddHeader";

const SupplierList = () => {
    const { data } = useGetAllTradingPartnerQuery({ type: "supplier", select: "name email phoneNumber" });
    const supplierData = data?.data;
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
            <AddHeader text="Supplier List" children={<></>} />
            <Table dataSource={supplierData} columns={columns} style={{padding: ''}} />;
        </div>
    )
}

export default SupplierList