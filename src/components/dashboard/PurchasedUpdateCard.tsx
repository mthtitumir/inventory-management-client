import { Flex, Select } from "antd"
import { testStyle } from "../../styles/dasboard.styles"
import { IoIosArrowDown } from "react-icons/io";
import { filterOptions } from "../../constants";

const PurchasedUpdateCard = () => {
    const handleChangeSelect = (values: string) => {
        console.log(values);
    }
    return (
        <div style={testStyle}>
            <Flex align="center" justify="space-between" style={{ fontSize: "19px", borderBottom: "1px solid #ebeaf2", padding: "10px 15px", backgroundColor: "#FFFDD0", borderRadius: "10px 10px 0 0" }}>
                <p>Purchased Products</p>
                <Select suffixIcon={<IoIosArrowDown size={16} color="maroon" />} variant="borderless" onChange={handleChangeSelect} style={{ backgroundColor: "none" }} options={filterOptions} defaultValue={"This Month"} />
            </Flex>
            <Flex style={{ padding: "10px" }} gap={20} justify="center">
                <Flex vertical align="center" style={{ padding: "20px", borderRight: "1px solid #ebeaf2" }} gap={1}>
                    <p>Qty. Ordered</p>
                    <p style={{ fontSize: "15px" }}><span style={{ fontSize: "24px", fontWeight: "bold" }}>900</span> pcs</p>
                </Flex>
                <Flex vertical align="center" style={{ padding: "20px" }} gap={1}>
                    <p>Total Cost</p>
                    <p style={{ fontSize: "15px" }}><span style={{ fontSize: "24px", fontWeight: "bold" }}>$10000</span></p>
                </Flex>
                {/* {
                    [80, 42, 73].map((item) => <Flex key={item} vertical align="center" style={{ padding: "20px" }} gap={1}>
                        <img style={{ width: "80px", borderRadius: "5px" }} src="https://img.freepik.com/premium-photo/pink-rose-flower_303714-329.jpg" />
                        <p>Qty. Ordered</p>
                        <p style={{ fontSize: "15px" }}><span style={{ fontSize: "24px", fontWeight: "bold" }}>100</span> pcs</p>
                    </Flex>)
                } */}
            </Flex>
        </div>
    )
}

export default PurchasedUpdateCard