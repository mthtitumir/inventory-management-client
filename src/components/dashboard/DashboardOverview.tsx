import { Flex } from "antd"
import InventorySummaryCard from "./InventorySummaryCard"
import SalesUpdateCard from "./SalesUpdateCard"

const DashboardOverview = () => {
    return (
        <div>
            <Flex style={{padding: ""}} gap={30}>
                <Flex>
                    <SalesUpdateCard />
                </Flex>
                <Flex>
                    <InventorySummaryCard />
                </Flex>
            </Flex>
        </div>
    )
}

export default DashboardOverview