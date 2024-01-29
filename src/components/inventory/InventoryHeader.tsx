import { Button, Col, Row } from "antd"
import { PlusCircleOutlined } from "@ant-design/icons"
import { useState } from "react"
import MyModal from "../ui/MyModal";
import AddUpdateFlower from "../form/AddUpdateFlower";

const InventoryHeader = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleOpenModal = () => {
        setIsModalOpen(true);

    }
    return (
        <Row align={"middle"} justify={"space-between"}>
            <Col><h3>Inventory</h3></Col>
            <Col>
                <Button onClick={() => handleOpenModal()} type="primary" icon={<PlusCircleOutlined />}>
                    Add New Flower
                </Button>
            </Col>
            <MyModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}><AddUpdateFlower setIsModalOpen={setIsModalOpen} id={undefined} /></MyModal>
        </Row>
    )
}

export default InventoryHeader