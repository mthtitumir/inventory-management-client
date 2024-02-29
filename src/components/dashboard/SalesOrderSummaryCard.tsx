import { Flex, Select } from "antd"
import { testStyle } from "../../styles/dasboard.styles"
import { IoIosArrowDown } from "react-icons/io"
import { filterOptions } from "../../constants"
import { CartesianGrid, LineChart, XAxis, YAxis, Tooltip, Line } from "recharts"

const SalesOrderSummaryCard = () => {
    const data = [
        {
            name: 'Jan',
            amount: 10000
        },
        {
            name: 'Feb',
            amount: 15000
        },
        {
            name: 'Mar',
            amount: 20000
        },
        {
            name: 'Apr',
            amount: 15000
        },
        {
            name: 'Jun',
            amount: 30000
        },
        {
            name: 'Jul',
            amount: 45000
        },
        {
            name: 'Aug',
            amount: 55000
        },
        {
            name: 'Sep',
            amount: 60000
        },
        {
            name: 'Oct',
            amount: 64000
        },
        {
            name: 'Nov',
            amount: 70000
        },
        {
            name: 'Dec',
            amount: 80000
        },
    ];
    return (
        <div style={testStyle}>
            <Flex align="center" justify="space-between" style={{ fontSize: "19px", borderBottom: "1px solid #ebeaf2", padding: "10px 15px", backgroundColor: "#FFFDD0", borderRadius: "10px 10px 0 0" }}>
                <p>Sales Orders Summary</p>
                <Select suffixIcon={<IoIosArrowDown size={16} color="maroon" />} variant="borderless" style={{ backgroundColor: "none" }} options={filterOptions} defaultValue={"This Month"} />
            </Flex>
            <Flex>
                <LineChart
                    width={1000}
                    height={400}
                    data={data}
                    syncId="anyId"
                    margin={{
                        top: 30,
                        right: 30,
                        left: 10,
                        bottom: 30,
                    }}
                >
                    {/* <CartesianGrid strokeDasharray="3 3" /> */}
                    <XAxis dataKey="name" />
                    <YAxis dataKey="amount" />
                    <Tooltip />
                    <Line type="monotone" dataKey="amount" stroke="maroon" fill="maroon" />
                    {/* <Brush /> */}
                </LineChart>
            </Flex>
            {/* <Table dataSource={dataSource} columns={columns} pagination={false} /> */}
        </div>
    )
}

export default SalesOrderSummaryCard