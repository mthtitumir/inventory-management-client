import { Flex } from "antd"
import { testStyle } from "../../styles/dasboard.styles"

const BestSellingCard = () => {
    return (
        <div style={testStyle}>
            <p style={{ fontSize: "19px", borderBottom: "1px solid #ebeaf2", padding: "10px 15px", backgroundColor: "#FFFDD0", borderRadius: "10px 10px 0 0" }}>Sales Update</p>
            <Flex style={{ padding: "0 10px" }} gap={20}>
                {
                    [80, 42, 73].map((item) => <Flex key={item} vertical align="center" style={{ padding: "20px" }} gap={1}>
                        <img style={{ width: "80px" }} src="https://img.freepik.com/premium-photo/pink-rose-flower_303714-329.jpg" />
                        <p>Pink Rose</p>
                        <p style={{fontSize: "15px"}}><span style={{fontSize: "24px", fontWeight: "bold"}}>100</span> pcs</p>
                    </Flex>)
                }
            </Flex>
        </div>
    )
}

export default BestSellingCard