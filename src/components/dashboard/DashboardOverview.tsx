import { Flex } from "antd"
import InventorySummaryCard from "./InventorySummaryCard"
import SalesUpdateCard from "./SalesUpdateCard"
import FlowerStockCard from "./FlowerStockCard"
import BestSellingCard from "./BestSellingCard"
import PurchasedUpdateCard from "./PurchasedUpdateCard"
import SalesOrderCard from "./SalesOrderCard"

const DashboardOverview = () => {
    return (
        <Flex vertical gap={16}>
            <Flex style={{ padding: "" }} gap={30}>
                <Flex>
                    <SalesUpdateCard />
                </Flex>
                <Flex>
                    <InventorySummaryCard />
                </Flex>
            </Flex>
            <Flex gap={30}>
                <Flex>
                    <FlowerStockCard />
                </Flex>
                <Flex>
                    <BestSellingCard />
                </Flex>
            </Flex>
            <Flex gap={30}>
                <Flex>
                    <PurchasedUpdateCard />
                </Flex>
                <Flex>
                    <SalesOrderCard />
                </Flex>
            </Flex>
        </Flex>
    )
}

export default DashboardOverview