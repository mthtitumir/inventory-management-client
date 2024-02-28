import { Flex } from "antd"
import { testStyle } from "../../styles/dasboard.styles"
// import { CiDeliveryTruck } from "react-icons/ci";

const InventorySummaryCard = () => {
    return (
        <div style={testStyle}>
            <p style={{ fontSize: "19px", borderBottom: "1px solid #ebeaf2", padding: "10px 15px", backgroundColor: "#FFFDD0", borderRadius: "10px 10px 0 0" }}>Inventory Summary</p>
            <Flex vertical style={{ padding: "20px", fontSize: "17px" }} gap={10}>
                <Flex justify="space-between" style={{ paddingBottom: "5px", borderBottom: "1px solid #ebeaf2"}}>
                    <p>Quantity In Hand</p>
                    <p style={{fontSize: "19px"}}>2000</p>
                </Flex>
                <Flex justify="space-between"  style={{ paddingBottom: "5px", borderBottom: "1px solid #ebeaf2"}}>
                    <p>Quantity To Be Received</p>
                    <p style={{fontSize: "19px"}}>2000</p>
                </Flex>
                <Flex justify="space-between"  gap={50}>
                    <p>Quantity In Shipping Process</p>
                    <p style={{fontSize: "19px"}}>2000</p>
                </Flex>
            </Flex>
        </div>
    )
}

export default InventorySummaryCard

// {
//     [80, 42, 73].map((item) => <Flex vertical align="center" style={{ padding: "20px 10px" }} gap={1}>
//         <p style={{fontSize: "3em"}}>{item}</p>
//         <p>Qty</p>
//         <Button style={{outlineColor: "pink", marginTop: "5px"}} icon={<CiDeliveryTruck />}>To Be Shipped</Button>
//     </Flex>)
// }