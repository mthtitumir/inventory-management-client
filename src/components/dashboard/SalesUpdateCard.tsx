import { Button, Flex } from "antd"
import { testStyle } from "../../styles/dasboard.styles"
import { CiDeliveryTruck } from "react-icons/ci";

const SalesUpdateCard = () => {
    return (
        <div style={testStyle}>
            <p style={{ fontSize: "19px", borderBottom: "1px solid #ebeaf2", padding: "10px 15px", backgroundColor: "#FFFDD0", borderRadius: "10px 10px 0 0" }}>Sales Update</p>
            <Flex align="center" justify="space-between" style={{ padding: "0 10px", overflowX: "auto" }} gap={0}>
                {
                    [80, 42, 73].map((item) => <Flex key={item} vertical align="center" style={{ padding: "20px 10px" }}>
                        <p style={{fontSize: "3em"}}>{item}</p>
                        <p>Qty</p>
                        <Button style={{outlineColor: "pink", marginTop: "5px"}} icon={<CiDeliveryTruck />}>To Be Shipped</Button>
                    </Flex>)
                }
            </Flex>
        </div>
    )
}

export default SalesUpdateCard