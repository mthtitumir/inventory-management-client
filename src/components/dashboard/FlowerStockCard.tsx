import { Button, Flex } from "antd"
import { testStyle } from "../../styles/dasboard.styles"
import { CiDeliveryTruck } from "react-icons/ci";

const FlowerStockCard = () => {
    return (
        <div style={testStyle}>
            <p style={{ fontSize: "19px", borderBottom: "1px solid #ebeaf2", padding: "10px 15px", backgroundColor: "#FFFDD0", borderRadius: "10px 10px 0 0" }}>Flower Stock</p>
            <Flex>
                <Flex vertical style={{ padding: "20px", fontSize: "17px", borderRight: "1px solid #ebeaf2" }} gap={10}>
                    <Flex justify="space-between" style={{ paddingBottom: "5px", borderBottom: "1px solid #ebeaf2" }}>
                        <p>Low Stock Items</p>
                        <p style={{ fontSize: "19px" }}>2000</p>
                    </Flex>
                    <Flex justify="space-between" style={{ paddingBottom: "5px", borderBottom: "1px solid #ebeaf2" }}>
                        <p>All Items</p>
                        <p style={{ fontSize: "19px" }}>2000</p>
                    </Flex>
                    <Flex justify="space-between" gap={50}>
                        <p>Quantity In Shipping Process</p>
                        <p style={{ fontSize: "19px" }}>2000</p>
                    </Flex>
                </Flex>
                <Flex vertical align="center" style={{ padding: "20px 10px" }} gap={1}>
                    <p style={{ fontSize: "3em" }}>45</p>
                    <p>Qty</p>
                    <Button style={{ outlineColor: "pink", marginTop: "5px" }} icon={<CiDeliveryTruck />}>To Be Shipped</Button>
                </Flex>
            </Flex>
        </div>
    )
}

export default FlowerStockCard