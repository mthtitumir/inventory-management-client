import { Flex } from "antd"
import { testStyle } from "../../styles/dasboard.styles"
// import { CiDeliveryTruck } from "react-icons/ci";
import { PieChart, Pie, Cell, Tooltip } from 'recharts';

const FlowerStockCard = () => {
    const data = [
        { name: 'In Stock', value: 300 },
        { name: 'Low Stock', value: 300 },
        { name: 'Out Of Stock', value: 200 },
        // { name: 'Total Items', value: 800 },
    ];
    const COLORS = [ '#D2042D','#008000', '#FF5733', '#4169E1'];
    return (
        <div style={testStyle}>
            <p style={{ fontSize: "19px", borderBottom: "1px solid #ebeaf2", padding: "10px 15px", backgroundColor: "#FFFDD0", borderRadius: "10px 10px 0 0" }}>Flower Stock</p>
            <Flex justify="space-between">
                <Flex vertical style={{ padding: "20px", fontSize: "17px", borderRight: "1px solid #ebeaf2", flexGrow: "1" }} gap={10}>
                    <Flex justify="space-between" style={{ paddingBottom: "5px", borderBottom: "1px solid #ebeaf2" }}>
                        <p>Low Stock Items</p>
                        <p style={{ fontSize: "19px" }}>3000</p>
                    </Flex>
                    <Flex justify="space-between" style={{ paddingBottom: "5px", borderBottom: "1px solid #ebeaf2" }}>
                        <p>In Stock</p>
                        <p style={{ fontSize: "19px" }}>3000</p>
                    </Flex>
                    <Flex justify="space-between" gap={50} style={{ paddingBottom: "5px", borderBottom: "1px solid #ebeaf2" }}>
                        <p>Out Of Stock</p>
                        <p style={{ fontSize: "19px" }}>2000</p>
                    </Flex>
                    <Flex justify="space-between" gap={50}>
                        <p>Total Items</p>
                        <p style={{ fontSize: "19px" }}>8000</p>
                    </Flex>
                </Flex>
                <Flex vertical align="center" style={{ padding: "20px" }} gap={1}>
                {/* <ResponsiveContainer width="100%" height="100%"> */}
                    <PieChart width={170} height={170} >
                        <Pie
                            data={data}
                            // cx={120}
                            // cy={120}
                            innerRadius={60}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Tooltip />
                    </PieChart>
                    {/* </ResponsiveContainer> */}
                </Flex>
            </Flex>
        </div>
    )
}

export default FlowerStockCard


/**
 * import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';




      


 */