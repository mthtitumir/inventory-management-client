import { Col, Flex, Row } from "antd"
import InventorySummaryCard from "./InventorySummaryCard"
import SalesUpdateCard from "./SalesUpdateCard"
import FlowerStockCard from "./FlowerStockCard"
import BestSellingCard from "./BestSellingCard"
import PurchasedUpdateCard from "./PurchasedUpdateCard"
import SalesOrderCard from "./SalesOrderCard"
import SalesOrderSummaryCard from "./SalesOrderSummaryCard"

const DashboardOverview = () => {
    return (
        <Flex vertical gap={20}  style={{ paddingRight: "" }}>
            <Row gutter={[20, 20]}>
                <Col xs={24} md={12}>
                    <SalesUpdateCard />
                </Col>
                <Col xs={24} md={12}>
                    <InventorySummaryCard />
                </Col>
            </Row>
            <Row gutter={[20, 20]}>
                <Col xs={24} md={12}>
                    <FlowerStockCard />
                </Col>
                <Col xs={24} md={12}>
                    <BestSellingCard />
                </Col>
            </Row>
            <Row gutter={[20, 20]}>
                <Col xs={24} md={10}>
                    <PurchasedUpdateCard />
                </Col>
                <Col xs={24} md={14}>
                    <SalesOrderCard />
                </Col>
            </Row>
            <Flex style={{overflowX: "auto"}}>
                <SalesOrderSummaryCard />
            </Flex>
        </Flex>
    )
}

export default DashboardOverview