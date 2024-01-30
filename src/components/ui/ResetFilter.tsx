import { RedoOutlined } from "@ant-design/icons"
import { filterState } from "../inventory/InventoryHeader";
import { Button } from "antd";

const ResetFilter = ({ setFilter }: Partial<filterState>) => {
    const resetFilter = () => {
        setFilter({});
    }
    return (
        <Button onClick={resetFilter} icon={<RedoOutlined />} size={"middle"} style={{ color: "orangered", borderColor: "orangered" }}>
            Reset
        </Button>
    )
}

export default ResetFilter