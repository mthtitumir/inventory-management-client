import { Button, Flex } from "antd"
import { testStyle } from "../../styles/dasboard.styles"
import { CiDeliveryTruck } from "react-icons/ci";

const SalesUpdateCard = () => {
    return (
        <div style={testStyle}>
            <p style={{ fontSize: "19px", borderBottom: "1px solid #ebeaf2", padding: "10px 15px", backgroundColor: "#FFFDD0", borderRadius: "10px 10px 0 0" }}>Sales Update</p>
            <Flex style={{ padding: "0 10px" }} gap={20}>
                {
                    [80, 42, 73].map((item) => <Flex vertical align="center" style={{ padding: "20px 10px" }} gap={1}>
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