import { Flex, Select, Table } from "antd"
import { testStyle } from "../../styles/dasboard.styles"
import { IoIosArrowDown } from "react-icons/io";
import { filterOptions } from "../../constants";

const SalesOrderCard = () => {
    const dataSource = [
        {
            key: '1',
            processing: 45,
            shipped: 32,
            delivered: 67,
            confirmed: 98,
            cancelled: 10,
            returned: 12,
        }
    ];

    const columns = [
        {
            title: 'Processing',
            dataIndex: 'processing',
            key: 'processing',
        },
        {
            title: 'Shipped',
            dataIndex: 'shipped',
            key: 'shipped',
        },
        {
            title: 'Delivered',
            dataIndex: 'delivered',
            key: 'delivered',
        },
        {
            title: 'Confirmed',
            dataIndex: 'confirmed',
            key: 'confirmed',
        },
        {
            title: 'Cancelled',
            dataIndex: 'cancelled',
            key: 'cancelled',
        },
        {
            title: 'Returned',
            dataIndex: 'returned',
            key: 'returned',
        },
    ];
    const handleChangeSelect = (values: string) => {
        console.log(values);
    }
    return (
        <div style={testStyle}>
            <Flex align="center" justify="space-between" style={{ fontSize: "19px", borderBottom: "1px solid #ebeaf2", padding: "10px 15px", backgroundColor: "#FFFDD0", borderRadius: "10px 10px 0 0" }}>
                <p>Sales Orders</p>
                <Select suffixIcon={<IoIosArrowDown size={16} color="maroon" />} variant="borderless" onChange={handleChangeSelect} style={{ backgroundColor: "none" }} options={filterOptions} defaultValue={"This Month"} />
            </Flex>
            <Table style={{overflowX: "auto"}} dataSource={dataSource} columns={columns} pagination={false} />
        </div>
    )
}

export default SalesOrderCard