import { Flex, Select } from "antd"
import { testStyle } from "../../styles/dasboard.styles"
import { IoIosArrowDown } from "react-icons/io";

const BestSellingCard = () => {
    const handleChangeSelect = (values: string) => {
        console.log(values);

    }
    const options = [
        {
            value: 'month',
            label: 'This Month',
        },
        {
            value: 'week',
            label: 'This Week',
        },
    ];
    return (
        <div style={testStyle}>
            <Flex justify="space-between" style={{ fontSize: "19px", borderBottom: "1px solid #ebeaf2", padding: "10px 15px", backgroundColor: "#FFFDD0", borderRadius: "10px 10px 0 0" }}>
                <p>Best Selling Items</p>
                <Select suffixIcon={<IoIosArrowDown size={16} color="maroon" />} variant="borderless" onChange={handleChangeSelect} style={{ backgroundColor: "none" }} options={options} defaultValue={"This Month"} />
            </Flex>
            <Flex style={{ padding: "0 10px" }} gap={20}>
                {
                    [80, 42, 73].map((item) => <Flex key={item} vertical align="center" style={{ padding: "20px" }} gap={1}>
                        <img style={{ width: "80px", borderRadius: "5px" }} src="https://img.freepik.com/premium-photo/pink-rose-flower_303714-329.jpg" />
                        <p>Pink Rose</p>
                        <p style={{ fontSize: "15px" }}><span style={{ fontSize: "24px", fontWeight: "bold" }}>100</span> pcs</p>
                    </Flex>)
                }
            </Flex>
        </div>
    )
}

export default BestSellingCard