import { Button, Col, Row } from "antd"
import { PlusCircleOutlined } from "@ant-design/icons"

const InventoryHeader = () => {
    return (
        <Row align={"middle"} justify={"space-between"}>
            <Col><h3>Inventory</h3></Col>
            <Col>
                <Button type="primary" icon={<PlusCircleOutlined />}>
                    Add New Flower
                </Button>
            </Col>
        </Row>
    )
}

export default InventoryHeader