import { Flex } from "antd"
import InventorySummaryCard from "./InventorySummaryCard"
import SalesUpdateCard from "./SalesUpdateCard"
import FlowerStockCard from "./FlowerStockCard"
import BestSellingCard from "./BestSellingCard"
import PurchasedUpdateCard from "./PurchasedUpdateCard"

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
                    <PurchasedUpdateCard />
                </Flex>
            </Flex>
        </Flex>
    )
}

export default DashboardOverview