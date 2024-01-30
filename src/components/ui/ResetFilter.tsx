import { RedoOutlined } from "@ant-design/icons";
import { filterState } from "../inventory/InventoryHeader";
import { Button } from "antd";

interface ResetFilterProps {
    setFilter?: React.Dispatch<React.SetStateAction<Partial<filterState>>>;
}

const ResetFilter: React.FC<ResetFilterProps> = ({ setFilter }) => {
    const resetFilter = () => {
        if (setFilter) {
            setFilter({});
        }
    };

    return (
        <Button
            onClick={resetFilter}
            icon={<RedoOutlined />}
            size={"middle"}
            style={{ color: "orangered", borderColor: "orangered" }}
        >
            Reset
        </Button>
    );
};

export default ResetFilter;
